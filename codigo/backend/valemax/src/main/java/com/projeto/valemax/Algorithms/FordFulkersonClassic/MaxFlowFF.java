package com.projeto.valemax.Algorithms.FordFulkersonClassic;

import com.projeto.valemax.Algorithms.Commons.WeightedDigraph;
import com.projeto.valemax.Algorithms.Commons.BaseALWeightedDigraph;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;

/**
 * MaxFlowFF class implements the Ford-Fulkerson algorithm for computing the
 * maximum flow in a flow network.
 */
public class MaxFlowFF {

    private int V; // Number of vertices
    private int source; // Source vertex
    private int sink; // Sink vertex
    private int maxFlow; // Maximum flow
    private int[][] matFlows; // Matrix of flows
    private StringBuilder output; // Output of the algorithm
    private List<int[]> gData;
    private List<String[]> stringGraphData;

    /**
     * Constructs a MaxFlowFF object and computes the maximum flow using the
     * Ford-Fulkerson algorithm.
     * 
     * @param v        The number of vertices in the graph.
     * @param source   The source vertex.
     * @param sink     The sink vertex.
     * @param gData    The list of graph data.
     */
    public MaxFlowFF(int v, int source, int sink, List<int[]> gData, List<String[]> stringGraphData) {
        this.V = v;
        this.source = source;
        this.sink = sink;
        this.maxFlow = 0;
        this.matFlows = new int[V][V];
        this.output = new StringBuilder();
        this.gData = gData;
        this.stringGraphData = stringGraphData;
    
        BaseALWeightedDigraph g = this.createGraph(V, gData);
        g.printMatrix();
    
        fordFulkerson(g);

        output.append("{\n");
        output.append("\"maximum_flow\":").append(this.getMaxFlow()).append(",\n");
        this.printMatrixFlows();
    }
    

    /**
     * Ford-Fulkerson algorithm for computing the maximum flow in the graph.
     * 
     * @param g The weighted digraph.
     */
    public void fordFulkerson(WeightedDigraph g) {
        DepthFirstPaths dfs = new DepthFirstPaths(g, source);
        int[] edgeTo = dfs.getEdgeTo();

        while (edgeTo[sink] != -1) {
            int pathFlow = Integer.MAX_VALUE;

            for (int v = sink; v != source; v = edgeTo[v]) {
                int u = edgeTo[v];
                pathFlow = Math.min(pathFlow, g.getWeightAt(u, v));
            }

            maxFlow += pathFlow;

            for (int v = sink; v != source; v = edgeTo[v]) {
                int u = edgeTo[v];
                g.addValueEdge(u, v, -1 * pathFlow);
                g.addValueEdge(v, u, pathFlow);
                matFlows[u][v] += pathFlow;
            }

            dfs = new DepthFirstPaths(g, source);
            edgeTo = dfs.getEdgeTo();
        }
    }

    /**
     * Prints the matrix representation of the flows through each edge.
     */
    public void printMatrixFlows() {

        output.append("\"nodes\":[\n");
        Set<Integer> existingNodes = new HashSet<>();
        for (int i = 0; i < gData.size(); i++) {
            int sourceNodeId = gData.get(i)[0];
            int targetNodeId = gData.get(i)[1];
            if (!existingNodes.contains(sourceNodeId)) {
                output.append("    {\"id\":").append(sourceNodeId)
                        .append(",\"codigo\":\"").append(stringGraphData.get(i)[0])
                        .append("\",\"type\":\"").append(stringGraphData.get(i)[1])
                        .append("\",\"storageCapacity\":\"").append(stringGraphData.get(i)[2])
                        .append("\",\"codSubmodal\":\"").append(stringGraphData.get(i)[6])
                        .append("\",\"codProd\":\"").append(stringGraphData.get(i)[7])
                        .append("\"}");
                existingNodes.add(sourceNodeId);
                if (i < gData.size() - 1) {
                    output.append(",\n");
                } else {
                    output.append("\n");
                }
            }
            if (!existingNodes.contains(targetNodeId) && !stringGraphData.get(i)[0].equals("superfonte")) {
                output.append("    {\"id\":").append(targetNodeId)
                        .append(",\"codigo\":\"").append(stringGraphData.get(i)[3])
                        .append("\",\"type\":\"").append(stringGraphData.get(i)[4])
                        .append("\",\"storageCapacity\":\"").append(stringGraphData.get(i)[5])
                        .append("\",\"codSubmodal\":\"").append(stringGraphData.get(i)[6])
                        .append("\",\"codProd\":\"").append(stringGraphData.get(i)[7])
                        .append("\"}");
                existingNodes.add(targetNodeId);
                if (i < gData.size() - 1) {
                    output.append(",\n");
                } else {
                    output.append("\n");
                }
            }
        }

        // removing the last comma;
        if (!gData.isEmpty()) {
            output.setLength(output.length() - 2);
        }

        output.append("  ],\n  \"edges\":[\n");

        int id = 1;
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                int value = matFlows[i][j];
                if (value != 0) {
                    output.append("{\"id\":")
                         .append(id++)
                         .append(",\"source\":")
                         .append(i)
                         .append(",\"target\":")
                         .append(j)
                         .append(",\"flux\":")
                         .append(value)
                         .append("},\n");
                }
            }
        }

        if (output.length() > 0) {
            output.setLength(output.length() - 2);
        }
        output.append("\n]");
        output.append("\n}");
    }

    /**
     * Gets the maximum flow value.
     * 
     * @return The maximum flow.
     */
    public int getMaxFlow() {
        return maxFlow;
    }

    /**
     * Gets the output of the algorithm.
     * 
     * @return The output.
     */
    public String getOutput() {
        return output.toString();
    }

    /**
     * Creates a graph from the data in the file.
     * 
     * @param V     The number of vertices.
     * @param gData The list of graph data.
     * @return The graph.
     */
    public BaseALWeightedDigraph createGraph(int V, List<int[]> gData) {
        BaseALWeightedDigraph g = new BaseALWeightedDigraph(V);

        // Edges
        for (int[] data : gData) {
            int v = data[0];
            int w = data[1];
            int weight = data[2];
            g.addEdge(v, w, weight);
        }

        return g;
    }

    /**
     * Reads the graph data from a file.
     * 
     * @param filepath The path to the file.
     * @return The list of graph data.
     */
    public static List<int[]> readData(String filepath) {
        List<int[]> graphData = new ArrayList<>();

        try {
            File file = new File(filepath);
            Scanner scanner = new Scanner(file);

            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                String[] parts = line.split(",");

                int v = Integer.parseInt(parts[0]);
                int w = Integer.parseInt(parts[1]);
                int weight = Integer.parseInt(parts[2]);

                graphData.add(new int[]{v, w, weight});
            }

            scanner.close();

        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }

        return graphData;
    }

    /**
     * Main method for testing purposes.
     * 
     * @param args The command-line arguments.
     */
    public static void main(String[] args) {
        // int v = 6;
        // int source = 0;
        // int sink = 5;
        // String filepath = "codigo/backend/valemax/src/main/resources/dataTests/test0.csv";
    
        // MaxFlowFF ff = new MaxFlowFF(v, source, sink, readData(filepath));
        // System.out.println(ff.getOutput());
    }
}

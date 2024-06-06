package com.projeto.valemax.Algorithms.EdmondsKarpClassic;

import com.projeto.valemax.Algorithms.Commons.BaseALWeightedDigraph;
import com.projeto.valemax.Algorithms.Commons.BreadthFirstPaths;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;

/**
 * Implementation of the Edmonds-Karp algorithm for computing the maximum flow
 * in a flow network.
 * 
 */
public class MaxFlowEK {
    private int V; // Number of vertices
    private int source; // Source vertex
    private int sink; // Sink vertex
    private int maxFlow; // Maximum flow
    private int[][] matFlows; // Matrix of flows

    /**
     * Constructs a MaxFlowEK object and computes the maximum flow using the
     * Edmonds-Karp algorithm.
     * 
     * @param V
     * @param source
     * @param sink
     * @param filepath
     */
    public MaxFlowEK(int V, int source, int sink, String filepath) {
        this.V = V;
        this.source = source;
        this.sink = sink;
        this.maxFlow = 0;
        this.matFlows = new int[V][V];
        List<int[]> gData = this.readData(filepath);

        edmondsKarp(V, gData);
    }

    /**
     * Computes the maximum flow in the graph using the Edmonds-Karp algorithm.
     * 
     * @param V
     * @param gData
     */
    public void edmondsKarp(int V, List<int[]> gData) {

        BaseALWeightedDigraph g = createGraph(V, gData);
        System.out.println("Original Graph:");
        g.printMatrix();

        BreadthFirstPaths bfs = new BreadthFirstPaths(g, source);
        int[] edgeTo = bfs.getEdgeTo();

        while (edgeTo[sink] != -1) { // Check if there is still a path from source to sink
            int pathFlow = Integer.MAX_VALUE; // Calculates the bottleneck of the found path.

            for (int v = sink; v != source; v = edgeTo[v]) {
                int u = edgeTo[v];
                pathFlow = Math.min(pathFlow, g.getWeightAt(u, v));
            }

            // System.out.println("pathFlow aqui: " + pathFlow);
            maxFlow += pathFlow; // Updates the current flow and recalculates the edges of the residual graph.

            for (int v = sink; v != source; v = edgeTo[v]) {
                int u = edgeTo[v];
                g.addValueEdge(u, v, -1 * pathFlow);
                g.addValueEdge(v, u, pathFlow);
                matFlows[u][v] += pathFlow;
            }

            bfs = new BreadthFirstPaths(g, source); // Computes a new path in the residual graph using BFS.
            edgeTo = bfs.getEdgeTo();
        }

        System.out.println("Maximum Flow: " + maxFlow);
        System.out.println("Flow Matrix:");
        this.printMatrixFlows();
    }

    /**
     * Prints the matrix representation of the flows through each edge.
     */
    public void printMatrixFlows() {
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                System.out.format("%6d", matFlows[i][j]);
            }
            System.out.println("");
        }
    }

    /**
     * Gets the array of maximum flows through each edge.
     * 
     * @return The array of maximum flows.
     */
    public int getMaxFlow() {
        return maxFlow;
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

        // edges;
        for (int[] data : gData) {
            int v = data[0];
            int w = data[1];
            int weight = data[2];
            g.addEdge(v, w, weight);
        }

        return g;
    }

    /**
     * Resets the graph to its original state.
     * 
     * @param g     The graph.
     * @param gData The list of graph data.
     */
    public void resetGraph(BaseALWeightedDigraph g, List<int[]> gData) {
        for (int[] data : gData) {
            int v = data[0];
            int w = data[1];
            int weight = data[2];
            g.resetEdge(v, w, weight);
        }
    }

    /**
     * Reads the graph data from a file.
     * 
     * @param filepath The path to the file.
     * @return The list of graph data.
     */
    public List<int[]> readData(String filepath) {
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

                graphData.add(new int[] { v, w, weight });
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
     * Main method.
     * 
     * @param args The command-line arguments.
     */
    public static void main(String[] args) {

        int v;
        int source;
        int sink;
        String filepath_g;

        v = 6;
        source = 0;
        sink = 5;
        filepath_g = "codigo/backend/valemax/src/main/resources/dataTests/test0.csv";
        MaxFlowEK ek2 = new MaxFlowEK(v, source, sink, filepath_g);
    }

}

package com.projeto.valemax.Algorithms.EdmondsKarpStockModeling;

import com.projeto.valemax.Algorithms.Commons.BreadthFirstPaths;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

/**
 * Class implementing the Edmonds-Karp algorithm for finding maximum flow in a network.
 */
public class MaxFlowEK {
    private int V; // Number of vertices
    private int source; // Source vertex
    private int sink; // Sink vertex
    private int maxFlow; // Maximum flow value
    private int[] arrMaxFlows; // Array to store maximum flows for each period
    private int[][] matFlows; // Matrix to store flow values between vertices
    private StringBuilder output; // Output of the algorithm 
    private List<int[]> gData; // Graph data
    private List<String[]> stringGraphData; // Additional string data associated with the graph

    // /**
    //  * Constructor to initialize MaxFlowEK object with given parameters and perform Edmonds-Karp algorithm.
    //  *
    //  * @param V         Number of vertices in the graph.
    //  * @param source    Source vertex for the flow.
    //  * @param sink      Sink vertex for the flow.
    //  * @param period    Number of periods.
    //  * @param filepath_g Filepath for the graph data.
    //  * @param filepath_s Filepath for the stock data.
    //  */
    // public MaxFlowEK(int V, int source, int sink, int period, String filepath_g, String filepath_s) {
    //     this.V = V;
    //     this.source = source;
    //     this.sink = sink;
    //     this.maxFlow = 0;
    //     this.arrMaxFlows = new int[period];
    //     this.matFlows = new int[V][V];
    //     List<int[]> gData = this.readData(filepath_g);
    //     List<int[]> sData = this.readStocks(filepath_s);

    //     edmondsKarp(period, V, gData, sData);
    // }

    // backend test
    public MaxFlowEK(int V, int source, int sink, int period, List<int[]> gData, List<int[]> sData, List<String[]> stringGraphData) {
        this.V = V;
        this.source = source;
        this.sink = sink;
        this.maxFlow = 0;
        this.arrMaxFlows = new int[period];
        this.matFlows = new int[V][V];
        this.output = new StringBuilder();
        this.gData = gData;
        this.stringGraphData = stringGraphData;

        edmondsKarp(period, V, gData, sData);
    }

    public MaxFlowEK(int v, int source, int sink, int period, String filepathG, String filepathS) {
    }

    /**
     * Implementation of the Edmonds-Karp algorithm.
     *
     * @param period Number of periods.
     * @param V      Number of vertices in the graph.
     * @param gData  Graph data.
     * @param sData  Stock data.
     */
    public void edmondsKarp(int period, int V, List<int[]> gData, List<int[]> sData) {
        ALWeightedDigraph g = createGraph(V, gData, sData);
        // output.append("Maximum Flow Optimization with Edmonds Karp:\n");
        // g.printMatrix();

        boolean stocking = false; // Temporary control variable

        for (int i = 1; i <= period; i++) {

            output.append("{\n");
            output.append("\"day\":").append(i).append(",\n");

            stocking = !stocking; // Temporary control variable

            BreadthFirstPaths bfs = new BreadthFirstPaths(g, source);
            int[] edgeTo = bfs.getEdgeTo();

            while (edgeTo[sink] != -1) { // Check if there is still a path from source to sink
                int pathFlow = Integer.MAX_VALUE; // Calculate the bottleneck of the found path

                for (int v = sink; v != source; v = edgeTo[v]) {
                    int u = edgeTo[v];
                    pathFlow = Math.min(pathFlow, g.getWeightAt(u, v));

                    // Code to perform stocking
                    if (g.getStockCapacity(v) > 0 && stocking) {
                        int diff = (g.getWeightAt(u, v) - pathFlow);

                        if (diff <= g.getStockCapacity(v)) {
                            g.setStockValue(v, diff);
                            g.addValueEdge(u, v, -1 * diff);

                            output.append(g.getStockValue(v)).append(" products stocked at vertex ").append(v).append("\n");
                        } else {
                            output.append("Insufficient capacity for stocking\n");
                        }
                    }
                }

                maxFlow += pathFlow;

                for (int v = sink; v != source; v = edgeTo[v]) {
                    int u = edgeTo[v];
                    g.addValueEdge(u, v, -1 * pathFlow);
                    g.addValueEdge(v, u, pathFlow);
                    matFlows[u][v] += pathFlow;

                    // Code to empty the stock
                    if (g.getStockValue(u) > 0 && !stocking) {
                        pathFlow -= g.getStockValue(u);
                        g.setStockValue(u, 0);
                        output.append("Stock emptied\n");
                    }
                }

                bfs = new BreadthFirstPaths(g, source); // Calculate a new path in the residual graph using BFS
                edgeTo = bfs.getEdgeTo();
            }

            // output.append("\"Maximum Flow\":").append(maxFlow).append("\n");
            // output.append("Flow matrix:\n");
            output.append(getMatFlows());

            // Reset for the next period
            resetGraph(g, gData);
            arrMaxFlows[i - 1] = maxFlow;
            maxFlow = 0;
            matFlows = new int[V][V];
        }
    }

    /**
     * Prints the flow matrix.
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
     * Gets the array of maximum flows for each period.
     *
     * @return The array of maximum flows.
     */
    public int[] getMaxFlow() {
        return arrMaxFlows;
    }

    int id = 1;
    public String getMatFlows() {
        StringBuilder stringBuilder = new StringBuilder();

        stringBuilder.append("\"maximum_flow\":").append(maxFlow).append(",\n");

        stringBuilder.append("\"nodes\":[\n");
        Set<Integer> existingNodes = new HashSet<>();
        for (int i = 0; i < gData.size(); i++) {
            int sourceNodeId = gData.get(i)[0];
            int targetNodeId = gData.get(i)[1];
            if (!existingNodes.contains(sourceNodeId)) {
                stringBuilder.append("    {\"id\":").append(sourceNodeId)
                        .append(",\"codigo\":\"").append(stringGraphData.get(i)[0])
                        .append("\",\"type\":\"").append(stringGraphData.get(i)[1])
                        .append("\",\"storageCapacity\":\"").append(stringGraphData.get(i)[2])
                        .append("\",\"codSubmodal\":\"").append(stringGraphData.get(i)[6])
                        .append("\",\"codProd\":\"").append(stringGraphData.get(i)[7])
                        .append("\"}");
                existingNodes.add(sourceNodeId);
                if (i < gData.size() - 1) {
                    stringBuilder.append(",\n");
                } else {
                    stringBuilder.append("\n");
                }
            }
            if (!existingNodes.contains(targetNodeId) && !stringGraphData.get(i)[0].equals("superfonte")) {
                stringBuilder.append("    {\"id\":").append(targetNodeId)
                        .append(",\"codigo\":\"").append(stringGraphData.get(i)[3])
                        .append("\",\"type\":\"").append(stringGraphData.get(i)[4])
                        .append("\",\"storageCapacity\":\"").append(stringGraphData.get(i)[5])
                        .append("\",\"codSubmodal\":\"").append(stringGraphData.get(i)[6])
                        .append("\",\"codProd\":\"").append(stringGraphData.get(i)[7])
                        .append("\"}");
                existingNodes.add(targetNodeId);
                if (i < gData.size() - 1) {
                    stringBuilder.append(",\n");
                } else {
                    stringBuilder.append("\n");
                }
            }
        }

        // removing the last comma;
        if (!gData.isEmpty()) {
            stringBuilder.setLength(stringBuilder.length() - 2);
        }

        stringBuilder.append("  ],\n  \"edges\":[\n");
        int numNodes = matFlows.length;

        for (int i = 0; i < numNodes; i++) {
            for (int j = 0; j < numNodes; j++) {
                int value = matFlows[i][j];
                if (value != 0) {
                    stringBuilder.append("{\"id\":")
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

        if (stringBuilder.length() > 0) {
            stringBuilder.setLength(stringBuilder.length() - 2);
        }
        stringBuilder.append("\n]");
        stringBuilder.append("\n}");
        
        return stringBuilder.toString();
    }



    public String getOutput() {
        return output.toString();
    }

    /**
     * Creates the graph based on graph data and stock data.
     *
     * @param V     Number of vertices in the graph.
     * @param gData Graph data.
     * @param sData Stock data.
     * @return The weighted directed graph.
     */
    public ALWeightedDigraph createGraph(int V, List<int[]> gData, List<int[]> sData) {
        ALWeightedDigraph g = new ALWeightedDigraph(V);

        // Edges
        for (int[] data : gData) {
            int v = data[0];
            int w = data[1];
            int weight = data[2];
            g.addEdge(v, w, weight);
        }

        // Stocks
        if (sData != null && !sData.isEmpty()) {
            for (int[] data : sData) {
                int v = data[0];
                int stockCapacity = data[1];
                g.setStockCapacity(v, stockCapacity);
            }
        }

        return g;
    }

    /**
     * Resets the graph to its original state based on graph data.
     *
     * @param g     The weighted directed graph.
     * @param gData Graph data.
     */
    public void resetGraph(ALWeightedDigraph g, List<int[]> gData) {
        for (int[] data : gData) {
            int v = data[0];
            int w = data[1];
            int weight = data[2];
            g.resetEdge(v, w, weight);
        }
    }

    /**
     * Reads graph data from a file.
     *
     * @param filepath The filepath of the file containing graph data.
     * @return A list containing the graph data.
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
     * Reads stock data from a file.
     *
     * @param filepath The filepath of the file containing stock data.
     * @return A list containing the stock data.
     */
    public List<int[]> readStocks(String filepath) {
        List<int[]> stocksData = new ArrayList<>();

        try {
            File file = new File(filepath);
            Scanner scanner = new Scanner(file);

            while (scanner.hasNextLine()) {
                String line = scanner.nextLine();
                String[] parts = line.split(",");

                int v = Integer.parseInt(parts[0]);
                int stockCapacity = Integer.parseInt(parts[1]);

                stocksData.add(new int[]{v, stockCapacity});
            }

            scanner.close();

        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }

        return stocksData;
    }

    /**
     * Main method for testing MaxFlowEK class.
     *
     * @param args Command line arguments (not used).
     */
    public static void main(String[] args) {
    }

}

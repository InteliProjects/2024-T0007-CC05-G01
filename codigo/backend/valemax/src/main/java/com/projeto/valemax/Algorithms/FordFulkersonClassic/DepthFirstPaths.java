package com.projeto.valemax.Algorithms.FordFulkersonClassic;

import com.projeto.valemax.Algorithms.Commons.WeightedDigraph;

/**
 * DepthFirstPaths class implements a depth-first search algorithm for finding paths 
 * in a weighted digraph starting from a given source vertex.
 */
public class DepthFirstPaths {

    private boolean[] marked; // Marks visited vertices
    private int[] edgeTo; // Stores the edge taken to reach each vertex in the DFS path
    private final int s; // Source vertex

    /**
     * Constructs a DepthFirstPaths object and performs a depth-first search on 
     * the given weighted digraph starting from the specified source vertex.
     * 
     * @param G The weighted digraph.
     * @param s The source vertex.
     */
    public DepthFirstPaths(WeightedDigraph G, int s) {
        this.s = s;
        marked = new boolean[G.V()]; // Initialize array to mark visited vertices
        edgeTo = new int[G.V()]; // Initialize array to store edges leading to each vertex
        for (int i = 0; i < G.V(); i++)
            edgeTo[i] = -1; // Initialize edgeTo array
        dfs(G, s); // Start DFS from the source vertex
    }

    /**
     * Depth-first search (DFS) traversal of the graph from a given vertex.
     * 
     * @param G The weighted digraph.
     * @param v The current vertex in the DFS traversal.
     */
    private void dfs(WeightedDigraph G, int v) {
        marked[v] = true; // Mark the current vertex as visited
        for (int w : G.adj(v)) { // Iterate through adjacent vertices
            if (!marked[w]) { // If the adjacent vertex is not visited
                edgeTo[w] = v; // Record the edge leading to this vertex
                dfs(G, w); // Recursively visit the adjacent vertex
            }
        }
    }

    /**
     * Gets the array of edges leading to each vertex in the DFS path.
     * 
     * @return The array of edges leading to each vertex.
     */
    public int[] getEdgeTo() {
        return edgeTo;
    }

    /**
     * Main method for testing purposes.
     * 
     * @param args The command-line arguments.
     */
    public static void main(String[] args) {

    }
}

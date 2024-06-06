package com.projeto.valemax.Algorithms.Commons;

import java.util.LinkedList;
import java.util.Queue;

/**
 * This class represents Breadth First Paths algorithm for finding shortest paths in a weighted directed graph.
 * It computes shortest paths from a source vertex to all other vertices in the graph using breadth-first search (BFS).
 */
public class BreadthFirstPaths {
    private boolean[] marked; // marked[v] = true if there is a path from the source vertex 's' to vertex 'v'
    private int[] edgeTo; // edgeTo[v] = previous vertex on shortest path from 's' to 'v'
    private final int s; // source vertex

    /**
     * Initializes the BreadthFirstPaths object and computes shortest paths from the source vertex 's' to all other vertices in the graph.
     * 
     * @param G The weighted directed graph.
     * @param s The source vertex from which to compute shortest paths.
     */
    public BreadthFirstPaths(WeightedDigraph G, int s) {
        this.s = s;
        marked = new boolean[G.V()]; // array to keep track of visited vertices
        edgeTo = new int[G.V()]; // array to store the edge leading to each vertex on the shortest path
        for (int i = 0; i < G.V(); i++)
            edgeTo[i] = -1; // initialize edgeTo array
        bfs(G, s); // compute shortest paths using BFS
    }

    /**
     * Performs breadth-first search (BFS) on the given graph starting from vertex 'v'.
     * 
     * @param G The weighted directed graph.
     * @param v The source vertex from which to start BFS.
     */
    private void bfs(WeightedDigraph G, int v) {
        Queue<Integer> q = new LinkedList<Integer>(); // queue to process vertices in BFS order
        marked[v] = true; // mark the source vertex as visited
        q.offer(v); // enqueue the source vertex
        while (!q.isEmpty()) {
            int u = q.poll(); // dequeue a vertex
            // Visit all adjacent vertices of 'u'
            for (int w : G.adj(u)) {
                if (!marked[w]) {
                    edgeTo[w] = u; // update the edge leading to 'w'
                    marked[w] = true; // mark 'w' as visited
                    q.offer(w); // enqueue 'w' for further processing
                }
            }
        }
    }

    /**
     * Returns the array containing the edge leading to each vertex on the shortest path from the source vertex.
     * 
     * @return The array of edges leading to each vertex on the shortest path.
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
        // Test cases can be added here
    }
}

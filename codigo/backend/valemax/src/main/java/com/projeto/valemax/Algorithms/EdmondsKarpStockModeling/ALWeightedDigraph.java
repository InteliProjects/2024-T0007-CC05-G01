package com.projeto.valemax.Algorithms.EdmondsKarpStockModeling;

import com.projeto.valemax.Algorithms.Commons.BaseALWeightedDigraph;

/**
 * An adjacency list implementation of a weighted directed graph.
 */
public class ALWeightedDigraph extends BaseALWeightedDigraph {
    private int[][] stocks; // Stock information for each vertex

    /**
     * Constructor to initialize the graph with a specified number of vertices.
     *
     * @param V The number of vertices in the graph.
     */
    public ALWeightedDigraph(int V) {
        super(V);

        // Initialize stock information
        stocks = new int[V][2];
        for (int i = 0; i < V; i++) {
            stocks[i][0] = 0; // Stock capacity
            stocks[i][1] = 0; // Stock value
        }
    }

    /**
     * Sets the stock capacity of a vertex.
     *
     * @param v            The vertex.
     * @param stockCapacity The stock capacity.
     */
    public void setStockCapacity(int v, int stockCapacity) {
        validateV(v);
        stocks[v][0] = stockCapacity;
    }

    /**
     * Sets the stock value of a vertex.
     *
     * @param v          The vertex.
     * @param stockValue The stock value.
     */
    public void setStockValue(int v, int stockValue) {
        validateV(v);
        stocks[v][1] = stockValue;
    }

    /**
     * Returns the stock capacity of a vertex.
     *
     * @param v The vertex.
     * @return The stock capacity of the vertex.
     */
    public int getStockCapacity(int v) {
        validateV(v);
        return stocks[v][0];
    }

    /**
     * Returns the stock value of a vertex.
     *
     * @param v The vertex.
     * @return The stock value of the vertex.
     */
    public int getStockValue(int v) {
        validateV(v);
        return stocks[v][1];
    }

    /**
     * Main method for testing the ALWeightedDigraph class.
     *
     * @param args Command line arguments (not used).
     */
    public static void main(String[] args) {
        ALWeightedDigraph g = new ALWeightedDigraph(4);
        g.addEdge(0, 1, 20);
        g.addEdge(0, 2, 10);
        g.addEdge(1, 2, 30);
        g.addEdge(1, 3, 10);
        g.addEdge(2, 3, 20);
        g.addValueEdge(0, 1, 3);
        g.printMatrix();

        System.out.println("Adjacent vertices of vertex 0: " + g.adj(0));
        System.out.println("Adjacent vertices of vertex 1: " + g.adj(1));
        System.out.println("Adjacent vertices of vertex 2: " + g.adj(2));
        System.out.println("Adjacent vertices of vertex 3: " + g.adj(3));
    }
}

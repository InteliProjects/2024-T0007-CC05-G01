package com.projeto.valemax.Algorithms.Commons;

import java.util.ArrayList;

/**
 * Interface for representing a weighted directed graph.
 */
public interface WeightedDigraph {

    /**
     * Returns the number of vertices in the graph.
     * 
     * @return The number of vertices.
     */
    int V();

    /**
     * Returns the number of edges in the graph.
     * 
     * @return The number of edges.
     */
    int E();
    
    /**
     * Adds a directed edge to the graph with a specific weight.
     * 
     * @param v The source vertex of the edge.
     * @param w The destination vertex of the edge.
     * @param weight The weight of the edge.
     */
    void addEdge(int v, int w, int weight);

    /**
     * Returns a list of vertices adjacent to the specified vertex.
     * 
     * @param v The vertex of interest.
     * @return A list of vertices adjacent to 'v'.
     */
    ArrayList<Integer> adj(int v);

    /**
     * Creates or updates the weight of an edge from vertex v to w.
     * 
     * @param v The source vertex of the edge.
     * @param w The destination vertex of the edge.
     * @param value The value to be added to the weight of the edge.
     * @throws IllegalArgumentException if either vertex v or w is invalid.
     */
    void addValueEdge(int v, int w, int value) throws IllegalArgumentException;

    /**
     * Returns the weight of a specific edge.
     * 
     * @param v The source vertex of the edge.
     * @param w The destination vertex of the edge.
     * @return The weight of the edge between v and w.
     * @throws IllegalArgumentException if either vertex v or w is invalid.
     */
    int getWeightAt(int v, int w) throws IllegalArgumentException;
}

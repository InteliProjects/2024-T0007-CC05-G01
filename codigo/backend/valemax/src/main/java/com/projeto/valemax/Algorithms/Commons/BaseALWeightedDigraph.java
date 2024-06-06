package com.projeto.valemax.Algorithms.Commons;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * This class implements a weighted directed graph using an adjacency list representation.
 * It provides methods to add edges, update weights, retrieve adjacent vertices, and perform other operations on the graph.
 */
public class BaseALWeightedDigraph implements WeightedDigraph {
    protected int V; // Number of vertices
    protected int E; // Number of edges
    protected HashMap<Integer, Integer>[] adjHashTable; // Adjacency list

    /**
     * Initializes a new weighted directed graph with the given number of vertices.
     * 
     * @param V The number of vertices in the graph.
     */
    public BaseALWeightedDigraph(int V) {
        this.V = V;
        this.E = 0;

        adjHashTable = new HashMap[V];
        for (int i = 0; i < V; i++) {
            adjHashTable[i] = new HashMap<>();
        }
    }

    /**
     * Validates if the vertex index is within the valid range.
     * 
     * @param v The vertex index to be validated.
     * @throws IllegalArgumentException if the vertex index is out of range.
     */
    public void validateV(int v) {
        if (v < 0 || v >= V) {
            throw new IllegalArgumentException("Vertex out of range");
        }
    }

    /**
     * Returns the number of vertices in the graph.
     * 
     * @return The number of vertices.
     */
    public int V() {
        return V;
    }

    /**
     * Returns the number of edges in the graph.
     * 
     * @return The number of edges.
     */
    public int E() {
        return E;
    }
    
    /**
     * Adds a directed edge from vertex 'v' to vertex 'w' with the specified weight.
     * 
     * @param v The source vertex of the edge.
     * @param w The destination vertex of the edge.
     * @param weight The weight of the edge.
     */
    public void addEdge(int v, int w, int weight) {
        validateV(v);
        validateV(w);
        if (!adjHashTable[v].containsKey(w)) {
            adjHashTable[v].put(w, weight);
            E++;
        }
    }

    /**
     * Returns a list of vertices adjacent to the specified vertex.
     * 
     * @param v The vertex of interest.
     * @return A list of vertices adjacent to 'v'.
     */
    public ArrayList<Integer> adj(int v) {
        validateV(v);
        ArrayList<Integer> adjVertices = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : adjHashTable[v].entrySet()) {
            if (entry.getValue() > 0) {
                adjVertices.add(entry.getKey());
            }
        }
        return adjVertices;
    }

    /**
     * Resets the weight of the edge from vertex 'v' to vertex 'w' to the specified weight.
     * 
     * @param v The source vertex of the edge.
     * @param w The destination vertex of the edge.
     * @param weight The new weight of the edge.
     */
    public void resetEdge(int v, int w, int weight) {
        validateV(v);
        validateV(w);
        if (adjHashTable[v].containsKey(w)) {
            adjHashTable[v].put(w, weight);
        }
    }

    /**
     * Adds a value to the weight of the edge from vertex 'v' to vertex 'w'.
     * 
     * @param v The source vertex of the edge.
     * @param w The destination vertex of the edge.
     * @param value The value to be added to the weight of the edge.
     */
    public void addValueEdge(int v, int w, int value) {
        validateV(v);
        validateV(w);
        if (adjHashTable[v].containsKey(w))
            value = adjHashTable[v].get(w) + value;
        adjHashTable[v].put(w, value);
    }

    /**
     * Returns the weight of the edge from vertex 'v' to vertex 'w'.
     * 
     * @param v The source vertex of the edge.
     * @param w The destination vertex of the edge.
     * @return The weight of the edge from 'v' to 'w'.
     */
    public int getWeightAt(int v, int w) {
        validateV(v);
        validateV(w);
        return adjHashTable[v].getOrDefault(w, 0);
    }

    /**
     * Prints the adjacency matrix representation of the graph.
     */
    public void printMatrix() {
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                System.out.format("%6d", adjHashTable[i].getOrDefault(j, 0));
            }
            System.out.println("");
        }
    }

    /**
     * Main method for testing purposes.
     * 
     * @param args The command-line arguments.
     */
    public static void main(String[] args) {

    }
}

/**
 * Represents an edge in a graph.
 */
export interface Edge {
    /**
     * The unique identifier of the edge.
     */
    id: number;

    /**
     * The source node of the edge.
     */
    source: number;

    /**
     * The target node of the edge.
     */
    target: number;

    /**
     * The flux value associated with the edge.
     */
    flux: number;
}
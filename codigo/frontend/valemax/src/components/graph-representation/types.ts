import { Edge } from "@/types/edge.type";
import { Node } from "@/types/node.type";

/**
 * Represents the props for the GraphRepresentation component.
 */
export interface GraphRepresentationProps {
    nodes: Node[];
    edges: Edge[];
  }
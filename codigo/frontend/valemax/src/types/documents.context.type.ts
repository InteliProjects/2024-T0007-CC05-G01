import { AlgorithmType } from "@/enums/algorithm-type.enum";
import { Edge } from "./edge.type";
import { Node } from "./node.type";

export interface DocumentsContextType {
  /**
   * The result of the returned data from the server
   * @property day The day of the maximum flow
   * @property maximum_flow The maximum flow
   * @property edges The edges of the graph
   * @property nodes The nodes of the graph
   */
  result: {
    algorithm: keyof typeof AlgorithmType;

    day: number;
    maximum_flow: number;
    edges: Edge[];
    nodes: Node[];
  } | null;

  selectedAlgorithm: keyof typeof AlgorithmType;

  /**
   * The selected node or edge
   */
  selectedNodeOrEdge: string;

  /**
   * The selected node or edge content
   */
  selectedNodeOrEdgeContent: Node | undefined;

  /**
   * Uploads the CSV file to the server
   * @param file The CSV file to be uploaded
   */
  uploadCSV: (file: File) => Promise<void>;
}

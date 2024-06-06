import { NodeType } from "@/enums/node-type.enum";

/**
 * Represents a node in the graph.
 */
export interface Node {
  /**
   * The unique identifier of the node.
   */
  id: number;

  /**
   * The code associated with the node. The name was kept as "codigo" to match the backend, respecting the client database structure.
   */
  codigo: string;

  /**
   * The type of the node. Corresponds to the NodeType enum.
   */
  type: NodeType;

  /**
   * The storage capacity of the node.
   */
  storageCapacity: string;

  /**
   * The submodal code associated with the node.
   */
  codSubmodal: string;

  /**
   * The product code associated with the node.
   */
  codProd: string;
}

import { NodeType } from "@/enums/node-type.enum";

/**
 * Represents the initial Y position for each node type in the graph.
 */
const nodeInitialYPosition: { [key: string]: number } = {
  [NodeType.UsinaBeneficiamento]: 100,
  [NodeType.UsinaBriquete]: 200,
  [NodeType.UsinaPelotizacao]: 250,
  [NodeType.SiteProdutivo]: 50,
  [NodeType.Patio]: 300,
  [NodeType.Cliente]: 350,
  [NodeType.Porto]: 150,
};

export { nodeInitialYPosition };

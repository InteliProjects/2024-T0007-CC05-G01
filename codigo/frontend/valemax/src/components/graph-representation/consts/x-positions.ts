import { NodeType } from "@/enums/node-type.enum";

/**
 * Represents the x positions for different node types.
 */
const xPositions = {
  [NodeType.UsinaBeneficiamento]: 100,
  [NodeType.UsinaBriquete]: 400,
  [NodeType.UsinaPelotizacao]: 700,
  [NodeType.SiteProdutivo]: 1000,
  [NodeType.Patio]: 1300,
  [NodeType.Cliente]: 1600,
  [NodeType.Porto]: 1900,
};

export { xPositions };

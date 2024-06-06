import { nodeInitialYPosition } from "../consts/node-initial-y-position";

/**
 * Calculates the Y position of a node based on its type and the number of nodes of each type.
 * @param nodeType - The type of the node.
 * @param nodeCounts - An object containing the number of nodes for each type.
 * @returns The calculated Y position for the node.
 */
const calculateYPosition = (
  nodeType: string,
  nodeCounts: { [x: string]: number }
) => {
  const verticalSpacing = 100; // Espaçamento vertical entre os nós
  return (
    nodeCounts[nodeType] * verticalSpacing + nodeInitialYPosition[nodeType]
  );
};

export { calculateYPosition };

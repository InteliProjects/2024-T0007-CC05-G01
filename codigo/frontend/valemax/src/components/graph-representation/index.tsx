import React, { useState } from "react";
import ReactFlow, {
  MarkerType,
  useEdgesState,
  useNodesState,
  Controls,
  Position,
} from "react-flow-renderer";
import { Edge } from "@/types/edge.type";
import { Node } from "@/types/node.type";
import { NodeTypeColor } from "@/enums/node-type-color.enum";
import { useRouter } from "next/router";
import { Tooltip } from "./tooltip";
import { NodeType } from "@/enums/node-type.enum";
import { calculateYPosition } from "./utils/calculate-y-position";
import { xPositions } from "./consts/x-positions";
import { NodeLabel } from "./node-label";

// Props for the GraphRepresentation component
interface GraphRepresentationProps {
  nodes: Node[];
  edges: Edge[];
}

// Component to represent the graph with nodes and edges
export const GraphRepresentation: React.FC<GraphRepresentationProps> = ({
  nodes,
  edges,
}) => {
  const router = useRouter();
  const [tooltip, setTooltip] = useState({
    show: false,
    content: "",
    position: { x: 0, y: 0 },
  });

  type NodeCount = Record<NodeType, number>;

  let nodeCounts = Object.values(NodeType).reduce<NodeCount>((acc, type) => {
    acc[type] = 0;
    return acc;
  }, {} as NodeCount);

  const selectNode = (event: any, d: any) => {
    router.push({
      pathname: router.pathname,
      query: { selected: d.id },
    });
  };

  // Handlers to show and hide tooltip
  const handleMouseEnter = (
    event: { clientX: any; clientY: any },
    content: any
  ) => {
    setTooltip({
      show: true,
      content,
      position: { x: event.clientX - 75, y: event.clientY - 75 },
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, show: false });
  };

  // const to represent the nodes in the react flow type
  const reactFlowNodes = nodes.map((node) => {
    const x = xPositions[node.type];
    const y = calculateYPosition(node.type, nodeCounts);
    nodeCounts[node.type] += 1;
    console.log(y);

    return {
      id: node.id.toString(),
      type: "default",
      data: {
        label: (
          <NodeLabel
            label={node.codigo}
            onMouseEnter={(e) => handleMouseEnter(e, `Nó: ${node.codigo}`)}
            onMouseLeave={handleMouseLeave}
          />
        ),
      },
      position: { x, y },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      style: {
        backgroundColor: NodeTypeColor[node.type],
        border: "1px solid #000",
        padding: "10px",
        borderRadius: "5px",
        color: "#fff",
        width: 120,
      },
    };
  });

  // Const to represent the edges in the react flow type
  const reactFlowEdges = edges.map((edge) => ({
    id: edge.id.toString(),
    source: edge.source.toString(),
    target: edge.target.toString(),
    label: `Flux: ${edge.flux}`,
    type: "default",
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
    style: { stroke: "#000", strokeWidth: Math.max(1, edge.flux / 2) },
  }));

  const [nodesState, setNodes] = useNodesState(reactFlowNodes);
  const [edgesState, setEdges] = useEdgesState(reactFlowEdges);

  // Handlers to click on node and edge to select
  const handleNodeClick = (event: any, node: { id: any }) => {
    console.log(`Clicked on the node: ${node.id}`);
    selectNode(event, node);
  };

  const handleEdgeClick = (event: any, edge: { id: any }) => {
    console.log(`Clicado na aresta: ${edge.id}`);
    selectNode(event, edge);
  };

  return (
    <div className="w-full h-full">
      {tooltip.show && (
        <Tooltip show={tooltip.show} position={tooltip.position}>
          {tooltip.content}
        </Tooltip>
      )}
      <ReactFlow
        nodes={nodesState}
        edges={edgesState}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        onNodeClick={handleNodeClick}
        onEdgeClick={handleEdgeClick}
      >
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
};

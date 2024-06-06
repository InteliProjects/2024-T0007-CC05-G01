import { NodeType } from "@/enums/node-type.enum";
import { Edge } from "@/types/edge.type";
import { Node } from "@/types/node.type";

export const nodes: Node[] = [
  // Usinas de Beneficiamento
  {
    id: 1,
    codigo: "Usina Beneficiamento 1",
    type: NodeType.UsinaBeneficiamento,
    x: 50,
    y: 100,
  },
  {
    id: 2,
    codigo: "Usina Beneficiamento 2",
    type: NodeType.UsinaBeneficiamento,
    x: 50,
    y: 200,
  },
  {
    id: 9,
    codigo: "Usina Beneficiamento 3",
    type: NodeType.UsinaBeneficiamento,
    x: 50,
    y: 300,
  },
  {
    id: 10,
    codigo: "Usina Beneficiamento 4",
    type: NodeType.UsinaBeneficiamento,
    x: 50,
    y: 400,
  },

  // Entrepostos
  { id: 3, codigo: "Pátio 1", type: NodeType.Patio, x: 450, y: 100 },
  {
    id: 4,
    codigo: "Site Prod 1",
    type: NodeType.SiteProdutivo,
    x: 400,
    y: 200,
  },
  {
    id: 5,
    codigo: "Usina Briquete 1",
    type: NodeType.UsinaBriquete,
    x: 420,
    y: 300,
  },
  {
    id: 6,
    codigo: "Usina Pelotização 1",
    type: NodeType.UsinaPelotizacao,
    x: 310,
    y: 400,
  },
  { id: 11, codigo: "Pátio 2", type: NodeType.Patio, x: 450, y: 500 },
  {
    id: 12,
    codigo: "Site Prod 2",
    type: NodeType.SiteProdutivo,
    x: 400,
    y: 600,
  },
  {
    id: 13,
    codigo: "Usina Briquete 2",
    type: NodeType.UsinaBriquete,
    x: 420,
    y: 700,
  },
  {
    id: 14,
    codigo: "Usina Pelotização 2",
    type: NodeType.UsinaPelotizacao,
    x: 310,
    y: 800,
  },

  // Clientes e Portos
  { id: 7, codigo: "Cliente 1", type: NodeType.Cliente, x: 750, y: 150 },
  { id: 8, codigo: "Porto 1", type: NodeType.Porto, x: 750, y: 250 },
  { id: 15, codigo: "Cliente 2", type: NodeType.Cliente, x: 750, y: 350 },
  { id: 16, codigo: "Porto 2", type: NodeType.Porto, x: 750, y: 450 },
];

export const edges: Edge[] = [
  { id: 1, source: 1, target: 3, flux: 5 },
  { id: 2, source: 2, target: 4, flux: 3 },
  { id: 9, source: 9, target: 11, flux: 4 },
  { id: 10, source: 10, target: 12, flux: 6 },
  { id: 3, source: 3, target: 5, flux: 4 },
  { id: 4, source: 4, target: 6, flux: 3 },
  { id: 11, source: 11, target: 13, flux: 5 },
  { id: 12, source: 12, target: 14, flux: 2 },
  { id: 5, source: 5, target: 7, flux: 2 },
  { id: 6, source: 6, target: 8, flux: 3 },
  { id: 13, source: 13, target: 15, flux: 1 },
  { id: 14, source: 14, target: 16, flux: 4 },
  { id: 7, source: 1, target: 6, flux: 1 },
  { id: 8, source: 2, target: 5, flux: 2 },
  { id: 15, source: 9, target: 14, flux: 2 },
  { id: 16, source: 10, target: 13, flux: 3 },
];

import { Dialog } from "../ui/dialog/dialog";
import { DialogDescription } from "../ui/dialog/dialog-description";
import { DialogTitle } from "../ui/dialog/dialog-title";
import { DialogContent } from "../ui/dialog/dialog-content";
import { DialogHeader } from "../ui/dialog/dialog-header";
import React, { useContext } from "react";
import { DocumentsContext } from "@/hooks/documents.context";
import { useRouter } from "next/router";
import { Input } from "../ui/input";

/**
 * Converts a NodeType value to a formatted string.
 * @param {NodeType} nodeType The NodeType value to format.
 * @returns {string} The formatted string.
 */
function formatNodeType(nodeType: string) {
  return nodeType
    .split(/(?=[A-Z])/) // Divide a string em cada letra maiúscula.
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza a primeira letra de cada palavra.
    .join(" "); // Junta as palavras com um espaço.
}

/**
 * Renders a modal component that displays information about a selected node or edge.
 */
export function Modal() {
  const { selectedNodeOrEdgeContent } = useContext(DocumentsContext);

  const router = useRouter();

  const closeModal = () => {
    router.push({
      pathname: router.pathname,
      query: {},
    });
  };

  if (!selectedNodeOrEdgeContent) {
    return null;
  }

  return (
    <Dialog open={!!selectedNodeOrEdgeContent} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {selectedNodeOrEdgeContent.codigo} -{" "}
            {formatNodeType(selectedNodeOrEdgeContent.type)}
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-lg font-bold mb-1">
              Capacidade de armazenamento
            </label>
            <Input
              className=" font-bold text-lg"
              value={selectedNodeOrEdgeContent.storageCapacity}
              readOnly
            />
          </div>
          <div>
            <label className="block text-lg font-bold mb-1">
              Codigo do Submodal
            </label>
            <Input
              className=" font-bold text-lg"
              value={selectedNodeOrEdgeContent.codSubmodal}
              readOnly
            />
          </div>
          <div>
            <label className="block text-lg font-bold mb-1">
              Codigo do Produto
            </label>
            <Input
              className=" font-bold text-lg"
              value={selectedNodeOrEdgeContent.codProd}
              readOnly
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

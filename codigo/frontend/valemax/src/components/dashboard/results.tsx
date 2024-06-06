import React, { useContext } from "react";

import { GraphRepresentation } from "../graph-representation";
import { Modal } from "../modal";
import { DocumentsContext } from "@/hooks/documents.context";
import { Tabs } from "../ui/tabs";
import { AlgorithmType } from "@/enums/algorithm-type.enum";

interface ResultsProps {}

/**
 * Renders the results component.
 * It contains the graph representation of the data.
 * And if there is no data, it shows a message to upload a CSV file.
 */
export function Results() {
  const { result } = useContext(DocumentsContext);

  return (
    <div className="w-full h-full pl-8 pt-8">
      <div className="flex items-center justify-between relative pb-4">
        <h2 className="text-3xl font-bold tracking-tight">
          {result
            ? `Resultados do ${AlgorithmType[result.algorithm]}`
            : "Sem Resultados"}
        </h2>
      </div>
      <Tabs defaultValue="overview" className="w-full h-full">
        <div className="grid gap-4 w-full h-full">
          <Modal />
          {!result && (
            <div className="text-gray-500 text-lg">
              Faça upload do arquivo CSV para continuar.
            </div>
          )}
          {result && result.nodes && result.edges && (
            <GraphRepresentation edges={result.edges} nodes={result.nodes} />
          )}
        </div>
      </Tabs>
    </div>
  );
}

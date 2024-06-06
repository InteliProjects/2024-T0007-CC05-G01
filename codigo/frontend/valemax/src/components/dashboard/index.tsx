import * as React from "react";

import { TooltipProvider } from "../ui/tooltip/tooltip-provider";
import { InputFile } from "../ui/input-file/index";
import { DocumentsContext } from "@/hooks/documents.context";
import { useRouter } from "next/router";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Results } from "./results";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface DashboardProps {}

/**
 * Renders the dashboard component.
 * This component displays a file upload input, a result section, and a graph representation.
 */
export function Dashboard() {
  const { uploadCSV } = React.useContext(DocumentsContext);

  const router = useRouter();

  function handleAlgorithmChange(algorithm: string) {
    router.push({
      pathname: router.pathname,
      query: { algorithm: algorithm },
    });
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div className="min-w-[50px] transition-all duration-300 ease-in-out flex flex-row h-full box-border">
        <div className="px-3 py-3 max-w-80 w-full flex gap-4 flex-col h-full box-border">
          <InputFile onFileChange={uploadCSV} />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Instruções CSV</Button>
            </DialogTrigger>
            <DialogContent className="full-w sm:max-w-[975px]">
              <DialogHeader>
                <DialogTitle>Instruções para a construção do CSV</DialogTitle>
              </DialogHeader>
              <div className="mb-4">
                <h3 className="font-bold mb-2">
                  1. Construção do CSV baseado no XML
                </h3>
                <p className="mb-2">
                  Converta o XML para JSON mantendo a hierarquia dos dados. Crie
                  um CSV para cada parte dos dados, focando nas informações de
                  Cadeia e Fluxo. Extraia os dados relevantes usando as colunas
                  idElo para relacionamento.
                </p>
                <p className="mb-2">
                  As colunas necessárias são:{" "}
                  <b>
                    idEloCadeiaProducaoOrigem, descrição, categorizaçãoOrigem,
                    capacidadeArmMaxOrigem, idEloCadeiaProducaoDestino,
                    descriçãoDestino, categorizaçãoDestino,
                    capacidadeArmMaxDestino, códigoSubModal, códigoProduto,
                    pesoMédio.
                  </b>
                </p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold mb-2">
                  2. Explicação da estrutura final do CSV de dados
                </h3>
                <p className="mb-2">
                  As colunas representam: Origem, Descrição, Categorização,
                  Capacidade de Armazenamento (Origem/Destino), Destino, Código
                  do Submodal, Peso Médio. Os dados são utilizados para
                  determinar pontos na rede de transporte, com as colunas de
                  categorização e descrição usadas para filtragem e visualização
                  no frontend. A conexão entre pontos é indicada quando Origem e
                  Destino estão na mesma linha, com o código do Submodal
                  definindo o tipo de transporte.
                </p>
              </div>
              <div className="overflow-x-auto">
                <h3 className="font-bold mb-2">Exemplo de CSV:</h3>
                <table className="table-auto border-collapse">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">
                        idEloCadeiaProducaoOrigem
                      </th>
                      <th className="border px-4 py-2">Descrição</th>
                      <th className="border px-4 py-2">CategorizaçãoOrigem</th>
                      <th className="border px-4 py-2">
                        CapacidadeArmMaxOrigem
                      </th>
                      <th className="border px-4 py-2">
                        idEloCadeiaProducaoDestino
                      </th>
                      <th className="border px-4 py-2">DescriçãoDestino</th>
                      <th className="border px-4 py-2">CategorizaçãoDestino</th>
                      <th className="border px-4 py-2">
                        CapacidadeArmMaxDestino
                      </th>
                      <th className="border px-4 py-2">CódigoSubModal</th>
                      <th className="border px-4 py-2">CódigoProduto</th>
                      <th className="border px-4 py-2">PesoMédio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">1</td>
                      <td className="border px-4 py-2">Origem A</td>
                      <td className="border px-4 py-2">Categoria 1</td>
                      <td className="border px-4 py-2">100</td>
                      <td className="border px-4 py-2">2</td>
                      <td className="border px-4 py-2">Destino B</td>
                      <td className="border px-4 py-2">Categoria 2</td>
                      <td className="border px-4 py-2">200</td>
                      <td className="border px-4 py-2">Submodal 1</td>
                      <td className="border px-4 py-2">Produto X</td>
                      <td className="border px-4 py-2">50</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">3</td>
                      <td className="border px-4 py-2">Origem C</td>
                      <td className="border px-4 py-2">Categoria 3</td>
                      <td className="border px-4 py-2">150</td>
                      <td className="border px-4 py-2">4</td>
                      <td className="border px-4 py-2">Destino D</td>
                      <td className="border px-4 py-2">Categoria 4</td>
                      <td className="border px-4 py-2">250</td>
                      <td className="border px-4 py-2">Submodal 2</td>
                      <td className="border px-4 py-2">Produto Y</td>
                      <td className="border px-4 py-2">75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DialogContent>
          </Dialog>
          <Tabs
            defaultValue="edmonds-karp"
            className="w-full"
            onValueChange={handleAlgorithmChange}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="edmonds-karp">Edmonds Karp</TabsTrigger>
              <TabsTrigger value="ford-fulkerson">Ford Fulkerson</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <Results />
      </div>
    </TooltipProvider>
  );
}

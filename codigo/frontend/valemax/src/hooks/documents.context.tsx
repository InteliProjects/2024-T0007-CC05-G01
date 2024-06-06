import { ReactNode, createContext, useMemo, useState } from "react";
import { config } from "@/configs";
import { DocumentsContextType } from "@/types/documents.context.type";
import { useRouter } from "next/router";

export const DocumentsContext = createContext({} as DocumentsContextType);

/**
 * Provides a context for managing documents and their related operations.
 * @param children - The child components to be wrapped by the context provider.
 */
export const DocumentsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [result, setResult] = useState<DocumentsContextType["result"] | null>(
    null
  );

  const router = useRouter();

  const selectedNodeOrEdge = router.query.selected as string;
  const selectedAlgorithm = router.query
    .algorithm as DocumentsContextType["selectedAlgorithm"];

  /**
   * Uploads a CSV file to the backend.
   * @param file - The CSV file to be uploaded.
   */
  async function uploadCSV(file: File) {
    if (!file) {
      return;
    }

    try {
      const formdata = new FormData();

      formdata.append("file", file);

      // Build the request to the backend
      const requestOptions: RequestInit = {
        method: "POST",
        body: formdata,
        redirect: "follow" as RequestRedirect,
      };

      // Saves the current algorithm selected
      const requestedAlgorithm = selectedAlgorithm || "edmonds-karp";

      // Selects the algorithm based on the button clicked
      const response = await fetch(
        config.api_domain + "/upload/" + requestedAlgorithm,
        requestOptions
      ).then((response) => {
        return response
          .json()
          .then((data) => {
            return data;
          })
          .catch((err) => {
            console.log(err);
          });
      });

      setResult({ ...response, algorithm: requestedAlgorithm });
    } catch (error) {
      console.error(error);
    }
  }

  const selectedNodeOrEdgeContent = useMemo(() => {
    if (!result || !result.nodes) {
      return undefined;
    }

    if (selectedNodeOrEdge) {
      return result.nodes.find(
        (node) => node.id === parseInt(selectedNodeOrEdge)
      );
    }

    return undefined;
  }, [result, selectedNodeOrEdge]);

  return (
    <DocumentsContext.Provider
      value={{
        result,
        selectedAlgorithm,
        selectedNodeOrEdge: selectedNodeOrEdge,
        selectedNodeOrEdgeContent,
        uploadCSV,
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
};

import { Input } from "@/components/ui/input/index";
import { Label } from "@/components/ui/label/index";
import { validFileType } from "@/lib/utils";
import { UploadIcon, Loader } from "lucide-react";
import React, { useState } from "react";

// Updating the interface to reflect that onFileChange can be an async function
interface InputFileProps {
  placeholderText?: string;
  uploadedFileName?: string;
  onFileChange?: (file: File) => Promise<void>; // Assuming onFileChange is an async function
  isLoading?: boolean; // This property can be removed since we will manage loading internally
}

/**
 * Renders an input file component.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.placeholderText="Add XML here"] - The placeholder text for the input.
 * @param {string} props.uploadedFileName - The name of the uploaded file.
 * @param {Function} props.onFileChange - The callback function to handle file changes.
 * @returns {JSX.Element} The input file component.
 */
export function InputFile({
  placeholderText = "Adicione aqui o CSV",
  uploadedFileName,
  onFileChange,
}: InputFileProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Check if file type is valid
    if (!validFileType(file)) {
      console.error(
        "Tipo de arquivo inválido. Por favor, selecione um arquivo CSV."
      );

      // Clear the input field
      if (inputRef.current) {
        inputRef.current.value = "";
      }

      alert("Tipo de arquivo inválido. Por favor, selecione um arquivo CSV.");

      return;
    }
    setFile(file);
    setIsLoading(true);

    try {
      await onFileChange?.(file);
    } catch (error) {
      console.error("Erro ao processar o arquivo", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        htmlFor="picture"
        className="w-full h-40 bg-gray-100 rounded-lg flex flex-col gap-4 justify-center items-center cursor-pointer text-gray-500 hover:bg-gray-200 transition-colors duration-300 ease-in-out"
      >
        {isLoading ? (
          <>
            <Loader className="animate-spin h-5 w-5" />
            <span>Carregando...</span>
          </>
        ) : file ? (
          <>
            <UploadIcon className="h-5 w-5" />
            {uploadedFileName || file.name}
          </>
        ) : (
          <>
            <UploadIcon className="h-5 w-5" />
            {placeholderText}
          </>
        )}
      </Label>
      <Input
        ref={inputRef}
        id="picture"
        onChange={handleChange}
        type="file"
        hidden
        style={{ display: "none" }}
        accept="text/csv"
        disabled={isLoading}
      />
    </div>
  );
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string.
 *
 * @param inputs - The class names to combine.
 * @returns The combined class names as a string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const fileTypes = ["text/csv"];

/**
 * Checks if the file type is valid.
 *
 * @param {File} file - The file to check.
 * @returns {boolean} True if the file type is valid, false otherwise.
 */
export function validFileType(file: File) {
  return fileTypes.includes(file.type);
}

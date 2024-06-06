import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Represents the header component of a dialog.
 *
 * @component
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the component.
 * @param {string} [props.className] - The class name for the component.
 * @returns {JSX.Element} The rendered component.
 */
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);

DialogHeader.displayName = "DialogHeader";

export { DialogHeader };

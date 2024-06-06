import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Renders the footer of a dialog component.
 *
 * @component
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The HTML attributes for the div element.
 * @param {string} className - The class name for the div element.
 * @returns {JSX.Element} The rendered dialog footer.
 */
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);

DialogFooter.displayName = "DialogFooter";

export { DialogFooter };

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils";

/**
 * A custom command list component.
 *
 * @component CommandList
 * @param {string} className - The CSS class name for the component.
 * @param {React.ElementRef<typeof CommandPrimitive.List>} ref - The ref for the component.
 * @param {React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>} props - The props for the component.
 * @returns {JSX.Element} The rendered CommandList component.
 */
const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

export { CommandList };

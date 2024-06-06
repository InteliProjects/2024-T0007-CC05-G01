import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";

/**
 * A custom wrapper component for the `CommandPrimitive.Empty` component.
 * This component forwards the ref and other props to the underlying `CommandPrimitive.Empty` component.
 */
const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

export { CommandEmpty };

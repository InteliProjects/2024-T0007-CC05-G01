import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

/**
 * A customizable separator component.
 *
 * @component
 * @example
 * ```tsx
 * <Separator orientation="horizontal" decorative={true} />
 * ```
 *
 * @param {object} props - The component props.
 * @param {string} [props.className] - Additional CSS class name(s) to apply.
 * @param {string} [props.orientation="horizontal"] - The orientation of the separator. Can be "horizontal" or "vertical".
 * @param {boolean} [props.decorative=true] - Whether the separator is decorative or not.
 * @param {React.Ref} ref - The ref to attach to the root element.
 * @returns {React.ReactElement} The rendered separator component.
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

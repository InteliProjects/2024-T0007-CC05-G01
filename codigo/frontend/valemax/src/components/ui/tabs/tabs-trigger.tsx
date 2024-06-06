import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

/**
 * Renders a trigger component for tabs.
 *
 * @component
 * @example
 * ```tsx
 * <TabsTrigger className="my-trigger" onClick={handleClick} />
 * ```
 *
 * @param {React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>} props - The props for the TabsTrigger component.
 * @param {React.Ref<React.ElementRef<typeof TabsPrimitive.Trigger>>} ref - The ref to attach to the TabsTrigger component.
 * @returns {JSX.Element} The rendered TabsTrigger component.
 */
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
));

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export { TabsTrigger };

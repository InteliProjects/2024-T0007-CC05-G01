import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

/**
 * Renders the content of the tabs.
 *
 * @component
 * @example
 * ```tsx
 * <TabsContent>
 *  <p>Content for the first tab.</p>
 * </TabsContent>
 * ```
 *
 * @param {object} props - The component props.
 * @param {string} props.className - The class name for the component.
 * @param {React.Ref} ref - The ref for the component.
 * @returns {React.ReactElement} The rendered component.
 */
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));

TabsContent.displayName = TabsPrimitive.Content.displayName;

export { TabsContent };

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Renders a command shortcut component.
 *
 * @param className - The CSS class name for the component.
 * @param props - Additional HTML attributes for the component.
 * @returns The rendered command shortcut component.
 */
const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};

CommandShortcut.displayName = "CommandShortcut";

export { CommandShortcut };

import * as React from "react";

import {
  CommandDialog as CommandDialogComponent,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { commandRoutes } from "@/configs/command-routes";
import { renderRoutes } from "./render-routes";

/**
 * Renders a command dialog component.
 * The dialog can be opened by pressing the "k" key while holding the meta key (⌘ on Mac) or the control key (Ctrl on Windows/Linux).
 * It displays a command input field and a list of command routes.
 * If there are no command routes available, it displays a message indicating no results found.
 */
export function CommandDialog() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <CommandDialogComponent open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          {commandRoutes.length ? (
            renderRoutes(commandRoutes)
          ) : (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
        </CommandList>
      </CommandDialogComponent>
    </>
  );
}

import * as React from "react";
import { RocketIcon } from "@radix-ui/react-icons";

import { CommandGroup, CommandItem } from "@/components/ui/command";

/**
 * Renders the routes recursively and returns the corresponding JSX elements.
 *
 * @param routes - The array of routes to render.
 * @returns The JSX elements representing the rendered routes.
 */
function renderRoutes(routes: any) {
  return routes.map((route: any) => {
    if (route.routes) {
      return (
        <CommandGroup key={route.name} heading={route.name}>
          {renderRoutes(route.routes)}
        </CommandGroup>
      );
    } else {
      return (
        <CommandItem key={route.name} className="flex-column">
          {/* You can customize the icon based on route type or name */}
          <RocketIcon className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>{route.name}</span>
            <span className="text-xs">{route.path}</span>
          </div>
        </CommandItem>
      );
    }
  });
}

export { renderRoutes };

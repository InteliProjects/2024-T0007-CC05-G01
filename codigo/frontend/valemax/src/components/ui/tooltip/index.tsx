import { Button } from "../button/index";
import { TooltipContent } from "./tooltip-content";
import { TooltipRoot } from "./tooltip-root";
import { TooltipTrigger } from "./tooltip-trigger";
import { TooltipProvider } from "./tooltip-provider";

export default function Tooltip() {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
}

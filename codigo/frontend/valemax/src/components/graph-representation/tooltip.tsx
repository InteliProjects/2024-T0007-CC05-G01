/**
 * Tooltip component that displays information at a specific position.
 * @param children - The content to be displayed inside the tooltip.
 * @param show - Determines whether the tooltip should be shown or hidden.
 * @param position - The position of the tooltip on the screen.
 * @returns The rendered tooltip component.
 */
export const Tooltip = ({
  children,
  show,
  position,
}: {
  children: React.ReactNode;
  show: boolean;
  position: { x: number; y: number };
}) => {
  if (!show) {
    return null;
  }

  // Render the tooltip with the information inside
  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        backgroundColor: "white",
        color: "black",
        padding: "5px 10px",
        borderRadius: "4px",
        pointerEvents: "none",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <strong>{children}</strong>
    </div>
  );
};

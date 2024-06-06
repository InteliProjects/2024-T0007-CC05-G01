/**
 * Represents a label for a node in a graph.
 *
 * @param label - The text to be displayed as the label.
 * @param onMouseEnter - The event handler for when the mouse enters the label.
 * @param onMouseLeave - The event handler for when the mouse leaves the label.
 */
const NodeLabel = ({
  label,
  onMouseEnter,
  onMouseLeave,
}: {
  label: string;
  onMouseEnter: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {label}
    </div>
  );
};

export { NodeLabel };

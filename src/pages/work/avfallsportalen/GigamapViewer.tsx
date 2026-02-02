import { useState } from "react";
import { X, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

interface GigamapViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const GigamapViewer = ({ isOpen, onClose }: GigamapViewerProps) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const zoomIn = () => setScale(prev => Math.min(prev * 1.5, 5));
  const zoomOut = () => setScale(prev => Math.max(prev / 1.5, 0.5));
  const resetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90">
      {/* Controls */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
        <button
          onClick={zoomOut}
          className="p-2 hover:bg-muted rounded-full transition-colors"
          title="Zoom ut"
        >
          <ZoomOut size={20} />
        </button>
        <span className="text-sm font-medium min-w-[60px] text-center">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={zoomIn}
          className="p-2 hover:bg-muted rounded-full transition-colors"
          title="Zoom inn"
        >
          <ZoomIn size={20} />
        </button>
        <div className="w-px h-6 bg-border mx-2" />
        <button
          onClick={resetView}
          className="p-2 hover:bg-muted rounded-full transition-colors"
          title="Tilbakestill"
        >
          <Maximize2 size={20} />
        </button>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 bg-background/90 backdrop-blur-sm rounded-full hover:bg-background transition-colors shadow-lg"
        title="Lukk"
      >
        <X size={24} />
      </button>

      {/* Info */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-muted-foreground">
        Dra for å navigere • Scroll for å zoome
      </div>

      {/* Image container */}
      <div
        className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={(e) => {
          e.preventDefault();
          if (e.deltaY < 0) zoomIn();
          else zoomOut();
        }}
      >
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-100"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          }}
        >
          <img
            src="/images/sorting-guide/gigamap-full.svg"
            alt="Gigamap - Avfallssystemet i Norge"
            className="max-w-none select-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default GigamapViewer;

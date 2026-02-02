import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
}

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[4/3]",
};

const ImageWithFallback = ({
  src,
  alt,
  className = "",
  aspectRatio = "wide",
}: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}
    >
      {/* Placeholder gradient - always present behind image */}
      <div className="absolute inset-0 image-placeholder" />

      {/* Loading state */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 image-placeholder animate-pulse" />
      )}

      {/* Actual image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      )}

      {/* Fallback content when no image */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">{alt}</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;

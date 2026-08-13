"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ProductLightboxProps = {
  images: string[];
  index: number;
  alt: string;
  onNavigate: (index: number) => void;
  onClose: () => void;
};

export function ProductLightbox({ images, index, alt, onNavigate, onClose }: ProductLightboxProps) {
  const hasMultiple = images.length > 1;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") onNavigate((index + 1) % images.length);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [index, images.length, onNavigate, onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-surface text-foreground shadow-sm transition-colors hover:bg-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        <X className="size-5" />
      </button>

      <div
        className="relative flex size-full max-w-3xl items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />

        {hasMultiple && (
          <>
            <button
              type="button"
              aria-label="Foto anterior"
              onClick={() => onNavigate((index - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-foreground shadow-sm transition-colors hover:bg-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Próxima foto"
              onClick={() => onNavigate((index + 1) % images.length)}
              className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-foreground shadow-sm transition-colors hover:bg-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <ChevronRight className="size-5" />
            </button>

            <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
              {images.map((image, i) => (
                <button
                  key={image}
                  type="button"
                  aria-label={`Ver foto ${i + 1} de ${images.length}`}
                  aria-current={i === index}
                  onClick={() => onNavigate(i)}
                  className="flex items-center justify-center p-2"
                >
                  <span
                    className={`size-2 rounded-full transition-colors ${i === index ? "bg-brand" : "bg-surface/80"}`}
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

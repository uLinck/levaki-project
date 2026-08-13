"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

const SWIPE_THRESHOLD = 40;

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const hasMultiple = images.length > 1;

  function go(next: number) {
    setIndex((next + images.length) % images.length);
  }

  return (
    <div
      className="relative size-full"
      onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
      onTouchEnd={(event) => {
        if (touchStartX === null) return;
        const delta = event.changedTouches[0].clientX - touchStartX;
        if (delta > SWIPE_THRESHOLD) go(index - 1);
        else if (delta < -SWIPE_THRESHOLD) go(index + 1);
        setTouchStartX(null);
      }}
    >
      <Image
        src={images[index]}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={(event) => {
              event.preventDefault();
              go(index - 1);
            }}
            className="absolute left-1 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={(event) => {
              event.preventDefault();
              go(index + 1);
            }}
            className="absolute right-1 top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronRight className="size-4" />
          </button>

          <div className="absolute inset-x-0 bottom-2 z-10 flex justify-center gap-1">
            {images.map((image, i) => (
              <button
                key={image}
                type="button"
                aria-label={`Ver foto ${i + 1} de ${images.length}`}
                aria-current={i === index}
                onClick={(event) => {
                  event.preventDefault();
                  go(i);
                }}
                className="flex items-center justify-center p-1.5"
              >
                <span
                  className={cn(
                    "size-1.5 rounded-full transition-colors",
                    i === index ? "bg-brand" : "bg-background/80"
                  )}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

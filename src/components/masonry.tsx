'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ProjectImage } from '../types';

const MAX_VIEWER_WIDTH = 2000;

// Viewer image size: width is capped so we don't request the full-size original from Cloudinary
function getViewerSize(img: ProjectImage) {
  const width = Math.min(img.width, MAX_VIEWER_WIDTH);
  return { width, height: Math.round((img.height * width) / img.width) };
}

const Masonry = ({ images }: { images: ProjectImage[] }) => {
  // Index of the photo open in the viewer. null = viewer closed.
  const [current, setCurrent] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const isOpen = current !== null;

  const close = useCallback(() => {
    setCurrent(null);
    lastTrigger.current?.focus();
  }, []);

  const next = useCallback(() => setCurrent((i) => (i === null ? i : (i + 1) % images.length)), [images.length]);
  const prev = useCallback(
    () => setCurrent((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  // Keyboard controls + lock page scroll while the viewer is open
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, next, prev]);

  // Swipe gestures on mobile
  const onTouchStart = (e: React.TouchEvent) => {
    // Only track single-finger gestures so pinch-zoom doesn't count as a swipe
    touchStartX.current = e.touches.length === 1 ? e.touches[0].clientX : null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  const active = current !== null ? images[current] : null;

  // Neighboring photos to preload (no duplicates, excluding the current one)
  const neighbors =
    current === null
      ? []
      : [...new Set([(current + 1) % images.length, (current - 1 + images.length) % images.length])]
          .filter((i) => i !== current)
          .map((i) => images[i]);

  return (
    <section className="flex flex-col">
      <section className="columns-1 gap-2 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={(e) => {
              lastTrigger.current = e.currentTarget;
              setCurrent(i);
            }}
            aria-label={`Ver foto ${i + 1} de ${images.length}`}
            className="mb-2 block w-full border border-gray-200 shadow-sm transition-all hover:scale-101 hover:cursor-zoom-in"
          >
            <CldImage
              src={img.publicId}
              width={img.width}
              height={img.height}
              alt={img.publicId}
              className="animate-fade-in"
            />
          </button>
        ))}
      </section>

      {active && current !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visor de fotografías"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar visor"
            autoFocus
            className="absolute top-3 right-3 p-2 text-white/80 drop-shadow-md transition-colors hover:cursor-pointer hover:text-white"
          >
            <X size={32} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Foto anterior"
            className="absolute left-2 hidden p-2 text-white/80 transition-colors hover:cursor-pointer hover:text-white sm:block"
          >
            <ChevronLeft size={44} />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-dvh w-full flex-col items-center gap-2 sm:w-auto sm:max-w-full sm:px-20"
          >
            <CldImage
              key={active.id}
              src={active.publicId}
              {...getViewerSize(active)}
              sizes="100vw"
              alt={active.publicId}
              className="animate-fade-in max-h-[calc(100dvh-4rem)] w-full object-contain sm:w-auto"
            />
            <figcaption className="text-sm text-gray-300 tabular-nums">
              {current + 1} / {images.length}
            </figcaption>
          </figure>

          {/* Preload: next and previous photos download in the background */}
          <div
            hidden
            aria-hidden="true"
          >
            {neighbors.map((img) => (
              <CldImage
                key={img.id}
                src={img.publicId}
                {...getViewerSize(img)}
                sizes="100vw"
                loading="eager"
                alt=""
              />
            ))}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Foto siguiente"
            className="absolute right-2 hidden p-2 text-white/80 transition-colors hover:cursor-pointer hover:text-white sm:block"
          >
            <ChevronRight size={44} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Masonry;

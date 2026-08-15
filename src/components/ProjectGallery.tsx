import { useState, useRef, useEffect, useCallback } from 'react';

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 animate-[fadeIn_0.15s_ease]"
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-6 text-white/50 hover:text-white text-4xl leading-none bg-transparent border-none cursor-pointer"
      >
        ×
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
        className="absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white text-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] cursor-pointer transition-colors"
      >
        ‹
      </button>

      {/* Image */}
      <img
        src={images[index]}
        alt={`Screenshot ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[82vw] max-h-[82vh] object-contain rounded-lg animate-[scaleIn_0.18s_cubic-bezier(0.16,1,0.3,1)]"
      />

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
        className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white text-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] cursor-pointer transition-colors"
      >
        ›
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 text-white/40 text-xs font-mono tracking-widest">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

function EdgeButton({ side, onClick }: { side: 'left' | 'right'; onClick: () => void }) {
  return (
    <div
      className={[
        'absolute top-0 bottom-3 w-18 z-10 pointer-events-none flex items-center',
        side === 'left'
          ? 'left-0 bg-gradient-to-r from-white/95 to-transparent justify-start pl-2'
          : 'right-0 bg-gradient-to-l from-white/95 to-transparent justify-end pr-2'
      ].join(' ')}
    >
      <button
        onClick={onClick}
        aria-label={side === 'left' ? 'Scroll left' : 'Scroll right'}
        className="pointer-events-auto w-8 h-8 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center text-gray-600 text-lg hover:bg-gray-50 cursor-pointer transition-colors"
      >
        {side === 'left' ? '‹' : '›'}
      </button>
    </div>
  );
}

export default function ProjectGallery({ images }: { images: string[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isOpen = lightboxIndex !== null;

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 0 } to { transform: scale(1); opacity: 1 } }
        .pg-strip { scrollbar-width: none; }
        .pg-strip::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="relative">
        {canScrollLeft && <EdgeButton side="left" onClick={() => scroll(-1)} />}

        <div
          ref={scrollRef}
          className="pg-strip flex gap-3 overflow-x-auto pb-3 pt-1 scroll-smooth [scroll-snap-type:x_mandatory]"
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              aria-label={`View screenshot ${i + 1}`}
              className="group flex-none w-80 h-48 rounded-xl overflow-hidden p-0 border-0 bg-gray-900 relative cursor-pointer shadow-sm [scroll-snap-align:start]"
            >
              <img
                src={src}
                alt={`Screenshot ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white text-base opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  ⤢
                </div>
              </div>
            </button>
          ))}
        </div>

        {canScrollRight && <EdgeButton side="right" onClick={() => scroll(1)} />}
      </div>

      {isOpen && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}

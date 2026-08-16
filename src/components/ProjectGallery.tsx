export default function ProjectGallery({ images }: { images: string[] }) {
  return (
    <>
      {images.map((src, i) => (
        <a
          key={i}
          href={src}
          target="_blank"
          rel="noopener"
          aria-label={`View screenshot ${i + 1} full size`}
          className="group block rounded-xl overflow-hidden bg-gray-900 relative shadow-sm no-underline mb-3 last:mb-0"
        >
          <img
            src={src}
            alt={`Screenshot ${i + 1}`}
            loading="lazy"
            className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>
      ))}
    </>
  );
}

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
          className="group block rounded-sm overflow-hidden bg-line no-underline mb-4 last:mb-0"
        >
          <img
            src={src}
            alt={`Screenshot ${i + 1}`}
            loading="lazy"
            className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </a>
      ))}
    </>
  );
}

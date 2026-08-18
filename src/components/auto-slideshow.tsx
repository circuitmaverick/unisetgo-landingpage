import { useEffect, useState } from "react";

export function AutoSlideshow({
  images,
  alt,
  intervalMs = 3500,
}: {
  images: string[];
  alt: string;
  intervalMs?: number;
}) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = window.setInterval(
      () => setI((v) => (v + 1) % images.length),
      intervalMs,
    );
    return () => window.clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${alt} ${idx + 1}`}
          loading={idx === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-1.5 bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

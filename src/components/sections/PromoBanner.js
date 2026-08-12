// components/sections/PromoBanner.jsx
import Link from "next/link";

export default function PromoBanner({
  href,
  desktopSrc,
  mobileSrc,
  alt = "",
}) {
  const image = (
    <picture>
      <source media="(max-width: 767px)" srcSet={mobileSrc} />
      <img
        src={desktopSrc}
        alt={alt}
        loading="eager"
        fetchPriority="high"
        className="w-full h-auto object-cover aspect-[2.16/1] md:aspect-[3.84/1]"
      />
    </picture>
  );

  return (
    <section className="w-full">
      {href ? (
        <Link href={href} aria-label={alt || "Promotional banner"}>
          {image}
        </Link>
      ) : (
        image
      )}
    </section>
  );
}
import Image from 'next/image';

interface HeroImageProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function HeroImage({
  imageSrc = "/images/about.jpg",
  title = "Detailing Bros Founders",
  subtitle = "A decade of hands-on detailing expertise"
}: HeroImageProps) {
  return (
    <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 600px"
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-white/70">{subtitle}</p>
      </div>
    </div>
  );
}

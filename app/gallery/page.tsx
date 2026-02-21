import HeroSection from '@/components/HeroSection';
import GalleryGrid from '@/components/GalleryGrid';

const galleryItems = [
  {
    imageSrc: '/images/gallery-1.jpg',
    title: '2022 BMW M4 Competition - Gtechniq Crystal Serum Ultra',
    category: 'Ceramic Coating',
  },
  {
    imageSrc: '/images/gallery-2.jpg',
    title: '2021 Porsche 911 GT3 - Two-Stage Correction',
    category: 'Paint Correction',
  },
  {
    imageSrc: '/images/gallery-3.jpg',
    title: '2023 Range Rover - Full Interior Restoration',
    category: 'Interior',
  },
];

export default function GalleryPage() {
  return (
    <main>
      <HeroSection
        title="Our Portfolio"
        subtitle="See the transformations we create every day"
        imageSrc="/images/hero.jpg"
      />

      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-base md:text-lg text-muted-foreground mt-3">
            Paint correction, ceramic coatings, and interior restorations
          </p>
          <div className="mt-10">
            <GalleryGrid items={galleryItems} />
          </div>
        </div>
      </section>
    </main>
  );
}

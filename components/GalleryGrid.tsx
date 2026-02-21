'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GalleryItem {
  title: string;
  category: string;
  imageSrc: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  items: GalleryItem[];
}

export default function GalleryGrid({
  title = 'Transformation Gallery',
  subtitle = 'Explore ceramic coatings, interior overhauls, and gloss restorations.',
  items,
}: Props) {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(items.map((item) => item.category)));
    return ['All', ...unique];
  }, [items]);

  const filtered = active === 'All' ? items : items.filter((item) => item.category === active);

  return (
    <section id="gallery" className="space-y-8">
      <div className="text-center text-white">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{subtitle}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setActive(category)}
            variant={category === active ? 'default' : 'outline'}
            className={cn(
              'border-white/20 text-white',
              category === active ? 'bg-primary text-white' : 'hover:bg-white/10'
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <button
            key={item.title}
            onClick={() => setLightbox(item)}
            className="group relative w-full overflow-hidden rounded-lg border border-white/10 bg-black"
          >
            <Image
              src={item.imageSrc}
              alt={item.title}
              width={800}
              height={600}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
            <div className="absolute bottom-4 left-4 text-left">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs uppercase tracking-wide text-white/60">{item.category}</p>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
          <div className="relative max-w-4xl overflow-hidden rounded-lg border border-white/10 bg-black">
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/80 p-2 text-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <Image
              src={lightbox.imageSrc}
              alt={lightbox.title}
              width={1600}
              height={900}
              className="object-cover"
            />
            <div className="space-y-1 px-6 py-4 text-white">
              <p className="text-lg font-semibold">{lightbox.title}</p>
              <p className="text-xs uppercase tracking-wide text-white/60">{lightbox.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

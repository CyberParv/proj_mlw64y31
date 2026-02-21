'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
  title?: string;
  subtitle?: string;
  imageSrc: string;
  secondaryImageSrc: string;
}

export default function BeforeAfterSlider({
  title = 'Paint Correction Results',
  subtitle = 'Drag the slider to compare the transformation.',
  imageSrc,
  secondaryImageSrc,
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (event: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
      const percentage = ((clientX - rect.left) / rect.width) * 100;
      setPosition(Math.min(100, Math.max(0, percentage)));
    };

    const stopDrag = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchend', stopDrag);
    };

    const startDrag = () => {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('mouseup', stopDrag);
      document.addEventListener('touchend', stopDrag);
    };

    const handlePointerDown = () => startDrag();

    const slider = container.querySelector<HTMLDivElement>('[data-slider]');
    slider?.addEventListener('mousedown', handlePointerDown);
    slider?.addEventListener('touchstart', handlePointerDown);

    return () => {
      slider?.removeEventListener('mousedown', handlePointerDown);
      slider?.removeEventListener('touchstart', handlePointerDown);
      stopDrag();
    };
  }, []);

  return (
    <section className="space-y-6">
      <div className="text-center text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-white/70">{subtitle}</p>
      </div>
      <div
        ref={containerRef}
        className="relative h-[360px] w-full overflow-hidden rounded-lg border border-white/10 bg-black"
      >
        <Image src={imageSrc} alt="Before detailing" fill className="object-cover" />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: position + '%' }}
        >
          <Image src={secondaryImageSrc} alt="After detailing" fill className="object-cover" />
        </div>
        <div
          data-slider
          className="absolute inset-y-0 flex items-center"
          style={{ left: position + '%' }}
        >
          <div className="flex h-full w-1 -translate-x-1/2 flex-col items-center bg-primary">
            <div className="mt-6 h-8 w-8 rounded-full border-2 border-white bg-primary shadow-lg" />
          </div>
        </div>
        <div
          className={cn(
            'absolute left-0 top-4 rounded-r-full bg-black/70 px-3 py-1 text-xs uppercase tracking-wide text-white/70'
          )}
        >
          Before
        </div>
        <div className="absolute right-0 top-4 rounded-l-full bg-black/70 px-3 py-1 text-xs uppercase tracking-wide text-white/70">
          After
        </div>
      </div>
    </section>
  );
}

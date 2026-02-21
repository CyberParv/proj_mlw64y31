import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StatItem {
  title: string;
  subtitle: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  items?: StatItem[];
  imageSrc?: string;
}

export default function HeroSection({
  title = 'Showroom-Grade Detailing for Performance Cars',
  subtitle = 'Detailing Bros delivers paint correction, ceramic coating, and interior revival with meticulous craftsmanship and premium products.',
  ctaLabel = 'Book Detail',
  ctaHref = '#contact',
  secondaryCtaLabel = 'View Packages',
  secondaryCtaHref = '#pricing',
  items = [
    { title: '8+ Years', subtitle: 'Master Technicians' },
    { title: '1,500+', subtitle: 'Vehicles Refreshed' },
    { title: '5-Star', subtitle: 'Rated Experience' },
  ],
  imageSrc = '/images/hero.jpg',
}: Props) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-16 md:pt-20">
      <Image src={imageSrc} alt="Detailing Bros hero" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-20 md:px-6">
        <div className="max-w-2xl space-y-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Premium Auto Detailing</p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
          <p className="text-base text-white/80 md:text-lg">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary text-white hover:bg-primary/90">{ctaLabel}</Button>
            <Button variant="outline" className="border-white/40 text-white hover:bg-white/10">
              {secondaryCtaLabel}
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-10 grid gap-6 border-t border-white/20 pt-8 sm:grid-cols-3">
            {items.map((item) => (
              <div key={item.title} className="space-y-1">
                <p className="text-2xl font-bold text-white">{item.title}</p>
                <p className="text-xs uppercase tracking-wide text-white/60">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

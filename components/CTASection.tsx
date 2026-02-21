import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface Props {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageSrc?: string;
}

export default function CTASection({
  title = 'Ready for a showroom finish?',
  subtitle = 'Secure your detailing slot with our certified team. Quick turnaround, premium protection.',
  ctaLabel = 'Book Appointment',
  ctaHref = '#contact',
  secondaryCtaLabel = 'Call Us',
  secondaryCtaHref = 'tel:7025550112',
  imageSrc = '/images/cta.jpg',
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-lg border border-white/10 bg-black">
      <Image src={imageSrc} alt="Detailing Bros CTA" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-white md:py-20">
        <div className="max-w-2xl space-y-6">
          <h3 className="text-3xl font-bold md:text-4xl">{title}</h3>
          <p className="text-sm text-white/70 md:text-base">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary text-white hover:bg-primary/90">{ctaLabel}</Button>
            <Button variant="outline" className="border-white/40 text-white hover:bg-white/10">
              {secondaryCtaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  price: string;
  subtitle: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
}

export default function PricingCard({
  title,
  price,
  subtitle,
  items,
  ctaLabel,
  ctaHref,
  popular = false,
}: Props) {
  return (
    <Card
      className={cn(
        'relative border-white/10 bg-black text-white shadow-none',
        popular ? 'border-primary shadow-[0_0_0_1px_#D62828]' : 'hover:border-primary'
      )}
    >
      {popular && (
        <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase">
          Most Popular
        </div>
      )}
      <CardHeader className="space-y-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <p className="text-sm text-white/60">{subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-4xl font-bold">{price}</div>
        <ul className="space-y-3 text-sm text-white/70">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              {item}
            </li>
          ))}
        </ul>
        <Button className="w-full bg-primary text-white hover:bg-primary/90">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

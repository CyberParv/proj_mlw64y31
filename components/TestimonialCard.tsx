import Image from 'next/image';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  rating?: number;
  imageSrc: string;
}

export default function TestimonialCard({
  title,
  subtitle,
  description,
  rating = 5,
  imageSrc,
}: Props) {
  return (
    <Card className="border-white/10 bg-black text-white shadow-none">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-3">
          <Image
            src={imageSrc}
            alt={title}
            width={80}
            height={80}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <p className="text-base font-semibold">{title}</p>
            <p className="text-xs uppercase tracking-wide text-white/60">{subtitle}</p>
          </div>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-sm text-white/70">"{description}"</p>
      </CardContent>
    </Card>
  );
}

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

export default function TeamMemberCard({
  title,
  subtitle,
  description,
  imageSrc,
}: Props) {
  return (
    <Card
      className={cn(
        'group border-white/10 bg-black text-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-primary'
      )}
    >
      <CardContent className="space-y-4 p-6">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={600}
          className="h-48 w-full rounded-md object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-xs uppercase tracking-wide text-white/60">{subtitle}</p>
        </div>
        <p className="text-sm text-white/70">{description}</p>
      </CardContent>
    </Card>
  );
}

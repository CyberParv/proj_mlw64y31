import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  subtitle: string;
  price?: string;
  duration?: string;
  icon?: ReactNode;
}

export default function ServiceCard({
  title,
  subtitle,
  price,
  duration,
  icon,
}: Props) {
  return (
    <Card
      className={cn(
        'group border-white/10 bg-black text-white shadow-none transition-all duration-300 hover:border-primary'
      )}
    >
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-md bg-primary/10 p-2 text-primary">{icon}</div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-white/60">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {price && (
            <p className="text-2xl font-bold text-white">{price}</p>
          )}
          {duration && (
            <span className="ml-2 text-xs uppercase tracking-wide text-white/50">{duration}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Props {
  title: string;
  subtitle: string;
  icon?: ReactNode;
}

export default function FeatureCard({ title, subtitle, icon }: Props) {
  return (
    <Card className="border-white/10 bg-black text-white shadow-none">
      <CardContent className="space-y-4 p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary text-xl">
          {icon}
        </div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-white/70">{subtitle}</p>
      </CardContent>
    </Card>
  );
}

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoItem {
  title: string;
  imageSrc: string;
}

interface Props {
  title?: string;
  items: LogoItem[];
}

export default function LogoCloud({ title = 'Certified Partners', items }: Props) {
  return (
    <section className="space-y-6 text-center text-white">
      <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">{title}</h3>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {items.map((item) => (
          <div
            key={item.title}
            className={cn('rounded-md border border-white/10 bg-black p-4 transition-all duration-300')}
          >
            <Image
              src={item.imageSrc}
              alt={item.title}
              width={160}
              height={90}
              className="h-10 w-auto grayscale transition-all duration-300 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

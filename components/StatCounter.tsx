"use client";
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  value: number;
  title: string;
}

export default function StatCounter({ value, title }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let frame: number;
    const duration = 1300;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCurrent(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(animate);
      else setCurrent(value);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <div className={cn('rounded-lg border border-white/10 bg-black px-6 py-5 text-white text-center')}>
      <p className="text-3xl font-bold">{current.toLocaleString()}</p>
      <p className="text-xs uppercase tracking-wide text-white/60">{title}</p>
    </div>
  );
}

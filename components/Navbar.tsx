'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
}

interface Props {
  title?: string;
  items?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Navbar({
  title = 'Detailing Bros',
  items = [
    { title: 'Services', href: '#services' },
    { title: 'Gallery', href: '#gallery' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'Team', href: '#team' },
    { title: 'Contact', href: '#contact' },
  ],
  ctaLabel = 'Book Now',
  ctaHref = '#contact',
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-white">
          <div className="h-8 w-8 rounded-md bg-primary" />
          <span className="text-lg font-bold uppercase tracking-wide">{title}</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide text-white/80 hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <Phone className="mr-2 h-4 w-4" />
            (702) 555-0112
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/90">{ctaLabel}</Button>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-white md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/70 transition-opacity md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setOpen(false)}
      />
      <div
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-72 bg-black p-6 shadow-xl transition-transform md:hidden',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold uppercase text-white">{title}</span>
          <button
            onClick={() => setOpen(false)}
            className="rounded-md border border-white/10 p-2 text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-8 flex flex-col gap-4">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase tracking-wide text-white/80 hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3">
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            <Phone className="mr-2 h-4 w-4" />
            (702) 555-0112
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/90">{ctaLabel}</Button>
        </div>
      </div>
    </header>
  );
}

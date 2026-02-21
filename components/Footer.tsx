import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface NavItem {
  title: string;
  href: string;
}

interface Props {
  title?: string;
  items?: NavItem[];
}

export default function Footer({
  title = 'Detailing Bros',
  items = [
    { title: 'Services', href: '#services' },
    { title: 'Gallery', href: '#gallery' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'Contact', href: '#contact' },
  ],
}: Props) {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-md bg-primary" />
            <h3 className="text-xl font-bold uppercase tracking-wide">{title}</h3>
          </div>
          <p className="text-sm text-white/70">
            Premium automotive detailing studio delivering showroom-grade shine, protection, and performance finishes.
          </p>
          <div className="flex gap-3">
            <Link href="#" className="rounded-full border border-white/20 p-2 hover:bg-white/10">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" className="rounded-full border border-white/20 p-2 hover:bg-white/10">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" className="rounded-full border border-white/20 p-2 hover:bg-white/10">
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Navigation</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="text-white/70 hover:text-white">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              2140 Speedway Blvd, Las Vegas, NV
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              (702) 555-0112
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              hello@detailingbros.com
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Mon-Sat: 8am - 7pm
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Newsletter</h4>
          <p className="mt-4 text-sm text-white/70">
            Get detailing tips, seasonal offers, and exclusive launch invites.
          </p>
          <form className="mt-4 space-y-3">
            <Input
              type="email"
              placeholder="Email address"
              className="border-white/20 bg-black text-white placeholder:text-white/40"
            />
            <Button className="w-full bg-primary text-white hover:bg-primary/90">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © 2024 Detailing Bros. All rights reserved.
      </div>
    </footer>
  );
}

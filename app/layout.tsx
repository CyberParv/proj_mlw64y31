import './globals.css';
import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Detailing Bros | Premium Auto Detailing in Los Angeles',
  description:
    'Professional auto detailing services in Los Angeles. Paint correction, ceramic coating, interior detailing, and more. Book your appointment today!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={barlow.className}>
      <body className="bg-white text-foreground">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

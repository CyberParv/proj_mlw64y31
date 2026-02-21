import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';

const exteriorServices = [
  {
    title: 'Hand Wash & Dry',
    description:
      'Two-bucket method wash with pH-neutral soap, microfiber mitt, and air-dried finish',
    price: 'From $29',
  },
  {
    title: 'Clay Bar Treatment',
    description:
      'Removes embedded contaminants, overspray, and industrial fallout for glass-smooth paint',
    price: 'From $79',
  },
  {
    title: 'Single-Stage Polish',
    description: 'Light polish to enhance gloss and remove minor swirls',
    price: 'From $149',
  },
  {
    title: 'Multi-Stage Paint Correction',
    description:
      'Compound and polish to remove deep scratches, swirls, and oxidation',
    price: 'From $399',
  },
  {
    title: 'Ceramic Coating',
    description:
      'Gtechniq Crystal Serum or Gyeon MOHS+ professional ceramic coating',
    price: 'From $799',
  },
  {
    title: 'Paint Protection Film',
    description: 'XPEL Ultimate Plus clear bra installation for high-impact areas',
    price: 'From $599',
  },
];

const interiorServices = [
  {
    title: 'Interior Vacuum & Wipe',
    description:
      'Thorough vacuum of all surfaces, dashboard and console wipe-down',
    price: 'From $49',
  },
  {
    title: 'Leather Cleaning & Conditioning',
    description:
      'Deep clean and condition all leather surfaces to prevent cracking',
    price: 'From $89',
  },
  {
    title: 'Steam Cleaning',
    description:
      'High-temperature steam sanitization of all interior surfaces',
    price: 'From $129',
  },
  {
    title: 'Odor Elimination',
    description:
      'Ozone treatment and enzyme-based odor removal for smoke, pets, and more',
    price: 'From $99',
  },
  {
    title: 'Fabric Protection',
    description:
      'Scotchgard or Gtechniq fabric coating for stain resistance',
    price: 'From $79',
  },
];

const specialtyServices = [
  {
    title: 'Headlight Restoration',
    description:
      'Wet sand, polish, and UV sealant for crystal-clear headlights',
    price: 'From $79',
  },
  {
    title: 'Engine Bay Detailing',
    description:
      'Degrease, steam clean, and dress all engine components',
    price: 'From $69',
  },
  {
    title: 'Wheel & Caliper Coating',
    description: 'Ceramic coating for wheels and brake calipers',
    price: 'From $199',
  },
  {
    title: 'Mobile Detailing',
    description: 'Full-service detailing at your home or office',
    price: 'Add $50 to any service',
  },
];

export default function ServicesPage() {
  return (
    <main>
      <HeroSection
        title="Professional Detailing Services"
        subtitle="From daily drivers to exotic supercars, we have the expertise and equipment to make any vehicle shine."
        primaryCtaLabel="Get a Quote"
        primaryCtaHref="/contact"
        imageSrc="/images/hero.jpg"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold">Exterior Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
            {exteriorServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold">Interior Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
            {interiorServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold">Specialty Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
            {specialtyServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Protect Your Paint for Years"
        subtitle="Ask about our ceramic coating and paint protection film packages for ultimate shine and durability."
        primaryCtaLabel="Get a Quote"
        primaryCtaHref="/contact"
        secondaryCtaLabel="Call (555) 234-5678"
        secondaryCtaHref="tel:5552345678"
        imageSrc="/images/cta.jpg"
      />
    </main>
  );
}

import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import GalleryGrid from '@/components/GalleryGrid';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import StatCounter from '@/components/StatCounter';
import CTASection from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const stats = [
  { title: '5,000+', subtitle: 'Cars Detailed' },
  { title: '10+', subtitle: 'Years Experience' },
  { title: '4.9', subtitle: 'Star Rating' },
];

const services = [
  {
    title: 'Express Wash & Wax',
    description: 'Hand wash, dry, and premium carnauba wax application',
    price: '$49',
    duration: '1 hour',
    icon: 'sparkles',
  },
  {
    title: 'Interior Deep Clean',
    description:
      'Full vacuum, steam cleaning, leather conditioning, and odor elimination',
    price: '$129',
    duration: '2-3 hours',
    icon: 'car-seat',
  },
  {
    title: 'Full Detail Package',
    description:
      'Complete interior and exterior detail with clay bar treatment',
    price: '$249',
    duration: '4-5 hours',
    icon: 'car',
  },
  {
    title: 'Ceramic Coating',
    description:
      'Professional-grade 9H ceramic coating with 5-year protection',
    price: '$799',
    duration: '1-2 days',
    icon: 'shield',
  },
  {
    title: 'Paint Correction',
    description:
      'Multi-stage polish to remove swirls, scratches, and oxidation',
    price: '$399',
    duration: '6-8 hours',
    icon: 'paintbrush',
  },
  {
    title: 'Headlight Restoration',
    description:
      'UV damage removal and protective sealant application',
    price: '$79',
    duration: '1 hour',
    icon: 'lightbulb',
  },
];

const features = [
  {
    title: 'Premium Products Only',
    description:
      'We use Gtechniq, Gyeon, and Chemical Guys professional-grade products',
    icon: 'badge-check',
  },
  {
    title: 'Certified Technicians',
    description:
      'IDA-certified detailers with specialized training in paint correction',
    icon: 'certificate',
  },
  {
    title: 'Mobile Service Available',
    description:
      'We come to your home or office—same quality, ultimate convenience',
    icon: 'truck',
  },
  {
    title: 'Satisfaction Guaranteed',
    description:
      'Not happy? We will re-detail your vehicle at no extra charge',
    icon: 'thumbs-up',
  },
];

const galleryItems = [
  {
    imageSrc: '/images/gallery-1.jpg',
    title: '2022 BMW M4 - Full Paint Correction & Ceramic Coating',
  },
  {
    imageSrc: '/images/gallery-2.jpg',
    title: '2021 Ford Mustang GT - Interior Deep Clean',
  },
  {
    imageSrc: '/images/gallery-3.jpg',
    title: '2023 Tesla Model 3 - Full Detail Package',
  },
];

const pricing = [
  {
    title: 'Bronze',
    price: '$99',
    description: 'Perfect for regular maintenance',
    items: [
      'Hand wash & dry',
      'Wheel cleaning',
      'Tire dressing',
      'Interior vacuum',
      'Dashboard wipe-down',
      'Window cleaning',
    ],
    ctaLabel: 'Choose Bronze',
    ctaHref: '/contact',
    popular: false,
  },
  {
    title: 'Silver',
    price: '$199',
    description: 'Our most popular package',
    items: [
      'Everything in Bronze',
      'Clay bar treatment',
      'One-step polish',
      'Carnauba wax',
      'Leather conditioning',
      'Engine bay cleaning',
    ],
    ctaLabel: 'Choose Silver',
    ctaHref: '/contact',
    popular: true,
  },
  {
    title: 'Gold',
    price: '$399',
    description: 'The ultimate detail experience',
    items: [
      'Everything in Silver',
      'Two-stage paint correction',
      '6-month sealant',
      'Fabric protection',
      'Headlight restoration',
      'Trim restoration',
    ],
    ctaLabel: 'Choose Gold',
    ctaHref: '/contact',
    popular: false,
  },
];

const testimonials = [
  {
    title: 'Marcus Johnson',
    subtitle: '2023 Mercedes-AMG C63',
    rating: 5,
    description:
      'These guys are absolute perfectionists. My car looks better than when I drove it off the lot. The ceramic coating they applied is incredible—water just beads right off.',
    imageSrc: '/images/team.jpg',
  },
  {
    title: 'Sarah Chen',
    subtitle: '2022 Audi Q7',
    rating: 5,
    description:
      'With two kids and a dog, my SUV was a disaster. Detailing Bros made it look and smell brand new. The interior deep clean was worth every penny!',
    imageSrc: '/images/team.jpg',
  },
  {
    title: 'David Rodriguez',
    subtitle: '1969 Chevrolet Camaro',
    rating: 5,
    description:
      'I trusted them with my classic Camaro and they treated it like their own. The paint correction brought back the original shine. True professionals.',
    imageSrc: '/images/team.jpg',
  },
];

export default function HomePage() {
  return (
    <main>
      <HeroSection
        title="Your Ride Deserves the Best"
        subtitle="Professional auto detailing that transforms your vehicle. From basic washes to full ceramic coatings, we bring showroom shine to every car we touch."
        primaryCtaLabel="Book Your Detail"
        primaryCtaHref="/contact"
        secondaryCtaLabel="View Services"
        secondaryCtaHref="/services"
        imageSrc="/images/hero.jpg"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <StatCounter
              key={stat.title}
              title={stat.title}
              subtitle={stat.subtitle}
            />
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Detailing Services
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-3">
              From quick touch-ups to complete transformations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                price={service.price}
                duration={service.duration}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Why Detailing Bros?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-3">
              We are not just detailers—we are car enthusiasts who treat every
              vehicle like our own
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Our Work Speaks for Itself
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-3">
              Before and after transformations from our shop
            </p>
          </div>
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Detailing Packages
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-3">
              Choose the perfect package for your vehicle
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pricing.map((plan) => (
              <PricingCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                items={plan.items}
                ctaLabel={plan.ctaLabel}
                ctaHref={plan.ctaHref}
                popular={plan.popular}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            Prices based on sedan. SUVs and trucks add $30-$50. Ceramic coating
            packages available separately.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              What Our Customers Say
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-3">
              Join thousands of satisfied car owners
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.title}
                title={testimonial.title}
                subtitle={testimonial.subtitle}
                rating={testimonial.rating}
                description={testimonial.description}
                imageSrc={testimonial.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Ride?"
        subtitle="Book your appointment today and experience the Detailing Bros difference. First-time customers get 15% off any service."
        primaryCtaLabel="Schedule Now"
        primaryCtaHref="/contact"
        secondaryCtaLabel="Call (555) 234-5678"
        secondaryCtaHref="tel:5552345678"
        imageSrc="/images/cta.jpg"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Visit Our Shop</h2>
            <p className="text-base md:text-lg text-muted-foreground mt-3">
              4521 Motor Avenue, Los Angeles, CA 90034
            </p>
            <div className="mt-6 space-y-3 text-base md:text-lg">
              <p>(555) 234-5678</p>
              <p>info@detailingbros.com</p>
              <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 5:00 PM</p>
              <p>Sun: Closed</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild>
                <a href="/contact">Book an Appointment</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:5552345678">Call Now</a>
              </Button>
            </div>
          </div>
          <Card className="p-8">
            <h3 className="text-2xl font-bold">Quick Contact</h3>
            <p className="text-muted-foreground mt-2">
              Tell us about your vehicle and we will respond within 24 hours.
            </p>
            <div className="mt-6">
              <Button asChild className="w-full">
                <a href="/contact">Request Appointment</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}

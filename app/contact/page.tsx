import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';

const fields = [
  { name: 'name', type: 'text', label: 'Your Name', required: true },
  { name: 'email', type: 'email', label: 'Email Address', required: true },
  { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
  { name: 'vehicle', type: 'text', label: 'Vehicle (Year, Make, Model)', required: true },
  {
    name: 'service',
    type: 'select',
    label: 'Service Interested In',
    options: [
      'Express Wash',
      'Interior Detail',
      'Full Detail',
      'Paint Correction',
      'Ceramic Coating',
      'Other',
    ],
    required: true,
  },
  { name: 'preferredDate', type: 'date', label: 'Preferred Date', required: false },
  { name: 'message', type: 'textarea', label: 'Additional Details', required: false },
];

const hours = [
  { days: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { days: 'Saturday', hours: '9:00 AM - 5:00 PM' },
  { days: 'Sunday', hours: 'Closed' },
];

export default function ContactPage() {
  return (
    <main>
      <HeroSection
        title="Book Your Appointment"
        subtitle="Ready to give your car the treatment it deserves? Get in touch today."
        imageSrc="/images/hero.jpg"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ContactForm fields={fields} submitLabel="Request Appointment" />
          <Card className="p-8">
            <h2 className="text-2xl font-bold">Contact Details</h2>
            <div className="mt-4 space-y-2 text-base md:text-lg">
              <p>4521 Motor Avenue</p>
              <p>Los Angeles, CA 90034</p>
              <p>(555) 234-5678</p>
              <p>info@detailingbros.com</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold">Hours</h3>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {hours.map((item) => (
                  <li key={item.days} className="flex justify-between">
                    <span>{item.days}</span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold">Follow Us</h3>
              <div className="mt-2 space-y-2 text-muted-foreground">
                <p>Instagram: @detailingbros</p>
                <p>Facebook: /detailingbros</p>
                <p>YouTube: /detailingbros</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}

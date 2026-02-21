import HeroSection from '@/components/HeroSection';
import HeroImage from '@/components/HeroImage';
import TeamMemberCard from '@/components/TeamMemberCard';
import LogoCloud from '@/components/LogoCloud';

const teamMembers = [
  {
    title: 'Mike Reyes',
    subtitle: 'Co-Founder & Lead Detailer',
    description:
      'IDA-certified with specialization in paint correction. 12 years experience.',
    imageSrc: '/images/team.jpg',
  },
  {
    title: 'Tony Reyes',
    subtitle: 'Co-Founder & Operations',
    description:
      'Gtechniq-accredited installer. Handles all ceramic coating applications.',
    imageSrc: '/images/team.jpg',
  },
  {
    title: 'Jessica Park',
    subtitle: 'Interior Specialist',
    description:
      'Former automotive upholstery technician. Expert in leather restoration.',
    imageSrc: '/images/team.jpg',
  },
  {
    title: 'Carlos Mendez',
    subtitle: 'Senior Detailer',
    description:
      'Specializes in exotic and classic car detailing. 8 years experience.',
    imageSrc: '/images/team.jpg',
  },
];

const logos = [
  'International Detailing Association',
  'Gtechniq Accredited',
  'Gyeon Certified',
  'XPEL Certified Installer',
  'Chemical Guys Pro',
];

export default function AboutPage() {
  return (
    <main>
      <HeroSection
        title="The Detailing Bros Story"
        subtitle="Two brothers, one passion: making cars look their absolute best."
        imageSrc="/images/hero.jpg"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">How It Started</h2>
            <p className="text-base md:text-lg text-muted-foreground mt-4">
              Detailing Bros was founded in 2014 by brothers Mike and Tony Reyes
              in their parents&apos; garage. What started as a weekend side hustle
              washing neighbors&apos; cars quickly grew into a full-time obsession.
              After years of perfecting their craft, attending training seminars,
              and investing in professional-grade equipment, they opened their
              first shop in 2018. Today, Detailing Bros has grown to a team of 8
              certified detailers, but the commitment to quality remains the same:
              every car gets the attention it deserves.
            </p>
          </div>
          <HeroImage
            title="Detailing Bros Founders"
            subtitle="A decade of hands-on detailing expertise"
            imageSrc="/images/about.jpg"
          />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.title}
                title={member.title}
                subtitle={member.subtitle}
                description={member.description}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            Certifications & Partners
          </h2>
          <div className="mt-10">
            <LogoCloud items={logos} />
          </div>
        </div>
      </section>
    </main>
  );
}

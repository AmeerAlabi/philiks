import React from 'react';
import Card from './Card';
import crd1 from '../Assets/Images/plk.jpg';
import crd2 from '../Assets/Images/hgh1.jpg';
import crd3 from '../Assets/Images/undg.jpg';
import crd4 from '../Assets/Images/prf2.jpeg';

const Prog = () => {
  const cards = [
    {
      title: 'Webinar Series',
      description:
        'Engaging sessions led by industry experts, covering critical topics like career development, skill-building, and personal growth. Designed to help students and professionals stay ahead in an evolving world.',
      image: crd1,
      features: [
        'Live expert sessions',
        'Career & academic guidance',
        'Interactive Q&A and networking',
      ],
    },
    {
      title: 'Philik High School Program',
      description:
        'A dedicated initiative to equip high school students in Nigeria with career guidance, foundational skills, and mentorship. This digital platform aims to impact 10,000+ students in its first year, bridging the gap between secondary education and future opportunities.',
      image: crd2,
      features: [
        'Career exploration tools',
        'Mentorship from industry experts',
        'Foundational skill-building modules',
      ],
      comingSoon: true, // Flag for "Coming Soon" badge

    },
    {
      title: 'Philik Campus Initiative',
      description:
        'Expanding Philik’s reach to undergraduate institutions, this program will empower students with real-world skills like project management, critical thinking, and digital proficiency. By partnering with universities, we aim to establish a strong presence in 15+ institutions by the end of 2026.',
      image: crd3,
      features: [
        'Hands-on leadership training',
        'Practical industry-relevant workshops',
        'University partnerships for skill development',
      ],
      comingSoon: true, // Flag for "Coming Soon" badge
    },
    {
      title: 'Professional Solutions Suite',
      description:
        'A comprehensive career advancement program designed for professionals, featuring industry-specific training, leadership workshops, and an AI-powered career advisory platform. Targeting 50,000+ professionals in its first year, this suite will redefine workplace productivity and career growth.',
      image: crd4,
      features: [
        'AI-powered career advisory',
        'Industry-specific skill training',
        'Leadership & executive coaching',
      ],
      comingSoon: true, // Flag for "Coming Soon" badge
    },
  ];

  return (
    <div className="p-6 min-h-screen">
      {/* Section Title */}
      <h2 className="md:text-4xl text-3xl font-bold bg-clip-text md:text-left text-center text-black mb-4 md:mb-8 p-3">
        Programs
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            {/* "Coming Soon" Badge */}
            {card.comingSoon && (
              <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </div>
            )}
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
              features={card.features}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prog;

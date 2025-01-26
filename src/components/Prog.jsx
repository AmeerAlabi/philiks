import React from 'react';
import Card from './Card';
import crd1 from '../Assets/Images/crd1.png';

const Prog = () => {
  const cards = [
    {
      title: 'Tech Next Scholarships',
      description:
        'Scholarships and resources for students in underrepresented communities, enabling access to cutting-edge tech education.',
      image: crd1,
      features: [
        'Tech career readiness.',
        'Networking opportunities',
        'Live Q&A sessions',
      ],
    },
    {
      title: 'Bridge to Excellence Workshops',
      description:
        'Scholarships and resources for students in underrepresented communities, enabling access to cutting-edge tech education.',
      image: crd1,
      features: [
        'Bridge to Excellence Workshops',
        'Networking opportunities',
        'Live Q&A sessions',
      ],
    },
    {
      title: 'Global Classroom Initiative',
      description:
        'Scholarships and resources for students in underrepresented communities, enabling access to cutting-edge tech education.',
      image: crd1,
      features: [
        'Bridge to Excellence Workshops',
        'Networking opportunities',
        'Live Q&A sessions',
      ],
    },
    {
      title: 'Affordable Learning Packs',
      description:
        'Scholarships and resources for students in underrepresented communities, enabling access to cutting-edge tech education.',
      image: crd1,
      features: [
        'Bridge to Excellence Workshops',
        'Networking opportunities',
        'Live Q&A sessions',
      ],
    },
  ];

  return (
    <div className="p-6  min-h-screen">
      {/* Section Title */}
      <h2 className="md:text-4xl text-3xl font-bold  bg-clip-text md:text-left text-center  text-black mb-4 md:mb-8 p-3">
        Programs
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            features={card.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Prog;

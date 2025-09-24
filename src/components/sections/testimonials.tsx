'use client';

import React from 'react';
import Image from 'next/image';

type Testimonial = {
  id: number;
  type: 'video' | 'text';
  person: {
    name: string;
    title: string;
    image: string;
  };
  quote?: string;
};

const testimonialData: Testimonial[] = [
  {
    id: 1,
    type: 'video',
    person: {
      name: 'Malte Kramer',
      title: 'Founder & CEO of Luxury Presence',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/icons/malte-kramer-4.webp?',
    },
  },
  {
    id: 2,
    type: 'video',
    person: {
      name: 'Doug Petrie',
      title: 'Founder & CEO of Fast Resume',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/images/doug-petrie-5.webp?',
    },
  },
  {
    id: 3,
    type: 'video',
    person: {
      name: 'Zoltan Csonka',
      title: 'Founder & CEO of Ventigence',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/images/zoltan-csonka-6.webp?',
    },
  },
  {
    id: 4,
    type: 'text',
    person: {
      name: 'Albert Mizuno',
      title: 'Founder of The Mizuno',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/images/albert-mizuno-7.webp?',
    },
    quote: 'We had a fantastic experience partnering with Trionn for our website. The communication and collaboration were excellent, resulting in a top-notch design and functionality. We highly recommend Trionn to businesses in the service sector or anyone in need of a web design & development solution.',
  },
  {
    id: 5,
    type: 'text',
    person: {
      name: 'Stephen Dash',
      title: 'Founder & CEO of Credible',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/images/stephen-dash-8.webp?',
    },
    quote: 'The Trionn team is extremely reliable, professional and talented. It has been a great pleasure collaborating with them over many months.',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="flex flex-shrink-0 w-[420px] h-[520px] bg-card border border-border rounded-xl p-8 lg:p-10">
      {testimonial.type === 'video' ? (
        <div className="flex flex-col items-center justify-center text-center w-full">
          <div className="relative w-32 h-32 lg:w-40 lg:h-40 mb-6">
            <Image
              src={testimonial.person.image}
              alt={testimonial.person.name}
              width={160}
              height={160}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <h5 className="font-display font-semibold text-xl lg:text-2xl text-foreground mb-2">
            {testimonial.person.name}
          </h5>
          <p className="text-secondary-foreground text-sm lg:text-base mb-8">
            {testimonial.person.title}
          </p>
          <a
            href="#"
            className="group relative inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-md font-button uppercase text-sm tracking-wider transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Watch now!
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/svgs/play.6bd15bb3-5.svg?"
                alt="Play icon"
                width={9}
                height={9}
              />
            </span>
          </a>
        </div>
      ) : (
        <div className="flex flex-col justify-between w-full h-full">
          <div>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/svgs/quote.e874f243-6.svg?"
              alt="Quote"
              width={80}
              height={59}
              className="w-14 lg:w-20 h-auto mb-6"
            />
            <p className="font-body text-secondary-foreground text-base lg:text-lg leading-relaxed">
              {testimonial.quote}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={testimonial.person.image}
                alt={testimonial.person.name}
                width={64}
                height={64}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="text-left">
              <h5 className="font-display font-semibold text-lg text-foreground">
                {testimonial.person.name}
              </h5>
              <p className="text-sm text-secondary-foreground">
                {testimonial.person.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  const repeatedTestimonials = [...testimonialData, ...testimonialData];

  return (
    <>
      <style>
        {`
          @keyframes marquee-left {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee-slow {
            animation: marquee-left 120s linear infinite;
          }
           @keyframes marquee-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0%); }
          }
          .animate-marquee-background {
            animation: marquee-right 90s linear infinite;
          }
        `}
      </style>
      <section className="bg-background relative overflow-hidden py-24 lg:py-40">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[500px] z-0 flex items-center">
          <div className="w-full overflow-hidden">
            <div className="flex animate-marquee-background whitespace-nowrap">
              <div className="flex-shrink-0 font-display text-[200px] lg:text-[280px] font-bold uppercase text-foreground/5 py-4">
                <span className="px-8">PARTNER LOVE</span>
                <span className="px-8">—</span>
                <span className="px-8">PARTNER LOVE</span>
                <span className="px-8">—</span>
              </div>
               <div className="flex-shrink-0 font-display text-[200px] lg:text-[280px] font-bold uppercase text-foreground/5 py-4">
                <span className="px-8">PARTNER LOVE</span>
                <span className="px-8">—</span>
                <span className="px-8">PARTNER LOVE</span>
                <span className="px-8">—</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
            <h3 className="font-display font-semibold text-3xl text-foreground">
              <span>partner </span>
              <span> love</span>
            </h3>
            <h4 className="font-display font-medium text-2xl text-secondary-foreground max-w-md">
              Take heed, as the lion&apos;s roar in our client reviews resounds.
            </h4>
          </div>
        </div>
        <div className="w-full overflow-hidden relative z-10">
          <div className="flex w-max animate-marquee-slow will-change-transform">
            {repeatedTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="px-4">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
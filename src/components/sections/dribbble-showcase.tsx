import Image from "next/image";

const dribbbleImages = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/icons/dribbble1-10.webp?",
    alt: "Dribbble Shot 1",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/images/dribbble2-11.webp?",
    alt: "Dribbble Shot 2",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/images/dribbble3-12.webp?",
    alt: "Dribbble Shot 3",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/images/dribbble4-13.webp?",
    alt: "Dribbble Shot 4",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/icons/dribbble5-14.webp?",
    alt: "Dribbble Shot 5",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/icons/dribbble6-15.webp?",
    alt: "Dribbble Shot 6",
  },
];

const DribbbleShowcase = () => {
  return (
    <section className="bg-card py-[120px]">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/svgs/dribbble.1a51ca99-9.webp?"
            alt="Dribbble"
            width={498}
            height={136}
            className="h-auto w-auto max-w-[280px] sm:max-w-[380px] lg:max-w-[498px]"
          />
          <h4 className="mt-8 max-w-xl text-2xl font-medium leading-[1.3]">
            Like a lion's roar echoing through the jungle, a hint of our
            creative minds emerges.
          </h4>
          <div className="mt-10">
            <a
              href="https://dribbble.com/trionndesign"
              target="_blank"
              rel="noopener noreferrer"
              className="font-button inline-block rounded-full border border-primary px-8 py-4 text-base font-medium uppercase tracking-wider text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              View Dribbble
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-16 md:mt-24">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
          {dribbbleImages.map((image, index) => (
            <a
              key={index}
              href="https://dribbble.com/trionndesign"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trionn Dribbble Shot"
              className="group block overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={422}
                height={316}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DribbbleShowcase;
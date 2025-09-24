import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="container mx-auto flex flex-grow flex-col items-center justify-center px-6 text-center md:px-8">
        {/* Main headline - Desktop */}
        <h1 className="hidden font-display text-[7.5rem] font-bold uppercase leading-none tracking-[-0.05em] text-foreground sm:block">
          <span className="block">roar in the</span>
          <span className="block">digital wilderness.</span>
        </h1>

        {/* Main headline - Mobile */}
        <h1 className="block font-display text-[13vw] font-bold uppercase leading-none tracking-[-0.05em] text-foreground sm:hidden">
          <span className="block">roar</span>
          <span className="block">in the digital</span>
          <span className="block">wilderness.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 mb-8 max-w-xl text-lg leading-relaxed text-secondary-foreground sm:mb-4">
          <span className="block">
            We roar with success, delivering the TRIONN<sup>&reg;</sup>
          </span>
          <span className="block">
            through versatile design, branding and the latest
          </span>
          <span className="block">tech development to companies.</span>
        </p>

        {/* Scroll down icon */}
        <p className="text-center">
          <Link href="#recent-work" aria-label="Scroll down">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/svgs/move-down.31fd25f2-4.svg?"
              alt="Scroll down"
              width={24}
              height={24}
              className="opacity-40"
            />
          </Link>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-10 w-full sm:bottom-16">
        <div className="container mx-auto flex items-center justify-between px-6 md:px-8 lg:px-12">
          <Link
            href="/work"
            className="font-button rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium uppercase tracking-[0.05em] text-foreground transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:px-8 sm:py-4 sm:text-base"
          >
            Explore work
          </Link>
          <Link
            href="/contact"
            className="font-button rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium uppercase tracking-[0.05em] text-foreground transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground sm:px-8 sm:py-4 sm:text-base"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
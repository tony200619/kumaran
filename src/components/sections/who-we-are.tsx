"use client";

import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
        <div className="mb-4">
          <h3 className="font-display text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            <span>who </span>
            <span>we are</span>
          </h3>
        </div>

        <div>
          <h2 className="tr__heading__animation font-display text-[2.5rem] leading-[1.1] md:text-[3.5rem] font-bold -mt-14 lg:-mt-10 mb-10 text-foreground">
            <div className="tr__line__wrapper overflow-hidden">
              <div className="tr__line">As an award-winning agency</div>
            </div>
            <div className="tr__line__wrapper overflow-hidden">
              <div className="tr__line">within the digital jungle, TRIONN<sup>®</sup></div>
            </div>
            <div className="tr__line__wrapper overflow-hidden">
              <div className="tr__line">transcends aesthetics, crafting</div>
            </div>
            <div className="tr__line__wrapper overflow-hidden">
              <div className="tr__line">your vision into a legacy that</div>
            </div>
            <div className="tr__line__wrapper overflow-hidden">
              <div className="tr__line">endures.</div>
            </div>
          </h2>
          <div className="w-full sm:max-w-sm ml-auto">
            <p className="text-lg leading-relaxed text-secondary-foreground">
              We roar with creativity, staying updated with the latest tech to make your brand a formidable force in the digital wilderness and deliver exceptional website and app experiences.
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="button group relative inline-block overflow-hidden rounded-md border border-primary px-8 py-4 font-display text-base font-medium uppercase tracking-wider text-primary transition-colors duration-300 hover:text-primary-foreground"
                aria-label="About us"
              >
                <span className="relative z-10">About us</span>
                <span className="tr__button__background absolute inset-0 z-0 translate-y-full transform bg-primary transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
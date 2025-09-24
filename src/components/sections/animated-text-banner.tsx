"use client";

import React, { useEffect, useRef } from "react";

const AnimatedTextBanner = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const speed = 1; // Animation speed in pixels per frame

    const el1 = row1Ref.current;
    const el2 = row2Ref.current;

    if (!el1 || !el2) return;

    let position1 = 0;
    let position2 = 0;

    const animate = () => {
      // Animate first row
      const row1Width = el1.scrollWidth / 2;
      position1 -= speed;
      if (position1 < -row1Width) {
        position1 = 0;
      }
      el1.style.transform = `translateX(${position1}px)`;

      // Animate second row
      const row2Width = el2.scrollWidth / 2;
      position2 -= speed;
      if (position2 < -row2Width) {
        position2 = 0;
      }
      el2.style.transform = `translateX(${position2}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const TextRow = ({ text }: { text: string }) => {
    const items = Array(4)
      .fill(0)
      .map((_, i) => (
        <React.Fragment key={i}>
          <span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[120px] font-bold uppercase tracking-[-0.05em] leading-none whitespace-nowrap px-4 lg:px-8 text-foreground">
            {text}
          </span>
          <span
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[120px] font-bold uppercase tracking-[-0.05em] leading-none whitespace-nowrap px-4 lg:px-8 text-transparent"
            style={{ WebkitTextStroke: "1px var(--color-foreground)" }}
          >
            —
          </span>
        </React.Fragment>
      ));

    return (
      <>
        <div className="flex-shrink-0 flex items-center">{items}</div>
        <div className="flex-shrink-0 flex items-center">{items}</div>
      </>
    );
  };

  return (
    <section className="bg-black py-20 md:py-28 overflow-hidden">
      <div className="flex" ref={row1Ref}>
        <TextRow text="WILD IDEAS!" />
      </div>
      <div className="h-4 md:h-8" />
      <div className="flex" ref={row2Ref}>
        <TextRow text="LET'S DIVE IN!" />
      </div>
    </section>
  );
};

export default AnimatedTextBanner;
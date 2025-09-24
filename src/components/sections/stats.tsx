"use client";

import React, { useState, useEffect, useRef, Fragment } from "react";
import { useInView } from "react-intersection-observer";

const statsData = [
    { value: 50, suffix: "+", text: ["awards &", "recognition"] },
    { value: 900, suffix: "+", text: ["projects", "completed"] },
    { value: 20, suffix: "+", text: ["creative", "minds"] },
    { value: 20, suffix: "+", text: ["years of", "experience"] },
];

interface StatItemProps {
    value: number;
    suffix: string;
    text: string[];
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix, text }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (inView) {
      const duration = 2500;
      let startTimestamp: number | null = null;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = Math.floor(progress * value);
        setCount(currentCount);

        if (progress < 1) {
          animationFrameId.current = window.requestAnimationFrame(step);
        }
      };

      animationFrameId.current = window.requestAnimationFrame(step);
    }
    
    return () => {
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [inView, value]);

  return (
    <div ref={ref} className="bg-card rounded-2xl p-8 lg:p-12 flex flex-col justify-between aspect-square">
      <div className="min-h-[120px]">
        <div className="font-display text-foreground font-bold leading-none flex items-start text-[100px] lg:text-[120px]">
          {count}
          <sup className="text-4xl lg:text-5xl font-bold mt-2 ml-1">{suffix}</sup>
        </div>
      </div>
      <div className="font-display text-secondary-foreground font-medium text-xl lg:text-2xl uppercase tracking-wider text-right">
        {text.map((line, i) => (
          <Fragment key={i}>
            {line}
            {i < text.length - 1 && <br />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};


const Stats = () => {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {statsData.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  services: string;
  imageUrl: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    title: 'loftloom',
    services: 'UI Design, UX, Wireframe',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/images/loftloom-main-landscape-1.webp?',
    projectUrl: '/work/loftloom',
  },
  {
    title: 'imusic',
    services: 'Research, UX, UI Design',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/svgs/imusic-main-landscape-2.webp?',
    projectUrl: '/work/imusic',
  },
  {
    title: 'technis',
    services: 'UX, UI Design, Development',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/svgs/technis-main-landscape-3.webp?',
    projectUrl: '/work/technis',
  },
];

const TrionnButton = ({ href, children, ariaLabel }: { href: string; children: React.ReactNode; ariaLabel: string }) => (
  <Link
    href={href}
    aria-label={ariaLabel}
    className="group relative inline-block overflow-hidden rounded-full border border-primary bg-transparent font-button text-base font-medium uppercase tracking-wider text-foreground transition-colors duration-300 ease-in-out hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
    style={{ padding: '15px 31px' }}
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 z-0 origin-bottom scale-y-0 transform bg-primary transition-transform duration-300 ease-in-out group-hover:scale-y-100"></span>
  </Link>
);


const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
    <div className="flex flex-col">
      <div>
        <Link href={project.projectUrl} aria-label={project.title}>
          <h2 className="font-display text-[4.5rem] font-bold leading-none tracking-tight text-foreground">{project.title}</h2>
        </Link>
      </div>
      <div>
        <p className="mb-10 mt-4 text-lg text-secondary-foreground">{project.services}</p>
      </div>
      <div>
        <TrionnButton href={project.projectUrl} ariaLabel="View project">
          View project
        </TrionnButton>
      </div>
    </div>
    <div className="relative">
      <Link href={project.projectUrl} aria-label={project.title}>
        <Image
          src={project.imageUrl}
          alt={`Trionn project: ${project.title}`}
          width={1500}
          height={1000}
          className="h-auto w-full rounded-3xl object-cover"
        />
      </Link>
    </div>
  </div>
);


const RecentWork = () => {
  return (
    <section className="relative overflow-hidden bg-background py-28 md:py-32">
      <div className="container mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
        <div className="mb-20 flex flex-col items-start justify-between lg:mb-32 lg:flex-row">
          <div className="flex-1">
            <h3 className="font-display text-3xl font-semibold uppercase tracking-widest text-foreground">
              <span>recent </span>
              <span> work</span>
            </h3>
            <h4 className="mt-4 font-display text-2xl font-medium text-secondary-foreground">
              <div className="overflow-hidden">
                <div className="">In the creative wilderness, </div>
              </div>
              <div className="overflow-hidden">
                <div className="">clients find our work truly </div>
              </div>
              <div className="overflow-hidden">
                <div className="">beloved.</div>
              </div>
            </h4>
          </div>
          <div className="mt-8 hidden h-20 lg:mt-0 lg:block">
             <TrionnButton href="/work" ariaLabel="Explore work">
                Explore work
            </TrionnButton>
          </div>
        </div>

        <div className="flex flex-col gap-24 lg:gap-40 [&>*:nth-child(even)>:last-child]:lg:order-first">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center lg:hidden">
          <TrionnButton href="/work" ariaLabel="View all work">
             View all work
          </TrionnButton>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
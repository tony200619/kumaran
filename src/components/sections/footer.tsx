import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "Dribbble",
    href: "https://dribbble.com/trionndesign",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/icons/dribble-7.svg?",
  },
  {
    name: "LinkedIn",
    href: "http://www.linkedin.com/company/2715714",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/svgs/linkedin-8.svg?",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/trionndesign/",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/svgs/instagram-9.svg?",
  },
  {
    name: "Behance",
    href: "https://www.behance.net/TrionnDesign",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/svgs/behance-10.svg?",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/trionnagency/",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/svgs/facebook-11.svg?",
  },
];

const footerLogoUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/772ca356-9f65-4763-8ec3-9f54a4afed16-trionn-com/assets/svgs/footer-logo.7dd398e2-13.svg?";

export default function Footer() {
  return (
    <>
      <section className="relative bg-background pt-24 pb-12 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[clamp(4rem,12vw,9.375rem)] font-bold font-display uppercase text-center text-foreground/5 select-none whitespace-nowrap">
            join our jungle trek
          </h2>
        </div>
        <div className="relative container mx-auto px-6 lg:px-12">
          <ul className="max-w-4xl mx-auto border-y border-border">
            {socialLinks.map((link) => (
              <li key={link.name} className="border-b border-border last:border-b-0">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-6 text-foreground transition-colors hover:text-primary"
                  aria-label={link.name}
                >
                  <strong className="font-display font-semibold text-3xl md:text-5xl tracking-tight">
                    {link.name}
                  </strong>
                  <Image
                    src={link.icon}
                    alt={`${link.name} icon`}
                    width={22}
                    height={22}
                    className="w-7 h-7 transition-transform group-hover:scale-110"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer className="bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-center items-center py-20 lg:py-32">
            <Link href="/" aria-label="Trionn">
              <Image
                src={footerLogoUrl}
                alt="TRIONN Logo"
                width={291}
                height={53}
                className="w-48 md:w-auto h-auto"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center py-6 border-t border-border">
            <div>
              <Link href="/" aria-label="Trionn">
                <Image
                  src={footerLogoUrl}
                  alt="TRIONN Logo"
                  width={118}
                  height={22}
                />
              </Link>
            </div>
            <div>
              <Link
                href="/contact"
                className="font-button text-xs md:text-sm uppercase tracking-widest font-medium text-foreground py-3 px-6 border border-foreground/30 rounded-full hover:bg-foreground hover:text-background transition-colors"
                aria-label="Contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CardProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  href: string;
}

const FeatureCard: React.FC<CardProps> = ({
  imageSrc,
  alt,
  title,
  description,
  href,
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow transition duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
    <div className="relative w-full h-48">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 370px, 100vw"
      />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-semibold text-[#543CDA] mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-[#543CDA] font-semibold hover:underline"
      >
        Learn more <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  </div>
);

export default function StartupSection() {
  const features: CardProps[] = [
    {
      imageSrc: "/firstcard.webp",
      alt: "Web development project",
      title: "Web Development",
      description:
        "High-performance websites that look sharp, load fast, and scale effortlessly as you grow.",
      href: "/web-development",
    },
    {
      imageSrc: "/secondcard.webp",
      alt: "App prototype interface",
      title: "Mobile App Development",
      description:
        "Cross-platform apps with smooth UX, fast performance, and the reliability your users expect.",
      href: "/mobile-app-development",
    },
    {
      imageSrc: "/thirdcard.webp",
      alt: "UI/UX wireframes",
      title: "UI/UX Design & Consulting",
      description:
        "Interfaces your users actually enjoy. Designed with empathy, built with precision, backed by research.",
      href: "/ui-ux-design-and-consulting",
    },
    {
      imageSrc: "/sixthcard.webp",
      alt: "Product strategy sketch",
      title: "Product Design & Management",
      description:
        "From first idea to market-ready launch, we help shape products that make sense and make impact.",
      href: "/product-design-and-management",
    },
    {
      imageSrc: "/fourthcard.webp",
      alt: "Growth dashboard",
      title: "SEO & Content Marketing",
      description:
        "Visibility that lasts. We create search-first strategies that bring in the right traffic and turn it into results.",
      href: "/seo-and-content-marketing",
    },
    {
      imageSrc: "/fifthcard.webp",
      alt: "Custom software dashboard",
      title: "Custom Software Solutions",
      description:
        "Tailored systems built around your workflows, not templates. Clean, scalable, and built to last.",
      href: "/custom-software-solutions",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold mb-4">
          Everything You Need to Launch, Grow, and Stay Ahead
        </h2>
        <p className="text-base text-purple-dark max-w-2xl mx-auto">
          Whether you&apos;re launching, scaling, or pivoting, we partner with
          bold startups to build tech that lasts beyond MVP.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center max-w-2xl mx-auto">
        <h3 className="text-2xl lg:text-3xl font-semibold text-primary-purple mb-2">
          Not Sure What You Need?
        </h3>
        <p className="text-purple-dark mb-4">
          Tell us where you are and where you want to go. We&apos;ll help you
          map the way forward.
        </p>
        <Link
          href="/get-a-quote"
          className="inline-flex items-center text-primary-purple font-semibold text-lg hover:bg-primary-purple hover:text-white cursor-pointer border border-primary-purple px-4 py-2 rounded-lg transition"
        >
          Let&apos;s Talk <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

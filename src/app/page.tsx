import { Metadata } from "next";
import { getLatestInsights } from "@/lib/strapi/post";
import { BlogPost } from "@/types/post";

import BuiltFor from "@/components/Homepage/BuiltFor";
import Everything from "@/components/Homepage/Everything";
import Faqs from "@/components/Homepage/Faqs";
import Hero from "@/components/Homepage/Hero";
import HomeBlogSection from "@/components/Homepage/HomeBlogSection";
import Love from "@/components/Homepage/Love";
import TestimonialCarousel from "@/components/Homepage/OurClients";
import Ourprocess from "@/components/Homepage/OurProcess";
import Startup from "@/components/Homepage/Startup";
import Tools from "@/components/Homepage/Tool";
import StrategyCall from "@/components/Homepage/StrategyCall";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Nexoris Technologies – Empowering Businesses with Scalable Digital Solutions",
    description:
      "Nexoris Technologies delivers next-gen web, mobile, and software development tailored to your business. Explore our design-first, performance-driven solutions.",
    openGraph: {
      title:
        "Nexoris Technologies – Empowering Businesses with Scalable Digital Solutions",
      description:
        "Explore our services in Web Development, Mobile Apps, UI/UX, SEO, and more. Built for startups, scale-ups, and enterprises.",
      url: "https://nexoristech.com",
      siteName: "Nexoris Technologies",
      locale: "en_NG",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://nexoristech.com",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Nexoris Technologies – Empowering Businesses with Scalable Digital Solutions",
      description:
        "Explore our next-gen development, design, and digital transformation services tailored for growth.",
    },
  };
}

// Static FAQs for homepage (can be moved to lib/data/faqs.ts if reused)
const faqs = [
  {
    question: "What services does Nexoris Technologies provide?",
    answer:
      "We offer Web Development, Mobile App Development, Custom Software Solutions, UI/UX Design, SEO, and more.",
  },
  {
    question: "Who can benefit from your services?",
    answer:
      "Our services are designed for startups, SMEs, enterprises, and anyone seeking high-performance digital solutions.",
  },
];

// JSON-LD Schemas
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nexoristech.com/#organization",
  name: "Nexoris Technologies",
  url: "https://nexoristech.com",
  logo: {
    "@type": "ImageObject",
    url: "https://nexoristech.com/logo.png",
  },
  sameAs: [
    "https://www.linkedin.com/company/nexoris-technologies/",
    "https://twitter.com/nexoristech",
  ],
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Web Development",
      provider: { "@id": "https://nexoristech.com/#organization" },
      areaServed: { "@type": "Place", name: "Worldwide" },
    },
    {
      "@type": "Service",
      serviceType: "Mobile App Development",
      provider: { "@id": "https://nexoristech.com/#organization" },
      areaServed: { "@type": "Place", name: "Worldwide" },
    },
    {
      "@type": "Service",
      serviceType: "Custom Software Solutions",
      provider: { "@id": "https://nexoristech.com/#organization" },
      areaServed: { "@type": "Place", name: "Worldwide" },
    },
    {
      "@type": "Service",
      serviceType: "UI/UX Design and Consulting",
      provider: { "@id": "https://nexoristech.com/#organization" },
      areaServed: { "@type": "Place", name: "Worldwide" },
    },
    {
      "@type": "Service",
      serviceType: "SEO and Content Marketing",
      provider: { "@id": "https://nexoristech.com/#organization" },
      areaServed: { "@type": "Place", name: "Worldwide" },
    },
    {
      "@type": "Service",
      serviceType: "Digital Transformation Consulting",
      provider: { "@id": "https://nexoristech.com/#organization" },
      areaServed: { "@type": "Place", name: "Worldwide" },
    },
    {
      "@type": "Service",
      serviceType: "Product Design and Management",
      provider: { "@id": "https://nexoristech.com/#organization" },
      areaServed: { "@type": "Place", name: "Worldwide" },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default async function Home() {
  let posts: BlogPost[] = [];

  try {
    const result = await getLatestInsights();
    posts = Array.isArray(result) ? result : [];
  } catch (error) {
    console.error("getLatestInsights threw error in page.tsx:", error);
  }

  return (
    <>
      {/* Inject structured data */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(servicesSchema)}
      </script>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(faqSchema)}
      </script>

      <main role="main">
        <section aria-labelledby="hero-heading" className="mb-8 w-full">
          <Hero />
        </section>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          <section
            aria-labelledby="startup-heading"
            className=" mt-10 lg:mt-20"
          >
            <Startup />
          </section>
          <section aria-labelledby="love-heading" className="mt-5">
            <Love />
          </section>
          <section aria-labelledby="everything-heading">
            <Everything />
          </section>
          <section aria-labelledby="builtfor-heading">
            <BuiltFor />
          </section>
          <section aria-labelledby="tools-heading">
            <Tools />
          </section>
          <section aria-labelledby="ourprocess-heading">
            <Ourprocess />
          </section>
          <section aria-labelledby="testimonials-heading">
            <TestimonialCarousel />
          </section>
          <section aria-labelledby="blog-heading">
            <HomeBlogSection posts={posts} />
          </section>
          <section aria-labelledby="faqs-heading">
            <Faqs />
          </section>
          <section>
            <StrategyCall />
          </section>
        </div>
      </main>
    </>
  );
}

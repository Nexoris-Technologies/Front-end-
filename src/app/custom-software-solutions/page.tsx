import { Metadata } from "next";
import { generateOrganizationSchema } from "@/lib/seo/schema";
import CustomSoftwareHero from "@/components/Custome-Software-Solutions/Hero";
import CustomLogo from "@/components/Custome-Software-Solutions/Logo";
import Keys from "@/components/Custome-Software-Solutions/Benefit";
import Help from "@/components/Custome-Software-Solutions/Help";
import CustomCoverService from "@/components/Custome-Software-Solutions/Covers";
import CustomProcess from "@/components/Custome-Software-Solutions/Process";
import ProblemWeSolve from "@/components/Custome-Software-Solutions/Problem";
import WhyChooseCustom from "@/components/Custome-Software-Solutions/Chooseus";
import FaqsCustom from "@/components/Custome-Software-Solutions/Faqcustom";
import CustomLaunch from "@/components/Custome-Software-Solutions/Customlaunch";

export const metadata: Metadata = {
  title: "Custom Software Solutions | Nexoris Technologies",
  description:
    "Nexoris builds secure, scalable custom software that automates operations, integrates systems, and solves critical business challenges. Built around your needs.",
  alternates: {
    canonical: "https://nexoristech.com/custom-software-solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Custom Software Solutions | Nexoris Technologies",
    description:
      "Solve business challenges with Nexoris custom software: automation, integrations, scalability — tailored to you.",
    url: "https://nexoristech.com/custom-software-solutions",
    siteName: "Nexoris Technologies",
    type: "website",
    images: [
      {
        url: "https://nexoristech.com/images/nexoris-og-image.webp",
        width: 1200,
        height: 630,
        alt: "Custom Software Solutions by Nexoris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Solutions | Nexoris Technologies",
    description:
      "Build modern, tailored software solutions with Nexoris. From internal tools to full-scale systems.",
    images: ["https://nexoristech.com/images/nexoris-og-image.webp"],
  },
};

export default function SoftwareSolutions() {
  return (
    <>
    <main className="min-h-screen flex flex-col">
      <section aria-labelledby="custom-software-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#F8F6FF] via-[#EBE4FD] to-[#E4EAFD] pt-16 pb-2 lg:pt-24 z-0">
        <CustomSoftwareHero />
      </section>
      <section>
        <CustomLogo />
      </section>
      <section className="w-full bg-background">
        <Keys />
      </section>
      <section>
        <Help />
      </section>
      <section>
        <CustomCoverService />
      </section>
      <section>
        <CustomProcess />
      </section>
      <section>
        <ProblemWeSolve />
      </section>
      <section>
        <WhyChooseCustom />
      </section>
      <section>
        <FaqsCustom />
      </section>
      <section>
        <CustomLaunch />
      </section>
    </main>
        {/* Structured Data for Custom Software Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Custom Software Solutions",
            provider: {
              "@id": "https://nexoristech.com/#organization",
            },
            areaServed: {
              "@type": "Place",
              name: "Worldwide",
            },
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />
    </>
  );
}

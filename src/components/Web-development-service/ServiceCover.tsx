import Image from "next/image";

function ServiceCover() {
  return (
    <section className="bg-[#EAE8F7] px-4">
      <div className="flex flex-col items-center justify-center gap-10 py-14 lg:py-28 container mx-auto">
        <h1 className="font-bold text-2xl text-center md:text-4xl lg:text-5xl">
          What This Service Covers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:">
          {[
            "Full-stack Web Development",
            "Headless CMS Integration (Strapi, Sanity, Contentful)",
            "Custom CMS Workflows & Content Modeling",
            "Jamstack & Static Site Architecture",
            "Backend Logic & 3rd-Party Service Integration",
            "Conversion-Optimized Landing Pages",
            "Progressive Web Apps (PWAs)",
            "Core Web Vitals & Performance Optimization",
            "Semantic HTML & Technical SEO Setup",
            "Accessibility Optimization (WCAG 2.1)",
            "Analytics & Tag Management Configuration",
          ].map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white rounded-md px-4 py-4 w-full max-w-md min-h-[6rem] mx-auto shadow-sm"
            >
              <Image
                src="/solar_check.svg"
                alt="Check Icon"
                width={30}
                height={30}
              />
              <p className="text-base md:text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCover;

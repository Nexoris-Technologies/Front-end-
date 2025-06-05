"use client";

import Image from "next/image";

export default function OurProcess() {
  return (
    <section
      className="w-full bg-purple-6 py-12"
      aria-labelledby="our-process-heading"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-60 space-y-12">
        <span className="text-center">
          <h2
            id="our-process-heading"
            className="text-primary-purple font-bold text-3xl pb-10 md:text-4xl leading-tight"
          >
            Our Process
          </h2>
        </span>

        {/* Step 1 */}
        <ProcessStep
          step="01"
          title="A Real Conversation"
          description="We start with a call, not a pitch deck. Just tell us what's keeping you up at night, and we'll help you make sense of it."
          image={{
            src: "/process1.jpg",
            alt: "Two team members discussing project goals",
          }}
          reverse={false}
        />

        {/* Step 2 */}
        <ProcessStep
          step="02"
          title="A Clear Blueprint"
          description="No bloated proposals or fuzzy estimates. You'll get a straight-up plan: stack, timeline, pricing—crystal clear from day one."
          image={{
            src: "/process2.jpg",
            alt: "Wireframing and project planning session",
          }}
          reverse={true}
        />

        {/* Step 3 */}
        <ProcessStep
          step="03"
          title="Build, Sprint, Review"
          description="You meet your team. We work in focused sprints with regular check-ins, honest updates, and work that speaks for itself."
          image={{
            src: "/process3.jpg",
            alt: "Developer sprinting through tasks on a computer",
          }}
          reverse={false}
        />

        {/* Step 4 */}
        <ProcessStep
          step="04"
          title="Launch and Keep Growing"
          description="We don't ghost after go-live. We test, refine, and scale with you—turning early momentum into long-term success."
          image={{
            src: "/process4.jpg",
            alt: "Team celebrating product launch success",
          }}
          reverse={true}
        />
      </div>
    </section>
  );
}

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  reverse?: boolean;
}

function ProcessStep({
  step,
  title,
  description,
  image,
  reverse = false,
}: ProcessStepProps) {
  return (
    <div
      className={`flex flex-col  ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between gap-10 md:gap-12`}
    >
      <figure className="w-full md:w-1/2 flex justify-center">
        <Image
          src={image.src}
          alt={image.alt}
          width={400}
          height={300}
          className="w-full max-w-md h-auto rounded-md object-cover"
          priority
        />
      </figure>

      <div className="w-full md:w-1/2 flex flex-col items-center text-center gap-4">
        <div
          className="bg-white w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center shadow-md"
          aria-hidden="true"
        >
          <span className="text-[#543CDA] font-bold text-3xl md:text-6xl">
            {step}
          </span>
        </div>
        <h3 className="text-primary-purple font-semibold text-2xl md:text-3xl">
          {title}
        </h3>
        <p className="text-base md:text-lg font-medium text-purple-dark max-w-xl">
          {description}
        </p>
      </div>
    </div>
  );
}

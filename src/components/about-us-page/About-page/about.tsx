import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className=" w-full">
      {/* No width constraints — full span */}
      <div className="mt-16 px-4 md:px-8 lg:px-12 w-full">
        {/* Header */}
        <div className="rounded-lg bg-[#543CDA] py-6 md:py-10 px-4 md:px-8">
          <h3 className="font-bold text-3xl md:text-5xl text-white text-center">
            About Us
          </h3>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row mt-12 gap-10 lg:gap-20 w-full">
          {/* Text Section */}
          <div className="flex flex-col gap-5 lg:gap-8 w-full lg:w-1/2">
            <h3 className="text-xl md:text-4xl lg:max-w-2xl font-bold tracking-tight">
              Smart solutions. Trusted team. Built to grow with you.
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              At Nexoris, we believe technology should simplify and not
              complicate how you work. It should help your team move faster,
              your customers stay longer, and your business scale with
              confidence.
              <br />
              That’s why we don’t just build software, we build partnerships.
              The kind rooted in clarity, care, and a shared mission: turning
              bold ideas into real-world solutions.
            </p>

            <Button className="bg-[#543CDA] text-white rounded-lg py-3 md:py-3 text-sm md:text-lg w-fit px-6 flex items-center gap-8">
              <Link href="/get-a-quote">GET STARTED</Link>
              <Image
                src="/Arrow right.svg"
                alt="arrow right"
                width={16}
                height={16}
              />
            </Button>
          </div>

          {/* Image Section */}
          <div className="flex gap-4 md:gap-10 w-full lg:w-1/2">
            <div className="flex-1 h-[180px] md:h-[280px] lg:h-[320px] relative mt-6 md:mt-20 rounded-lg overflow-hidden">
              <Image
                src="/about-us-first.webp"
                alt="about-us-first"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="flex-1 h-[180px] md:h-[320px] mt-6 md:mt-0 relative rounded-lg overflow-hidden">
              <Image
                src="/about-us-second.webp"
                alt="about-us-second"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

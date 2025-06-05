import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section>
      {/* Container with responsive padding and max-width */}
      <div className="mt-32 container mx-auto px-4 ">
        {/* About Us heading with padding and rounded bg */}
        <div className="rounded-lg bg-[#543CDA] flex items-center   justify-center py-6 md:py-10">
          <h3 className="font-bold text-3xl md:text-5xl text-center text-white">
            About Us
          </h3>
        </div>

        {/* Main content: flex-col on small, flex-row on lg+ */}
        <div className="flex flex-col lg:flex-row justify-center items-center mt-12 gap-8 lg:gap-16 px-4 lg:px-0">
          {/* Text content */}
          <div className="flex flex-col gap-4 max-w-xl">
            <h3 className="text-xl md:text-3xl font-bold tracking-tight">
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

            <Button className="bg-[#543CDA] text-white rounded-lg py-3 md:py-5 text-sm md:text-lg w-52 md:w-72 flex justify-center items-center gap-2">
              <Link href="/get-a-quote">GET STARTED</Link>
              <span>
                <Image
                  src="/Arrow right.svg"
                  alt="arrow right"
                  width={16}
                  height={16}
                />
              </span>
            </Button>
          </div>

          {/* Images */}
          <div className="flex gap-4 md:gap-10">
            <div className="w-40 h-44 md:w-64 md:h-64 relative md:mt-28 rounded-lg overflow-hidden">
              <Image
                src="/about-us-first.webp"
                alt="about-us-first"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="w-40 h-44 md:w-64 md:h-[369px] relative rounded-lg overflow-hidden">
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

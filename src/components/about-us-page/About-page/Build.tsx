import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";

export default function Build() {
  return (
    <section>
      {/* Housing Let's build section */}
      <div className="flex flex-col justify-center items-center  gap-5 md:gap-6 mt-4 lg:mt-20  py-10 lg:py-15">
        <h3 className="text-[20px] md:text-[32px] font-semibold text-center md:tracking-wider">
          Let’s Build What’s Next Together
        </h3>
        <p className="text-sm md:text-lg text-center w-[320px] md:w-[800px] lg:w-[900px]">
          Done with tech that holds you back or systems that can’t keep up?
          Nexoris is here to change that with clarity, speed, and solutions
          built to grow with you. Let’s plan, build, and grow with confidence.
        </p>
        <Button className="bg-[#543CDA]  text-[#FFFFFF] rounded-[8px] py-[14px] text-[14px] md:text-[18px] md:py-3   flex justify-center items-center gap-8">
          <Link href="/contact-us">Get In Touch</Link>
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
    </section>
  );
}

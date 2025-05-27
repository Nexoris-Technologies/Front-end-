import Image from "next/image";

export default function Build() {
  return (
    <section>
      {/* Housing Let's build section */}
      <div className="flex flex-col justify-center items-center lg:ml-12 gap-[14px] md:gap-[32px] pt-[10rem] py-[2rem] lg:py-[12rem]">
        <h3 className="text-[20px] md:text-[32px] font-bold text-center md:tracking-wider">
          Let’s Build What’s Next Together
        </h3>
        <p className="text-[16px] md:text-[18px] text-center w-[320px] md:w-[800px] lg:w-[900px]">
          Done with tech that holds you back or systems that can’t keep up?
          Nexoris is here to change that with clarity, speed, and solutions
          built to grow with you. Let’s plan, build, and grow with confidence.
        </p>
        <button className="bg-[#543CDA]  text-[#FFFFFF] rounded-[8px] py-[14px] text-[14px] md:text-[18px] md:py-[18px]  w-[350px]  md:w-[200px] flex justify-center items-center gap-[10px]">
          Get In Touch
          <span>
            <Image
              src="/Arrow right.svg"
              alt="arrow right"
              width={16}
              height={16}
            />
          </span>
        </button>
      </div>
    </section>
  );
}

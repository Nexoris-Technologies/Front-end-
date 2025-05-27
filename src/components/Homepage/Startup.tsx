import Image from "next/image";

export default function Startup() {
  return (
    <section className="mt-[3rem] md:mt-[5rem]  lg:mt-[12rem] container mx-auto flex flex-col justify-center items-center">
      {/* Why start up text */}
      <div className="md:w-[900px] lg:max-w-[1200px] max-w-[344px] ">
        <h2 className="text-[22px] md:text-[40px] leading-[32px] md:leading-[55px] font-extrabold tracking-tight text-center">
          Why Startups and Scale-Ups Stick With Us
        </h2>
      </div>

      {/* Cards in the why startup section */}

      <div className="max-w-[1118px] flex flex-row flex-wrap justify-center gap-[16px] md:gap-[20px] mt-4 md:mt-8 lg:mt-14">
        {/* Card 1 */}
        <div className="max-w-[358px] h-[374px] rounded-[10px] border-[1.5px] py-[44px] flex flex-col justify-center items-center gap-[22px] border-[#543CDA]">
          <div className="w-[101px] h-[100px] rounded-full p-[19px] flex justify-center items-center gap-[10px] bg-[#543CDA]/10">
            <Image
              src="/Shield-Done.svg"
              alt="Shield"
              width={46}
              height={54}
              className="w-[65px] h-[65px]"
            />
          </div>
          <div className="w-[324px] h-[70px]">
            <h3 className="font-semibold text-[25px] leading-[35px] tracking-wide text-center text-[#543CDA]">
              From MVP to a Million Users
            </h3>
          </div>
          <div className="w-[313px] h-[78px]">
            <p className="text-[15px] leading-[26px] tracking-wide text-center">
              We don’t just build something that “works.” We build clean,
              flexible systems that scale. No brittle code, no dead-ends.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-[358px] h-[374px] rounded-[10px] border-[1.5px] py-[44px] flex flex-col justify-center items-center gap-[22px] border-[#543CDA]">
          <div className="w-[101px] h-[100px] rounded-full p-[19px] flex justify-center items-center gap-[10px] bg-[#543CDA]/10">
            <Image
              src="/Time-Square.svg"
              alt="Time Square"
              width={54.17}
              height={54.17}
              className="w-[65px] h-[65px]"
            />
          </div>
          <div className="w-[324px] h-[70px]">
            <h3 className="font-semibold text-[25px] leading-[35px] tracking-wide text-center text-[#543CDA]">
              Speed Without the Tech Debt
            </h3>
          </div>
          <div className="w-[313px] h-[78px]">
            <p className="text-[15px] leading-[26px] tracking-wide text-center">
              You need to move fast but not at the cost of broken architecture
              or handoff chaos. Our builds are fast, structured, and built to
              last.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-[358px] h-[374px] rounded-[10px] border-[1.5px] py-[44px] flex flex-col justify-center items-center gap-[22px] border-[#543CDA]">
          <div className="w-[101px] h-[100px] rounded-full p-[19px] flex justify-center items-center gap-[10px] bg-[#543CDA]/10">
            <Image
              src="/password.svg"
              alt="Password"
              width={52.81}
              height={52.81}
              className="w-[65px] h-[65px]"
            />
          </div>
          <div className="w-[324px] h-[70px]">
            <h3 className="font-semibold text-[25px] leading-[35px] tracking-wide text-center text-[#543CDA]">
              Outcomes You Can Feel
            </h3>
          </div>
          <div className="w-[313px] h-[78px]">
            <p className="text-[15px] leading-[26px] tracking-wide text-center">
              Bounce rates drop. Load times shrink. Conversions rise. Your team
              gets tools they actually enjoy using.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="max-w-[358px] h-[374px] rounded-[10px] border-[1.5px] py-[44px] flex flex-col justify-center items-center gap-[22px] border-[#543CDA]">
          <div className="w-[101px] h-[100px] rounded-full p-[19px] flex justify-center items-center gap-[10px] bg-[#543CDA]/10">
            <Image
              src="/Handshake.svg"
              alt="Handshake"
              width={60}
              height={42.45}
              className="w-[60px] h-[60px]"
            />
          </div>
          <div className="w-[324px] h-[70px]">
            <h3 className="font-semibold text-[25px] leading-[35px] tracking-wide text-center text-[#543CDA]">
              We Don't Vanish After Launch
            </h3>
          </div>
          <div className="w-[313px] h-[78px]">
            <p className="text-[15px] leading-[26px] tracking-wide text-center">
              Many dev companies ship and split. We stay. We test, improve, and
              grow with you like a real partner should.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="max-w-[358px] h-[374px] rounded-[10px] border-[1.5px] py-[44px] flex flex-col justify-center items-center gap-[22px] border-[#543CDA]">
          <div className="w-[101px] h-[100px] rounded-full p-[19px] flex justify-center items-center gap-[10px] bg-[#543CDA]/10">
            <Image
              src="/Vector.svg"
              alt="Strategy"
              width={48.69}
              height={45.87}
              className="w-[65px] h-[65px]"
            />
          </div>
          <div className="w-[324px] h-[70px]">
            <h3 className="font-semibold text-[25px] leading-[35px] tracking-wide text-center text-[#543CDA]">
              Strategy First. Code Second.
            </h3>
          </div>
          <div className="w-[313px] h-[78px]">
            <p className="text-[15px] leading-[26px] tracking-wide text-center">
              Before we touch a line of code, we ask the tough questions. That’s
              how you avoid budget burns, endless rewrites, and painful "how did
              we miss that?" moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

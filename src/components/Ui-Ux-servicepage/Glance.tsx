import Image from "next/image";

function Glance() {
  return (
    <section className=" flex flex-col  gap-8 py-16 px-2 sm:px-8 lg:px-12">
      <div className=" mx-auto">
        <Image
          src="/uijelly.svg"
          alt="Solar Pallete"
          width={60}
          height={60}
        />
      </div>
      <h3 className="font-bold text-3xl text-center">Key Benefits at a Glance</h3>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap- px-4 sm:px-8 lg:px-12">
        <div className="shadow-xl p-8 flex flex-col gap-8 ">
          <div className="flex items-center  justify-between">
            <h3 className="font-bold text-4xl">1</h3>
            <div className="flex items-center gap-3">
              <Image src="/3dots.svg" alt="Ellipse 40" width={60} height={12} />
            </div>
          </div>
          <p className="">
            Clarity in Every Click: Information architecture that removes
            friction and improves flow.
          </p>
        </div>

        <div className="shadow-xl p-8 flex flex-col gap-8 ">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-4xl">2</h3>
            <div className="flex items-center gap-3">
              <Image src="/3dots.svg" alt="Ellipse 40" width={60} height={12} />
            </div>
          </div>
          <p className="">
            User-First, Always: Every screen starts with empathy and ends with
            measurable outcomes.
          </p>
        </div>

        <div className="shadow-xl p-8 flex flex-col gap-8 ">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-4xl">3</h3>
            <div className="flex items-center gap-3">
              <Image src="/3dots.svg" alt="Ellipse 40" width={60} height={12} />
            </div>
          </div>
          <p className="">
            Design Systems That Scale: We build reusable, modular components for
            long-term consistency.
          </p>
        </div>

        <div className="shadow-xl p-8 flex flex-col gap-8 ">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-4xl">4</h3>
            <div className="flex items-center gap-3">
              <Image src="/3dots.svg" alt="Ellipse 40" width={60} height={12} />
            </div>
          </div>
          <p className="">
            Conversion-Centered Thinking: UI aligned with how users behave and
            how businesses grow.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Glance;

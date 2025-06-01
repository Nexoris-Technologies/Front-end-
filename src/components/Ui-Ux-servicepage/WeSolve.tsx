import Image from "next/image";

function WeSolve() {
  return (
    <section className="">
      {/* Main container */}
      <div className="flex flex-col items-center justify-center py-20 gap-15 container mx-auto ">
        {/* Section heading */}
        <h3 className="font-bold text-2xl md:text-3xl text-center">
          Problems We Solve
        </h3>
        <div className=" grid grid-cols-1 lg:grid-cols-5 gap-8 lg:w-290">
          <div className="shadow-xl">
            <div className="h-2 bg-[#543CDA] rounded-tr-2xl rounded-tl-2xl"></div>
            <Image
              src="/loudspeaker.svg"
              alt="Loud Speaker"
              width={30}
              height={30}
              className="m-5"
            />
            <p className="p-5">
              Users abandon your <br /> app because it feels <br /> clunky or
              confusing
            </p>
          </div>

          <div className="shadow-xl">
            <div className="h-2 bg-[#FD9300] rounded-tr-2xl rounded-tl-2xl"></div>
            <Image
              src="/loudspeaker.svg"
              alt="Loud Speaker"
              width={30}
              height={30}
              className="m-5"
            />
            <p className="p-5">
              Design consistency <br /> breaks down across <br /> teams or
              platforms
            </p>
          </div>

          <div className="shadow-xl">
            <div className="h-2 bg-[#54C300] rounded-tr-2xl rounded-tl-2xl"></div>
            <Image
              src="/loudspeaker.svg"
              alt="Loud Speaker"
              width={30}
              height={30}
              className="m-5"
            />
            <p className="p-5">
              You’re launching fast <br /> but design can’t <br /> keep up
            </p>
          </div>

          <div className="shadow-xl">
            <div className="h-2 bg-[#0059F1] rounded-tr-2xl rounded-tl-2xl"></div>
            <Image
              src="/loudspeaker.svg"
              alt="Loud Speaker"
              width={30}
              height={30}
              className="m-5"
            />
            <p className="p-5">
              Stakeholders love <br /> ideas, but devs need <br /> real assets
            </p>
          </div>

          <div className="shadow-xl">
            <div className="h-2 bg-[#B901F6] rounded-tr-2xl rounded-tl-2xl"></div>
            <Image
              src="/loudspeaker.svg"
              alt="Loud Speaker"
              width={20}
              height={20}
              className="m-5"
            />
            <p className="p-5">
              You’ve outgrown <br /> templates and need a <br /> polished,
              branded experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeSolve;

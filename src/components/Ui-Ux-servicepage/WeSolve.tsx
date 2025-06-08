import Image from "next/image";

function WeSolve() {
  return (
    <section className="">
      {/* Main container */}
      <div className="flex flex-col  py-10 lg:py-12 gap-15 px-4 sm:px-14 lg:px-24 ">
        {/* Section heading */}
        <h3 className="font-bold text-2xl md:text-3xl text-center">
          Problems We Solve
        </h3>
        <div className=" grid grid-cols-1 lg:grid-cols-5 gap-8 ">
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
              Users abandon your app because it feels  clunky or
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
              Design consistency breaks down across  teams or
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
              You’re launching fast  but design can’t  keep up
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
              Stakeholders love ideas, but devs need real assets
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
              You’ve outgrown templates and need a polished,
              branded experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeSolve;

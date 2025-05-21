import Image from "next/image";

function OurProcess() {
  return (
    <section className="bg-[#EAE8F7] w-full py-12">
      <div className="container mx-auto flex flex-col gap-20 px-4">
        <h1 className="text-center text-[#543cda] font-bold text-3xl md:text-4xl">
          Our Process
        </h1>

        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-2">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/process1.jpg"
              alt="Process Image 1"
              width={240}
              height={288}
              className="w-full max-w-md h-auto rounded-md"
            />
          </div>
          <div className="flex flex-col items-center text-center gap-4 w-full md:w-1/2">
            <div className="bg-white w-24 h-24 md:h-36 md:w-36 rounded-full flex items-center justify-center">
              <h1 className="text-[#543CDA] font-bold text-3xl md:text-8xl">
                01
              </h1>
            </div>
            <h4 className="text-[#543CDA] font-medium text-xl md:text-2xl">
              A Real Conversation
            </h4>
            <p className="text-base md:text-lg font-medium max-w-md">
              We start with a call, not a pitch deck. Just tell us what&#39;s
              keeping you up at night, and we&#39;ll help you make sense of it.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-2">
          <div className="flex flex-col items-center text-center gap-4 w-full md:w-1/2">
            <div className="bg-white w-24 h-24 md:h-36 md:w-36 rounded-full flex items-center justify-center">
              <h1 className="text-[#543CDA] font-bold text-3xl md:text-8xl">
                02
              </h1>
            </div>
            <h4 className="text-[#543CDA] font-medium text-xl md:text-2xl">
              A Clear Blueprint
            </h4>
            <p className="text-base md:text-lg font-medium max-w-md">
              No bloated proposals or fuzzy estimates. You&#39;ll get a
              straight-up plan: stack, timeline, pricing crystal clear from day
              one.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/process2.jpg"
              alt="Process Image 2"
              width={240}
              height={288}
              className="w-full max-w-md h-auto rounded-md"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-2">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/process3.jpg"
              alt="Process Image 3"
              width={240}
              height={288}
              className="w-full max-w-md h-auto rounded-md"
            />
          </div>
          <div className="flex flex-col items-center text-center gap-4 w-full md:w-1/2">
            <div className="bg-white w-24 h-24 md:h-36 md:w-36 rounded-full flex items-center justify-center">
              <h1 className="text-[#543CDA] font-bold text-3xl md:text-8xl">
                03
              </h1>
            </div>
            <h4 className="text-[#543CDA] font-medium text-xl md:text-2xl">
              Build, Sprint, Review
            </h4>
            <p className="text-base md:text-lg font-medium max-w-md">
              You meet your team. We work in focused sprints with regular
              check-ins, honest updates, and work that speaks for itself.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-2">
          <div className="flex flex-col items-center text-center gap-4 w-full md:w-1/2">
            <div className="bg-white w-24 h-24 md:h-36 md:w-36 rounded-full flex items-center justify-center">
              <h1 className="text-[#543CDA] font-bold text-3xl md:text-8xl">
                04
              </h1>
            </div>
            <h4 className="text-[#543CDA] font-medium text-xl md:text-2xl">
              Launch and Keep Growing
            </h4>
            <p className="text-base md:text-lg font-medium max-w-md">
              We don&#39;t ghost after go-live. We test, refine, and scale with
              you, turning early momentum into long-term success.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/process4.jpg"
              alt="Process Image 4"
              width={240}
              height={288}
              className="w-full max-w-md h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;

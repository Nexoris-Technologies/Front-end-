import Link from "next/link";

function StrategyCall() {
  return (
    <section className="flex items-center justify-center mb-12 px-4 sm:px-6">
      <div className="w-full max-w-7xl bg-[#EAE8F7] rounded-md flex flex-col items-center justify-center gap-8 py-12 px-4 sm:px-8">
        <h2 className="text-[#543CDA] font-bold text-lg sm:text-xl md:text-2xl text-center">
          You’ve Been Thinking About This for Months, Let’s Finally Build It Right
        </h2>

        <p className="font-medium text-center text-sm sm:text-base">
          You’ve pitched it. Sketched it. Lost sleep over it. <br className="hidden sm:block" />
          Now it’s time to bring it to life with a team that gets it, builds fast, and stays for the long haul.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto justify-center items-center">
          <Link
            href="#"
            className="bg-[#543CDA] text-white py-3 px-6 sm:py-4 sm:px-12 rounded-md font-medium text-center w-full sm:w-auto"
          >
            Book a Free Strategy Call
          </Link>

          <Link
            href="#"
            className="border-2 border-[#543CDA] text-[#543CDA] py-3 px-6 sm:py-4 sm:px-12 rounded-md font-medium text-center w-full sm:w-auto"
          >
            Request a Free Product Audit
          </Link>
        </div>

        <p className="font-medium text-center text-sm sm:text-base px-2 sm:px-0">
          No pressure. No fluff. Just real help, from people who’ve built what you’re building.
        </p>
      </div>
    </section>
  );
}

export default StrategyCall;

import Link from "next/link";

export default function StrategyCall() {
  return (
    <section
      className="flex items-center justify-center mb-12 px-4 sm:px-6 lg:py-6"
      aria-labelledby="strategy-call-heading"
    >
      <div className="w-full max-w-7xl bg-gradient-to-br from-[#EAE8F7] via-[#F6F4FF] to-[#FFFFFF] rounded-xl flex flex-col items-center justify-center gap-8 md:gap-16 lg:gap-10 py-6 px-4 sm:px-8 md:py-10 lg:py-18 shadow-sm">
        <h2
          id="strategy-call-heading"
          className="text-primary-purple font-extrabold text-lg sm:text-xl md:text-2xl text-center leading-tight"
        >
          You&rsquo;ve Been Thinking About This for Months, Let&rsquo;s Finally Build It Right
        </h2>

        <p className="font-medium text-center text-sm sm:text-base max-w-2xl text-purple-dark">
          You&rsquo;ve pitched it. Sketched it. Lost sleep over it.{" "}
          <br className="hidden sm:block" />
          Now it&rsquo;s time to bring it to life with a team that gets it, builds fast, and stays for the long haul.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto justify-center items-center">
          <Link
            href="#"
            className="bg-primary-purple hover:bg-primary-blue text-purple-6 py-3 px-6 sm:py-4 sm:px-12 rounded-md font-semibold text-center w-full sm:w-auto transition-colors duration-200"
          >
            Book a Free Strategy Call
          </Link>

          <Link
            href="#"
            className="border-2 border-primary-purple text-primary-purple hover:bg-purple-5 py-3 px-6 sm:py-4 sm:px-12 rounded-md font-semibold text-center w-full sm:w-auto transition-colors duration-200"
          >
            Request a Free Product Audit
          </Link>
        </div>

        <p className="font-medium text-center text-sm sm:text-base px-2 sm:px-0 text-purple-dark max-w-xl">
          No pressure. No fluff. Just real help, from people who&rsquo;ve built what you&rsquo;re building.
        </p>
      </div>
    </section>
  );
}

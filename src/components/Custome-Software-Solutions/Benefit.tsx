import Image from "next/image";

export default function Keys() {
  return (
    <section className="px-4">
      <div className="flex flex-col items-center justify-center container mx-auto gap-12 py-12 lg:py-24">
        {/* Heading */}
        <h3 className="font-bold text-xl sm:text-2xl lg:text-4xl text-center">
          Key Benefits at a Glance
        </h3>

        {/* Cards Container */}
        <div className="flex flex-col  lg:flex-row gap-6 items-center md:px-10 max-w-7xl">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 bg-white shadow-2xl p-6 border-t-14 border-[#543CDA] rounded-tl-2xl rounded-tr-2xl w-full max-w-[360px] min-h-[200px]">
            <Image src="/Number 1.svg" alt="Number 1" width={40} height={40} />
            <p className="text-base leading-relaxed">
              Custom-Fit to Your Workflow: Built specifically around your
              workflows, not the other way around.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 bg-white shadow-2xl p-6 border-t-14 border-[#543CDA] rounded-tl-2xl rounded-tr-2xl w-full max-w-[360px] min-h-[200px]">
            <Image src="/Number 2.svg" alt="Number 2" width={40} height={40} />
            <p className="text-base leading-relaxed">
              Designed to Scale with You: Flexible foundations that grow as your
              team, data, and needs evolve.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4 bg-white shadow-2xl p-6 border-t-14 border-[#543CDA] rounded-tl-2xl rounded-tr-2xl w-full max-w-[360px] min-h-[200px]">
            <Image src="/Number 3.svg" alt="Number 3" width={40} height={40} />
            <p className="text-base leading-relaxed">
              Seamless System Integration: We connect your CRMs, ERPs, APIs, and
              third-party platforms securely.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col gap-4 bg-white shadow-2xl p-6 border-t-14 border-[#543CDA] rounded-tl-2xl rounded-tr-2xl w-full max-w-[360px] min-h-[200px]">
            <Image src="/Number 4.svg" alt="Number 4" width={40} height={40} />
            <p className="text-base leading-relaxed">
              Built for Operational Impact: Reduce manual processes, automate
              repetitive tasks, and uncover new efficiencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

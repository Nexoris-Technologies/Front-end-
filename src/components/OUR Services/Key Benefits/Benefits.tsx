import Image from "next/image";

export default function () {
  return (
    <section className="lg:bg-[#EAE8F7]">
      {/* Housing the phone Icon, h3 and the cards */}
      <div className="flex flex-col items-center gap-[60px] py-[3rem] lg:py-[6rem]">
        {/* Housing the mini phone icon */}
        <div className="w-[60px] h-[60px] lg:w-[40px] lg:h-[40px]">
          <Image
            src="/mini phone.webp"
            alt="Mini phone"
            width={40}
            height={40}
          />
        </div>
        {/* Housing the Benefit text */}
        <div>
          <h3 className="font-bold text-[24px] lg:text-[40px] text-center">
            Key Benefits at a Glance
          </h3>
        </div>
        {/* Housing the four cards */}
        <div className="flex flex-col lg:flex-row gap-[24px] ">
          {/* First card */}
          <div className="flex flex-col gap-[10px] bg-[#FFFFFF] shadow-2xl p-4 border-t-[#543CDA] rounded-tl-[16px] rounded-tr-[16px]  border-t-12">
            <Image src="/Number 1.svg" alt="Number 1" width={40} height={40} />
            <p className="text-[18px] w-[330px] lg:w-[252px]">
              Performance That Feels Native: Smooth animations, quick load
              times, and no-friction interactions.
            </p>
          </div>
          {/* Secondcard */}
          <div className="flex flex-col gap-[10px] bg-[#FFFFFF] shadow-2xl p-4 border-t-[#543CDA] rounded-tl-[16px] rounded-tr-[16px]  border-t-12">
            <Image src="/Number 2.svg" alt="Number 1" width={40} height={40} />
            <p className="text-[18px] w-[330px] lg:w-[240px]">
              Cross-Platform From Day One: One codebase for iOS and Android
              using Flutter or React Native.
            </p>
          </div>
          {/* Third card */}
          <div className="flex flex-col gap-[10px] bg-[#FFFFFF] shadow-2xl p-4 border-t-[#543CDA] rounded-tl-[16px] rounded-tr-[16px]  border-t-12">
            <Image src="/Number 3.svg" alt="Number 1" width={40} height={40} />
            <p className="text-[18px] w-[330px] lg:w-[252px]">
              Launch-Ready for App Store and Play Store: Compliant, optimized,
              and ready for smooth approvals.
            </p>
          </div>
          {/* Fourth card */}
          <div className="flex flex-col gap-[10px] bg-[#FFFFFF] shadow-2xl p-4 border-t-[#543CDA] rounded-tl-[16px] rounded-tr-[16px]  border-t-12">
            <Image src="/Number 4.svg" alt="Number 1" width={40} height={40} />
            <p className="text-[18px] w-[340px] lg:w-[250px]">
              Custom Features, No Templates: Built from scratch to fit your
              business, not boxed into someone else’s.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

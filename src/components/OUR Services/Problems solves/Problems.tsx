import Image from "next/image";

export default function Problem() {
  return (
    <section>
      {/* Housing the Problems and the cards */}
      <div className="flex flex-col gap-[32px] md:gap-[40px] py-[6rem]">
        <div>
          <h1 className="font-bold text-[24px] md:text-[40px] text-center">
            Problem We Solve
          </h1>
        </div>
        {/* Housing  the card  */}
        <div className="max-w-[1224px] flex flex-col lg:flex-row flex-wrap justify-center mx-auto gap-[24px]">
          {/* First card */}
          <div className="flex flex-col items-center border-[1px] p-[24px] border-[#898686]/40 rounded-[8px] gap-[16px] w-[343px] md:w-[380px]">
            <Image src="/numb 1.svg" alt="num 1" width={60} height={60} />
            <p className="text-[16px] text-center w-[250px]">
              Our mobile app crashes or freezes constantly.
            </p>
          </div>
          {/* second card */}
          <div className="flex flex-col items-center border-[1px] p-[24px] border-[#898686]/40 rounded-[8px]  gap-[16px] w-[343px] md:w-[380px]">
            <Image src="/numb 2.svg" alt="num 2" width={60} height={60} />
            <p className="text-[16px] text-center w-[250px]">
              Users complain it’s slow, clunky, or confusing.
            </p>
          </div>
          {/* third card */}
          <div className="flex flex-col items-center border-[1px] p-[24px] border-[#898686]/40 rounded-[8px]  gap-[16px] w-[343px] md:w-[380px]">
            <Image src="/numb 3.svg" alt="num 3" width={60} height={60} />
            <p className="text-[16px] text-center w-[300px]">
              We want to launch on both iOS and Android but don’t want two
              teams.
            </p>
          </div>
          {/* fourth card */}
          <div className="flex flex-col items-center border-[1px] p-[24px] border-[#898686]/40 rounded-[8px]  gap-[16px] w-[343px] md:w-[380px]">
            <Image src="/numb 4.svg" alt="num 4" width={60} height={60} />
            <p className="text-[16px] text-center w-[300px]">
              Our current app hasn’t been updated in years and feels outdated.
            </p>
          </div>
          {/* fifth card */}
          <div className="flex flex-col items-center border-[1px] p-[24px] border-[#898686]/40 rounded-[8px]  gap-[16px] w-[343px] md:w-[380px]">
            <Image src="/numb 5.svg" alt="num 5" width={60} height={60} />
            <p className="text-[16px] text-center w-[300px]">
              We need a better way to handle logins, payments, or push
              notifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

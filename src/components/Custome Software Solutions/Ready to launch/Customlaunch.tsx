import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function CustomLaunch() {
  return (
    <section className="px-4">
      {/* Centered container with vertical spacing */}
      <div className="flex flex-col items-center  gap-6 py-8 md:py-[4rem] max-w-5xl mx-auto text-center">
        {/* Main heading with responsive font size and line break handling */}
        <h3 className="font-bold w-[330px] md:w-[580px] lg:w-[950px] px-3 text-[20px] md:text-[32px] text-center  max-w-[950px] ">
          Ready to stop forcing your team to work around bad tools? Let’s build
          software that works the way you do.
        </h3>

        {/* Call-to-action button wrapped in Link */}
        <Link href="#">
          <button className="flex items-center text-[14px] md:text-[24px] justify-center md:w-[600px] gap-[10px] bg-[#543CDA] text-white px-6 py-3 md:px-[32px] md:py-[21.5px] rounded-[8px] hover:bg-[#432bb6] transition-colors duration-300">
            Talk To Our Customs Solutions Team
            <BsArrowRight className="text-lg" />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CustomLaunch;

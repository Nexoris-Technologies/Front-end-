import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function Launch() {
  return (
    <section className="px-4">
      {/* Centered container with vertical spacing */}
      <div className="flex flex-col items-center gap-6 py-8 md:py-20 max-w-5xl mx-auto text-center">
        {/* Main heading with responsive font size and line break handling */}
        <h3 className="font-bold md:text-[32px] text-[24px] ">
          Ready to launch a mobile app your users actually love?
        </h3>

        {/* Call-to-action button wrapped in Link */}
        <Link href="#">
          <button className="flex items-center  justify-center md:w-[303px] gap-[10px] bg-[#543CDA] text-white px-6 py-3 md:px-[32px] md:py-[21.5px] rounded-[8px] hover:bg-[#432bb6] transition-colors duration-300">
            Talk To Our Web Experts
            <BsArrowRight className="text-lg" />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Launch;

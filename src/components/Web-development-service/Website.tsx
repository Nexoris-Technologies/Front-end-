import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Button from "../Button/Button";

function Website() {
  return (
    <section className="">
      {/* Centered container with vertical spacing */}
      <div className="flex flex-col justify-center items-center gap-6 mb-4 lg:mb-8  ">
        {/* Main heading with responsive font size and line break handling */}
        <h3 className="font-medium text-xl sm:text-2xl md:text-4xl max-w-sm sm:max-w-2xl lg:max-w-4xl text-center  ">
          Your website shouldn’t be holding your business back. Let’s build
          something faster, smarter, and better.
        </h3>

        {/* Call-to-action button wrapped in Link */}
        <Link href="#">
          <Button className="flex items-center gap-3 bg-[#543CDA] text-white px-6 py-3 md:px-12 md:py-4 rounded-md hover:bg-[#432bb6] transition-colors duration-300 mx-auto">
            Talk To Our Web Experts
            <BsArrowRight className="text-lg" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Website;

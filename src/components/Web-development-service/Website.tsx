import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Button from "../Button/Button";

function Website() {
  return (
    <section className="px-4">
      {/* Centered container with vertical spacing */}
      <div className="flex flex-col items-center justify-center gap-6 py-20 container mx-auto text-center">
        {/* Main heading with responsive font size and line break handling */}
        <h1 className="font-bold text-xl sm:text-2xl md:text-4xl leading-snug">
          Your website shouldn’t be holding your business back.{" "}
          <br className="hidden md:inline" />
          Let’s build something faster, smarter, and better.
        </h1>

        {/* Call-to-action button wrapped in Link */}
        <Link href="#">
          <Button className="flex items-center gap-3 bg-[#543CDA] text-white px-6 py-3 md:px-12 md:py-4 rounded-md hover:bg-[#432bb6] transition-colors duration-300">
            Talk To Our Web Experts
            <BsArrowRight className="text-lg" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Website;

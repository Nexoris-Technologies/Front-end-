import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Button from "../Button/Button";

function Tired() {
  return (
    <section className="px-4">
      {/* Centered container with vertical spacing */}
      <div className="flex flex-col items-center justify-center gap-6 py-8 lg:py-20 lg:max-w-6xl  container  mx-auto ">
        {/* Main heading with responsive font size and line break handling */}
        <h3 className="font-bold text-lg  text-center md:text-4xl ">
          Tired of users getting lost, frustrated, or bouncing? <br /> Let’s
          design something clear, fast, and unforgettable.
        </h3>

        {/* Call-to-action button wrapped in Link */}
        <Link href="#">
          <Button className="flex items-center gap-3 bg-[#543CDA] text-white px-6 py-3 md:px-12 md:py-4 rounded-md hover:bg-[#432bb6] transition-colors duration-300">
            Talk To Our Design Experts
            <BsArrowRight className="text-lg" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Tired;

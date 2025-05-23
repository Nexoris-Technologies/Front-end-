import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function Competition() {
  return (
    <section className="my-24 flex justify-center py-20 px-4 bg-white">
      <div className="flex items-center justify-center w-full max-w-7xl">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Badge */}
          <h4 className="bg-[#0059F11A] py-2 px-6 rounded-full text-[#0059F1] font-bold text-sm sm:text-base">
            Website Development
          </h4>

          {/* Heading and Paragraph */}
          <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl text-[#543CDA]">
              Build Websites That <br /> Outrun the Competition.
            </h1>
            <p className="font-normal text-sm sm:text-base text-gray-700 px-2">
              At Nexoris, we don’t just build websites—we create lightning-fast, Google- <br /> optimized digital experiences that scale with your business and help you attract, <br /> engage, and convert more customers.
            </p>
          </div>

          {/* Button */}
          <Link href="#">
            <button className="flex items-center gap-2 bg-[#543CDA] py-4 sm:px-12 rounded-md text-white font-bold text-sm sm:text-base">
              Let’s Build Yours <BsArrowRight className="text-lg" />
            </button>
          </Link>

          {/* Image */}
          <div className="w-full max-w-5xl">
            <Image
              src="/ServiceImage2.svg"
              alt="Service Image"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competition;

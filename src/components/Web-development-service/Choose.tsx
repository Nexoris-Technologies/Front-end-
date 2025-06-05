"use client";
import Image from "next/image";
import { CgCheckO } from "react-icons/cg";
import { motion } from "framer-motion";

function Choose() {
  return (
    <section className="flex items-center justify-center py-15 bg-[#EAE8F7] px-4">
      <div className="flex flex-col lg:flex-row  items-center justify-center mx-auto container gap-12 lg:gap-20  ">
        {/* Text Section */}
        <div className="flex flex-col gap-12 lg:gap-7 max-w-xl ">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left  ">
            Why Choose Nexoris for Web Development?
          </h3>

          <div className="flex flex-col gap-8  ">
            <div className="flex items-start gap-4">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className=" text-md lg:text-xl">
                100% custom code, zero drag-and-drop fluff.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className="text-md lg:text-xl  ">
                Sites optimized to pass Google’s Core Web Vitals with flying
                colors.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className="text-md lg:text-xl">
                Strategy-first builds that align UX, SEO, and business growth.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <p className="text-[1.7rem]">
                <CgCheckO />
              </p>
              {/* <Image src="/subtract.svg" alt="Icon" width={24} height={24} /> */}
              <p className="text-md lg:text-xl">
                Long-term partners, not just launch-and-leave developers.
              </p>
            </div>
          </div>
        </div>

        {/* Image and Testimonial */}
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // Only animate once when 30% of image is visible
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="w-[343px] lg:w-[560px]  ">
              <Image
                src="/web-dev-image.webp"
                alt="Service Image"
                width={560}
                height={600}
                className=" rounded-[24px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Choose;

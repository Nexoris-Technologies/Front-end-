import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <section className="bg-black h-auto py-12 px-6 sm:px-16 flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-20 mb-10 items-start">
       
        {/* Column 1: Logo and Social Icons */}
        <div className="flex flex-col justify-start">
          <div>
            <img src="/Logo.png" alt="Logo" className="h-[7.5rem] w-[16rem] max-w-full" />
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="https://www.facebook.com/share/1Xcc9b5ubk/" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <BiLogoFacebook className="w-6 h-6 text-black" />
            </Link>
            <Link href="https://x.com/Nexoristech?t=54h97LnR3XKyAkSk4oSRXw&s=09" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FaXTwitter className="w-6 h-6 text-black" />
            </Link>
            <Link href="https://www.instagram.com/nexoristechnologies?igsh=MXh0NDc0ODU2c3lqNw==" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <IoLogoInstagram className="w-6 h-6 text-black" />
            </Link>
            <Link href="https://www.linkedin.com/company/nexoris-technologies/" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <TiSocialLinkedin className="w-6 h-6 text-black" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FaTiktok className="w-6 h-6 text-black" />
            </Link>
          </div>
        </div>

        {/* Column 2: Company */}
        <div className="flex flex-col gap-12">
          <h1 className="text-gray-400 font-bold text-2xl">Company</h1>

          <nav className="flex flex-col gap-6 text-white text-[1rem] font-[500]">
            <Link href="http://nexoristech.com/" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-11">Home</Link>
            <Link href="http://nexoristech.com/" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-16">About Us</Link>
            <Link href="http://nexoristech.com/contact-us" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-20">Contact Us</Link>
            <Link href="http://nexoristech.com/careers" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-14">Careers</Link>
            <Link href="http://nexoristech.com/insights" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-14">Insights</Link>
          </nav>
        </div>

        {/* Column 3: Services */}
        <div className="flex flex-col gap-12">
          <h1 className="text-gray-400 font-bold text-2xl">Services</h1>

          <nav className="flex flex-col gap-6 text-white text-[1rem] font-[500]">
            <Link href="http://nexoristech.com/web-development" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-33">Web Development</Link>
            <Link href="http://nexoristech.com/ui-ux-design" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-52">UI/UX Design and Consulting</Link>
            <Link href="http://nexoristech.com/mobile-app-development" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-33">Mobile Application</Link>
            <Link href="http://nexoristech.com/seo-and-content-marketing" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-50">SEO and Content Marketing</Link>
            <Link href="http://nexoristech.com/product-management" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-60">Product Design and Management</Link>
            <Link href="http://nexoristech.com/custom-software-solutions" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-47">Custom Software Solution</Link>
            <Link href="http://nexoristech.com/digital-transformation" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-39">Digital Transformation</Link>
          </nav>
        </div>

        {/* Column 4: Resources */}
        <div className="flex flex-col gap-12">
          <h1 className="text-gray-400 font-bold text-2xl">Resources</h1>

          <nav className="flex flex-col gap-6 text-white text-[1rem] font-[500]">
            <Link href="http://nexoristech.com/privacy-policy" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-25">Privacy Policy</Link>
            <Link href="http://nexoristech.com/cookie-policy" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-24">Cookie Policy</Link>
            <Link href="http://nexoristech.com/terms-of-service" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#543CDA] after:transition-all after:duration-300 hover:after:w-30">Terms of Service</Link>
          </nav>
        </div>
      </div>

      <div className="h-1 w-full"></div>

      {/* Footer Bottom */}
      <div className="flex items-center justify-center py-4 sm:py-6 border-t-2 border-gray-300">
        <p className="text-white text-sm sm:text-base text-center">
          &copy; 2025 Copyright, Nexoris.
        </p>
      </div>
    </section>
  );
}

export default Footer;

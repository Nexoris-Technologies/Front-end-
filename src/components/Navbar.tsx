"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

interface ServiceItem {
  label: string;
  path: string;
}

const services: ServiceItem[] = [
  { label: "Web Development", path: "/web-development" },
  { label: "Mobile App Development", path: "/mobile-app-development" },
  { label: "UI/UX Design & Consulting", path: "/ui-ux-design-consulting" },
  { label: "SEO & Content Marketing", path: "/seo-content-marketing" },
  { label: "Custom Software Solutions", path: "/custom-software-solutions" },
  {
    label: "Product Design and Management",
    path: "/product-design-management",
  },
];

const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 300);
  };

  return (
    <nav
      className="bg-purple-dark shadow-lg fixed top-0 z-10 w-full rounded-b-xl lg:rounded-b-[1.5rem]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        ref={navRef}
        className="contain flex justify-between items-center w-full px-4 md:px-6 lg:px-12 xl:px-20 mx-auto h-12 lg:h-18 xl:h-22 "
      >
        {/* Logo */}
        <Link href="/" aria-label="Nexoris Home" className="relative">
          <div className="  ">
            <Image
              src="/nexoris-logo-black-bg-with-tagkine-042915-Photoroom-1-(1).webp"
              alt="Nexoris Technologies Logo"
              fill
              className="object-contain block"
              priority
            />
          </div>
        </Link>

        {/* Get a Quote CTA (mobile, centered) */}
        <Link
          href="/quote"
          className="lg:hidden absolute left-1/2 -translate-x-1/2 bg-primary-purple text-purple-6 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-primary-blue transition-colors z-10"
          aria-label="Get a Quote"
        >
          Get a Quote
        </Link>

        {/* Desktop Navigation */}
        <ul
          className="hidden lg:flex gap-6 text-purple-6 font-medium font-poppins items-center"
          role="menubar"
        >
          <li>
            <Link
              href="/"
              className={`text-purple-6 ${
                pathname === "/"
                  ? "text-primary-blue underline underline-offset-4 decoration-primary-blue"
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className={`text-purple-6 ${
                pathname === "/about-us"
                  ? "text-primary-blue underline underline-offset-4 decoration-primary-blue"
                  : ""
              }`}
            >
              About Us
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`flex items-center text-purple-6 cursor-pointer ${
                services.some((s) => s.path === pathname)
                  ? "text-primary-blue underline underline-offset-4 decoration-primary-blue"
                  : ""
              }`}
            >
              Services
              {isServicesOpen ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {isServicesOpen && (
              <div
                className="absolute left-1/2 transform -translate-x-1/2 bg-background text-body shadow-lg z-50 rounded-lg flex justify-center py-4 lg:mt-8"
                style={{
                  width: navRef.current?.offsetWidth
                    ? `${navRef.current.offsetWidth * 0.6}px`
                    : "60%",
                }}
              >
                <div className="grid grid-cols-2 gap-x-5 lg:gap-x-10 gap-y-1 p-4 text-body items-center">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      href={service.path}
                      className="group flex items-center gap-2 hover:bg-primary-purple text-body hover:text-purple-6 rounded-lg px-3 py-2 transition-colors duration-200 w-full text-purple-dark"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <CheckCircle
                        className="text-heading group-hover:text-secondary-text h-5 transition-colors duration-200"
                        size={16}
                      />
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link
              href="/insights"
              className={`text-purple-6 ${
                pathname === "/insights"
                  ? "text-primary-blue underline underline-offset-4 decoration-primary-blue"
                  : ""
              }`}
            >
              Insights
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className={`text-purple-6 ${
                pathname === "/contact-us"
                  ? "text-primary-blue underline underline-offset-4 decoration-primary-blue"
                  : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* CTA (desktop) */}
        <Link
          href="/get-a-quote"
          className="hidden lg:block cursor-pointer rounded-lg px-5 py-2 hover:bg-primary-blue bg-primary-purple text-purple-6 font-medium"
        >
          Get a Quote
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-purple-6 relative mr-0"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setIsMobileServicesOpen(false);
          }}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-purple-6 px-4 w-full z-20 absolute top-14 rounded mx-auto mt-4">
          <nav
            className="flex flex-col gap-y-3 py-5 bg-purple-6 text-body text-purple-dark font-medium"
            aria-label="Mobile navigation"
          >
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>

            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full cursor-pointer"
              aria-expanded={isMobileServicesOpen}
              aria-label="Toggle services submenu"
            >
              <span>Services</span>
              {isMobileServicesOpen ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {isMobileServicesOpen && (
              <div className="flex flex-col gap-y-2 ml-4 mt-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                    className="text-purple-dark"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/Insights" onClick={() => setIsMobileMenuOpen(false)}>
              Insights
            </Link>
            <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

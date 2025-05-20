<<<<<<< HEAD
"use client";
import Tools from "@/components/common/HomePage/Tools/Tool";
import Ourprocess from "@/components/common/HomePage/OurProcess/OurProcess";
import BuiltFor from "@/components/common/HomePage/BuiltFor/BuiltFor"
import OurClients from "@/components/common/HomePage/OurClients/OurClients";
import Insight from "@/components/common/HomePage/Insights/Insights";
import Faqs from "@/components/common/HomePage/Faqs/Faqs";
import StrategyCall from "@/components/common/HomePage/StrategyCall/StrategyCall";
import Footer from "@/components/common/HomePage/Footer/Footer";
import Navbar from "@/components/common/HomePage/NavBar/NavBar";
import Startup from "@/components/common/HomePage/WhyStartUp/StartUp";
import Love from "@/components/common/HomePage/WhatYouLove/Love";
import Everything from "@/components/common/HomePage/EverythingToKnow/Eveything";
import Hero from "@/components/common/HomePage/HeroSection/Hero";


function LandingPage() {
  return(
    <section>
      {/* Navigation Content */}
      <header>
      <Navbar />
      </header>

      {/* Main Content */}
      <main>
      {/* <HeroSection /> */}
      <Hero />
      <Startup />
      <Love />
      <Everything />
      <BuiltFor />
      <Tools />
      <Ourprocess />
      <OurClients />
      <Insight />
      <Faqs />
      <StrategyCall />
      </main>

      {/* Footer Content */}
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default LandingPage;
=======
import HomePage from "./components/Homepage/Homepage";
import ContactUs from "./contact/page";

export default function page() {
  return (
    <div>
      {/* Homepage */}
      <div>
        <HomePage />
      </div>
      {/* Contact us page */}
      <div>
        <ContactUs />
      </div>
    </div>
  );
}
>>>>>>> 077f00efc951cba32ff027fd143e98cc0b3c3b13

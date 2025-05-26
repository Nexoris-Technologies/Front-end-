import Tools from "@/components/common/HomePage/Tools/Tool";
import BuiltFor from "@/components/Homepage/BuiltFor/BuiltFor";
import Everything from "@/components/Homepage/Everything to know/Everything";
import Faqs from "@/components/Homepage/Faqs/Faqs";
import Hero from "@/components/Homepage/Herosection/Hero";
import HomeBlogSection from "@/components/Homepage/HomeBlogSection";
import TestimonialCarousel from "@/components/Homepage/OurClients/OurClients";
import Ourprocess from "@/components/Homepage/OurProcess/OurProcess";
import Love from "@/components/Homepage/What you love/Love";
import Startup from "@/components/Homepage/Why start up/Startup";
import { getLatestInsights } from "@/lib/strapi/post";
import { BlogPost } from "@/types/post";

export default async function Home() {
  let posts: BlogPost[] = [];

  try {
    const result = await getLatestInsights(); // Only errors here
    posts = Array.isArray(result) ? result : [];
  } catch (error) {
    console.error("getLatestInsights threw error in page.tsx:", error);
    posts = [];
  }

  return (
    <main className="px-4 md:px-6 lg:px-12 xl:px-20 mt-28 h-full">
      <Hero />

      <Startup />
      <Love />
      <Everything />
      <BuiltFor />
      <Tools />
      <Ourprocess />
      <TestimonialCarousel />
      <HomeBlogSection posts={posts} />
      <Faqs />
    </main>
  );
}

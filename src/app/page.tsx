import BuiltFor from "@/components/Homepage/BuiltFor";
import Everything from "@/components/Homepage/Everything";
import Faqs from "@/components/Homepage/Faqs";
import Hero from "@/components/Homepage/Hero";

import HomeBlogSection from "@/components/Homepage/HomeBlogSection";
import Love from "@/components/Homepage/Love";
import TestimonialCarousel from "@/components/Homepage/OurClients";
import Ourprocess from "@/components/Homepage/OurProcess";
import Startup from "@/components/Homepage/Startup";
import Tools from "@/components/Homepage/Tool";

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
    <main className="">
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

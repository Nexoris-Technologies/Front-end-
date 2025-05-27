import { strapi } from "./client";
import { BlogPost, BlogResponse } from "@/types/post";

export async function getLatestInsights(): Promise<BlogPost[]> {
  const res = await strapi.get<BlogResponse>(
    `/insights?populate=featuredImage&sort=publishedDate:desc&pagination[page]=1&pagination[pageSize]=3`
  );
  return res.data.data;
}

export async function getPaginatedInsights(
  page: number = 1,
  pageSize: number = 12
): Promise<BlogResponse> {
  const res = await strapi.get<BlogResponse>(
    `/insights?populate=featuredImage&sort=publishedDate:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );
  return res.data;
}

export async function getInsightBySlug(slug: string): Promise<BlogPost | null> {
  const res = await strapi.get<BlogResponse>(
    `/insights?filters[slug][$eq]=${slug}&populate=featuredImage,seoMeta,faqs`
  );
  const post = res.data.data[0];
  return post || null;
}

import { BlogPost, BlogResponse } from "@/types/post";
import { safeStrapiGet } from "./safeStrapiGet";

// Fetch latest 3 insights for homepage
export async function getLatestInsights(): Promise<BlogPost[]> {
  const data = await safeStrapiGet<BlogResponse>(
    `/insights?populate=featuredImage&sort=publishedDate:desc&pagination[page]=1&pagination[pageSize]=3`
  );

  if (!data?.data || !Array.isArray(data.data)) {
    return [];
  }

  return data.data.map((post) => {
    const featuredImage = post.featuredImage
      ? {
          ...post.featuredImage,
          url: post.featuredImage.url.startsWith("http")
            ? post.featuredImage.url
            : `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.featuredImage.url}`,
        }
      : null;

    return {
      ...post,
      featuredImage,
    } as BlogPost;
  });
}

// Fetch paginated insights for listing page
export async function getPaginatedInsights(
  page: number = 1,
  pageSize: number = 12
): Promise<BlogResponse> {
  const data = await safeStrapiGet<BlogResponse>(
    `/insights?populate=featuredImage&sort=publishedDate:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );

  if (!data || !Array.isArray(data.data)) {
    return {
      data: [],
      meta: {
        pagination: {
          page,
          pageSize,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }

  const transformedData: BlogPost[] = data.data.map((post) => {
    const featuredImage = post.featuredImage
      ? {
          ...post.featuredImage,
          url: post.featuredImage.url.startsWith("http")
            ? post.featuredImage.url
            : `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.featuredImage.url}`,
        }
      : null;

    return {
      ...post,
      featuredImage,
    } as BlogPost;
  });

  return {
    data: transformedData,
    meta: data.meta || {
      pagination: {
        page,
        pageSize,
        pageCount: 1,
        total: transformedData.length,
      },
    },
  };
}

// Fetch single post by slug
export async function getInsightBySlug(slug: string): Promise<BlogPost | null> {
  const data = await safeStrapiGet<BlogResponse>(
    `/insights?filters[slug][$eq]=${slug}&populate=featuredImage`
  );

  const post = data?.data?.[0];
  if (!post) return null;

  const featuredImage = post.featuredImage
    ? {
        ...post.featuredImage,
        url: post.featuredImage.url.startsWith("http")
          ? post.featuredImage.url
          : `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.featuredImage.url}`,
      }
    : null;

  return {
    ...post,
    featuredImage,
  } as BlogPost;
}

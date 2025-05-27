import { strapi } from "@/lib/strapi/client";

export async function getSingleType<T extends Record<string, unknown>>(
  uid: string,
  populate: string = "*"
): Promise<T | null> {
  try {
    const res = await strapi.get<{ data: T | null }>(
      `/${uid}?populate=${populate}`
    );

    const item = res.data.data;
    if (!item) {
      console.warn(`⚠️ Single-type "${uid}" returned null or empty.`);
      return null;
    }

    // Optional: Normalize image URL if featuredImage exists
    const featuredImage = (item as { featuredImage?: { url?: string } })
      .featuredImage;
    if (featuredImage?.url && !featuredImage.url.startsWith("http")) {
      featuredImage.url = `${process.env.NEXT_PUBLIC_STRAPI_URL}${featuredImage.url}`;
    }

    return item;
  } catch (error) {
    console.error(`getSingleType("${uid}") failed:`, error);
    return null;
  }
}

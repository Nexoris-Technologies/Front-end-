import { strapi } from "../strapi/client";
import axios from "axios";

export async function safeStrapiGet<T>(url: string): Promise<T | null> {
  try {
    const res = await new Promise<{ data: T | null }>((resolve) => {
      strapi
        .get<T>(url)
        .then((response) => resolve(response))
        .catch((err) => {
          if (axios.isAxiosError(err)) {
            console.error("Axios error:", err.message);
          } else {
            console.error("Unknown error:", err);
          }
          resolve({ data: null });
        });
    });

    return res.data;
  } catch (err) {
    console.error("Unexpected fallback error:", err);
    return null;
  }
}

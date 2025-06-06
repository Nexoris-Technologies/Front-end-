import { strapi } from "../strapi/client";
import axios from "axios";

export async function safeStrapiGet<T>(url: string): Promise<T | null> {
  try {
    const response = await strapi.get<T>(url);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Axios error:", err.message);
    } else {
      console.error("Unknown error:", err);
    }
    return null;
  }
}

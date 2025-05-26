import { getSingleType } from "@/lib/singles/strapi";
import { generateStaticPageSchema } from "@/lib/seo/schemaSchema";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;

type PrivacyPolicyType = {
  title: string;
  excerpt?: string;
  content: string;
  featuredImage?: {
    url?: string;
    alternativeText?: string;
  };
  seoMeta?: {
    metaTitle?: string;
    metaDescription?: string;
    noIndex?: boolean;
    noFollow?: boolean;
  };
  faqs?: {
    id: string | number;
    question: string;
    answer: string;
  }[];
  publishedAt?: string;
  updatedAt?: string;
};

// Inject SEO meta into <head>
export async function generateMetadata(): Promise<Metadata> {
  const data = await getSingleType<PrivacyPolicyType>("privacy-policy");
  if (!data) return {};

  const { seoMeta, title, excerpt, featuredImage } = data;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const canonical = `${siteUrl}/privacy-policy`;

  const imageUrl = featuredImage?.url?.startsWith("http")
    ? featuredImage.url
    : `${siteUrl}${featuredImage?.url}`;

  return {
    title: seoMeta?.metaTitle || title,
    description: seoMeta?.metaDescription || excerpt || "",
    alternates: {
      canonical,
    },
    robots: {
      index: seoMeta?.noIndex === false,
      follow: seoMeta?.noFollow !== true,
    },
    openGraph: {
      title: seoMeta?.metaTitle || title,
      description: seoMeta?.metaDescription || excerpt || "",
      url: canonical,
      type: "article",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: featuredImage?.alternativeText || title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seoMeta?.metaTitle || title,
      description: seoMeta?.metaDescription || excerpt || "",
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

// Page Component
export default async function PrivacyPolicyPage() {
  const data = await getSingleType<PrivacyPolicyType>("privacy-policy");
  if (!data) return notFound();

  const { title, content, seoMeta, faqs, publishedAt, updatedAt } = data;

  const breadcrumbs = [
    { name: "Home", href: "/", isCurrentPage: false },
    { name: title, href: "/privacy-policy", isCurrentPage: true },
  ];

  const schema = generateStaticPageSchema({
    pageTitle: seoMeta?.metaTitle || title,
    slug: "privacy-policy",
    description: seoMeta?.metaDescription || "",
    faqs,
    datePublished: publishedAt,
    dateModified: updatedAt,
  });

  type Faq = {
    id: string | number;
    question: string;
    answer: string;
  };

  return (
    <main className="max-w-4xl mx-auto py-10 px-4 mt-22">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className="text-4xl font-bold mb-6">{title}</h1>

      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {Array.isArray(faqs) && faqs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <ul className="space-y-4">
            {(faqs as Faq[]).map((faq) => (
              <li key={faq.id}>
                <details>
                  <summary className="font-medium">{faq.question}</summary>
                  <div
                    className="mt-2 text-gray-700"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </details>
              </li>
            ))}
          </ul>
        </section>
      )}

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </main>
  );
}

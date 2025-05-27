import { getInsightBySlug } from "@/lib/insights/strapi";
import { generateStructuredData } from "@/lib/seo/schema";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const revalidate = 60;

// SAFELY AWAIT params BEFORE USAGE
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getInsightBySlug(slug);
  if (!post) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const canonical = `${siteUrl}/insights/${slug}`;

  const imageUrl = post.featuredImage?.url
    ? post.featuredImage.url.startsWith("http")
      ? post.featuredImage.url
      : `${siteUrl}${post.featuredImage.url}`
    : undefined;

  return {
    title: post.seoMeta?.metaTitle || post.title,
    description: post.seoMeta?.metaDescription || post.excerpt,
    alternates: { canonical },
    robots: {
      index: post.seoMeta?.noIndex === false,
      follow: post.seoMeta?.noFollow !== true,
    },
    openGraph: {
      title: post.seoMeta?.metaTitle || post.title,
      description: post.seoMeta?.metaDescription || post.excerpt,
      url: canonical,
      type: "article",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.featuredImage?.alternativeText || post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoMeta?.metaTitle || post.title,
      description: post.seoMeta?.metaDescription || post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

// PAGE COMPONENT
export default async function InsightPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = await getInsightBySlug(slug);
  if (!post) return notFound();

  const breadcrumbs = [
    { name: "Home", href: "/", isCurrentPage: false },
    { name: "Insights", href: "/insights", isCurrentPage: false },
    { name: post.title, href: `/insights/${post.slug}`, isCurrentPage: true },
  ];

  type Faq = {
    id: string | number;
    question: string;
    answer: string;
  };

  return (
    <main className="max-w-4xl mx-auto py-10 px-4 mt-22">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      {post.featuredImage?.url && (
        <Image
          src={post.featuredImage.url}
          alt={post.featuredImage.alternativeText || "Featured image"}
          width={800}
          height={400}
          className="rounded-md mb-6"
        />
      )}

      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {Array.isArray(post.faqs) && post.faqs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <ul className="space-y-4">
            {(post.faqs as Faq[]).map((faq) => (
              <li key={faq.id}>
                <details>
                  <summary className="font-medium">{faq.question}</summary>
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
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
          __html: JSON.stringify(generateStructuredData(post)),
        }}
      />
    </main>
  );
}

// RESILIENT STATIC PARAMS — handles offline Strapi
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/insights`
    );

    if (!res.ok) {
      console.error("Failed to fetch insights:", res.statusText);
      return [];
    }

    const json: { data: Array<{ slug?: unknown }> } = await res.json();

    return json.data
      .map((post) => post?.slug)
      .filter((slug): slug is string => typeof slug === "string")
      .map((slug) => ({ slug }));
  } catch (error) {
    console.error("generateStaticParams failed:", error);
    return [];
  }
}

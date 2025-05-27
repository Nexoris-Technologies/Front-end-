import { BlogPost } from "@/types/post";

export function generateStructuredData(post: BlogPost) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const canonical = `${siteUrl}/insights/${post.slug}`;
  const isReview = post.schemaType === "review";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": isReview ? "Review" : "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    headline: post.seoMeta?.metaTitle || post.title,
    description: post.seoMeta?.metaDescription || post.excerpt,
    author: {
      "@type": "Person",
      name: "Nexoris Technologies",
    },
    publisher: {
      "@type": "Organization",
      name: "Nexoris Technologies",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`, // Adjust this path to your logo
      },
    },
    datePublished: post.publishedDate,
    dateModified: post.updatedAt,
    ...(isReview && {
      reviewBody: post.excerpt || post.content.slice(0, 160),
    }),
  };

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: `${siteUrl}/insights`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonical,
      },
    ],
  };

  return [articleSchema, faqSchema, breadcrumbSchema].filter(Boolean);
}

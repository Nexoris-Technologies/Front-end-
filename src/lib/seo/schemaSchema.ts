export function generateStaticPageSchema({
  pageTitle,
  slug,
  description,
  faqs = [],
  datePublished,
  dateModified,
}: {
  pageTitle: string;
  slug: string;
  description: string;
  faqs?: { question: string; answer: string }[];
  datePublished?: string;
  dateModified?: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  const canonicalUrl = `${siteUrl}/${slug}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageTitle,
        item: canonicalUrl,
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: canonicalUrl,
    description: description,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    publisher: {
      "@type": "Organization",
      name: "Nexoris Technologies",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return [breadcrumb, webPageSchema, faqSchema].filter(Boolean);
}

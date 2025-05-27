import { getPaginatedInsights } from "@/lib/insights/strapi";
import BlogCard from "@/components/BlogCards";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BlogPost } from "@/types/post";

export default async function InsightsPage() {
  let posts: BlogPost[] = [];

  try {
    const result = await getPaginatedInsights();
    posts = Array.isArray(result?.data) ? result.data : [];
  } catch (error) {
    console.error("Failed to fetch paginated insights:", error);
  }

  const breadcrumbs = [
    { name: "Home", href: "/", isCurrentPage: false },
    { name: "Insights", href: "/insights", isCurrentPage: true },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 mt-22">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className="text-4xl font-bold mb-8">All Insights</h1>
      {posts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No insights available right now.
        </p>
      )}
      {/* Pagination UI can go here if needed */}
    </main>
  );
}

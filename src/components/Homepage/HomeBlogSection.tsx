import { BlogPost } from "../../types/post";
import BlogCard from "../BlogCards";
import Link from "next/link";

type Props = {
  posts: BlogPost[];
};

export default function HomeBlogSection({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-gray-600">No insights available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Insights</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/insights" className="text-blue-600 font-semibold">
            View All Insights →
          </Link>
        </div>
      </div>
    </section>
  );
}

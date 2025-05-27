import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/post";

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  const imageUrl = post.featuredImage?.url
    ? post.featuredImage.url.startsWith("http")
      ? post.featuredImage.url
      : `${process.env.NEXT_PUBLIC_STRAPI_URL}${post.featuredImage.url}`
    : null;

  const altText = post.featuredImage?.alternativeText || post.title;

  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={altText}
          width={600}
          height={300}
          className="w-full h-auto object-cover"
        />
      ) : (
        <div className="w-full h-[300px] bg-gray-100 flex items-center justify-center text-center p-4">
          <span className="text-gray-600 text-sm italic">{altText}</span>
        </div>
      )}

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="my-2 font-semibold">{post.publishedDate}</p>
        <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
        <Link
          href={`/insights/${post.slug}`}
          className="text-blue-600 font-medium"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import BlogClient from "./BlogClient";

const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    author->{
      name
    }
  }
`;

export default async function BlogPage() {
  const data = await client.fetch(POSTS_QUERY);

  const posts = data.map((post) => ({
    id: post._id,
    slug: post.slug?.current,
    image: post.mainImage
      ? urlFor(post.mainImage).width(1200).url()
      : "/fallback.jpg",
    title: post.title,
    subtitle: post.author?.name || "",
    date: post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString("en-AU", {
          month: "short",
          year: "numeric",
        })
      : "",
  }));

  return <BlogClient posts={posts} />;
}
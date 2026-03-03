"use client"; // 1️⃣ Make it a client component

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import BlogClient from "./BlogClient";
import { Spinner } from "@/components/ui/spinner"; // 2️⃣ Import shadcn Spinner

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

export default function BlogPage() {
  const [posts, setPosts] = useState([]);     // 3️⃣ State to hold posts
  const [loading, setLoading] = useState(true); // 3️⃣ State to track loading

  useEffect(() => {
    async function fetchPosts() {
      const data = await client.fetch(POSTS_QUERY);

      const formattedPosts = data.map((post) => ({
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

      setPosts(formattedPosts); // 4️⃣ Update posts state
      setLoading(false);        // 4️⃣ Loading complete
    }

    fetchPosts();
  }, []);

  // 5️⃣ Show spinner while loading
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner className="h-12 w-12 text-blue-500" />
      </div>
    );
  }

  // 6️⃣ Render the blog grid once data is ready
  return <BlogClient posts={posts} />;
}
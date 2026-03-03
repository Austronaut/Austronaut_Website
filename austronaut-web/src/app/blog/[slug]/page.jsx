import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import BlogPostClient from "./BlogPostClient";

const POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    publishedAt,
    body,
    author->{
      name
    }
  }
`;

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, {
    slug,
  });

  if (!post) {
    return <div className="text-white p-10">Post not found.</div>;
  }

  return (
    <BlogPostClient>
      <article
        className="w-full max-w-5xl mx-auto rounded-2xl shadow-lg p-6 md:p-8
        bg-gradient-to-br from-white/0 to-white/0 backdrop-blur-lg border border-white/30"
      >
        {post.mainImage && (
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/20 mb-6">
            <Image
              src={urlFor(post.mainImage).width(1200).url()}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <h1 className="text-3xl font-inter-bold text-gray-200">
          {post.title}
        </h1>

        <p className="mt-2 text-sm font-inter-regular text-gray-300">
          {post.author?.name} ·{" "}
          {new Date(post.publishedAt).toLocaleDateString("en-AU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="mt-8 text-gray-200 leading-relaxed font-inter-regular prose prose-invert max-w-none">
          <PortableText value={post.body} />
        </div>
      </article>
    </BlogPostClient>
  );
}
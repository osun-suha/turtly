import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const APP_STORE_URL =
  "https://apps.apple.com/kr/app/turtly-%ED%95%98%EB%A3%A8-5%EB%B6%84-%EB%AA%85%EC%83%81/id6758706673";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | TURTLY 뉴스레터`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Dark Hero Banner */}
      <section className="bg-mesh-dark pt-28 pb-14 sm:pt-32 sm:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            뉴스레터 목록
          </Link>
          <time className="text-sm text-white/40 block mb-3">{post.date}</time>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-white/60">{post.summary}</p>
        </div>
      </section>

      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.thumbnail}
              alt={post.title}
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:tracking-tight prose-p:text-muted-foreground prose-a:text-brand prose-strong:text-foreground prose-li:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Section */}
        <div className="mt-16 glass-strong rounded-2xl p-8 sm:p-10 border border-border/50">
          <div className="text-center mb-6">
            <Image
              src="/logo.png"
              alt="TURTLY"
              width={36}
              height={36}
              className="mx-auto mb-4 rounded-lg"
            />
            <p className="text-lg font-semibold text-foreground mb-2">
              뇌과학 기반 집중력 훈련앱
            </p>
            <p className="text-muted-foreground">
              터틀리에서 하루 5분 명상을 시작하세요
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-gradient text-white rounded-full px-6 font-semibold w-full sm:w-auto">
                App Store
              </Button>
            </a>
            <Button
              variant="outline"
              className="rounded-full px-6 font-semibold text-muted-foreground cursor-default border-border/50"
              disabled
            >
              Google Play
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}

import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
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
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          뉴스레터 목록
        </Link>

        <header className="mb-10">
          <time className="text-sm text-muted-foreground">{post.date}</time>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground">{post.summary}</p>
        </header>

        <div
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:tracking-tight prose-p:text-muted-foreground prose-a:text-brand prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 glass rounded-2xl p-8 text-center border border-border/50">
          <p className="text-lg font-semibold text-foreground mb-2">
            터틀리 앱에서 직접 훈련해보세요
          </p>
          <p className="text-muted-foreground mb-6">
            하루 5분, 뇌과학 기반 집중력 훈련
          </p>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
            <Button className="btn-gradient text-white rounded-full px-6 font-semibold">
              무료 다운로드
            </Button>
          </a>
        </div>
      </article>
    </div>
  );
}

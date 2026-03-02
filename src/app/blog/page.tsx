import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "뉴스레터 | TURTLY - 집중력과 뇌과학 이야기",
  description:
    "터틀리가 전하는 집중력, 명상, 뇌과학에 대한 유익한 콘텐츠를 만나보세요.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-brand mb-3 tracking-wide uppercase">
            Newsletter
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            집중력과 뇌과학 이야기
          </h1>
          <p className="text-lg text-muted-foreground">
            터틀리가 전하는 집중력, 명상, 뇌과학에 대한 유익한 콘텐츠
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <Image
              src="/logo.png"
              alt=""
              width={48}
              height={48}
              className="mx-auto mb-4 rounded-xl opacity-40"
            />
            <p className="text-lg text-muted-foreground">
              곧 새로운 콘텐츠가 업로드됩니다.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <Card className="glass border-border/50 overflow-hidden hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5 transition-all h-full">
                  <div className="aspect-video bg-gradient-to-br from-brand-50 to-brand-100/50 flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={32}
                      height={32}
                      className="opacity-20 rounded-md"
                    />
                  </div>
                  <CardContent className="p-5 flex flex-col flex-1">
                    <time className="text-xs text-muted-foreground mb-2">
                      {post.date}
                    </time>
                    <h2 className="text-base font-semibold text-foreground group-hover:text-brand transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                      {post.summary}
                    </p>
                    <span className="mt-3 text-sm font-medium text-brand">
                      읽어보기 &rarr;
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { getPostBySlug } from "@/lib/blog";

export const alt = "TURTLY 뉴스레터";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  const title = post?.title ?? "TURTLY 뉴스레터";

  const logoData = readFileSync(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1B5E20 0%, #2E7D32 55%, #43A047 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={64} height={64} alt="TURTLY" style={{ borderRadius: 16 }} />
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>
            TURTLY
          </div>
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 800,
            lineHeight: 1.25,
            letterSpacing: -2,
            display: "flex",
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.7)" }}>
          집중력과 뇌과학 이야기 · 뉴스레터
        </div>
      </div>
    ),
    { ...size }
  );
}

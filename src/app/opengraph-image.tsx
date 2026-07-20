import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "TURTLY - 집중력 훈련 명상 앱";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1B5E20 0%, #2E7D32 55%, #43A047 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={140} height={140} alt="TURTLY" style={{ borderRadius: 32 }} />
        <div style={{ fontSize: 72, fontWeight: 800, marginTop: 40, letterSpacing: -2 }}>
          TURTLY
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 500,
            marginTop: 16,
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
          }}
        >
          산만한 뇌를 위한 집중력 훈련 명상 앱
        </div>
        <div
          style={{
            fontSize: 26,
            marginTop: 28,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          하루 5분, 나만의 속도로
        </div>
      </div>
    ),
    { ...size }
  );
}

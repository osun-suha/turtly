import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://turtly.app"),
  title: "TURTLY | 산만한 뇌를 가진 우리를 위한 집중력 훈련 명상 앱",
  description:
    "느리지만 꾸준히, 나만의 속도로. 하루 5분, 산만한 뇌를 훈련하세요. 뇌과학 기반 12주 집중력 훈련 커리큘럼.",
  keywords: [
    "터틀리",
    "TURTLY",
    "명상앱",
    "집중력",
    "집중력훈련",
    "명상",
    "호흡훈련",
    "ADHD",
    "마음챙김",
    "뇌과학",
  ],
  openGraph: {
    title: "TURTLY | 산만한 뇌를 가진 우리를 위한 집중력 훈련 명상 앱",
    description:
      "느리지만 꾸준히, 나만의 속도로. 하루 5분, 산만한 뇌를 훈련하세요.",
    url: "https://turtly.app",
    siteName: "TURTLY",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TURTLY - 집중력 훈련 명상 앱",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TURTLY | 집중력 훈련 명상 앱",
    description:
      "느리지만 꾸준히, 나만의 속도로. 하루 5분, 산만한 뇌를 훈련하세요.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 네이버 서치어드바이저 사이트 소유확인 */}
        <meta
          name="naver-site-verification"
          content="d87f121d7732103242e06b1ff3bacc937e0fab74"
        />
        {/* GA4 - 측정 ID를 아래 G-XXXXXXXXXX 부분에 넣으세요 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}

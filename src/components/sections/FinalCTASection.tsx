"use client";

import Image from "next/image";
import ScrollAnimator from "@/components/ScrollAnimator";
import { Button } from "@/components/ui/button";
import PhoneMockup from "@/components/PhoneMockup";

const APP_STORE_URL =
  "https://apps.apple.com/kr/app/turtly-%ED%95%98%EB%A3%A8-5%EB%B6%84-%EB%AA%85%EC%83%81/id6758706673";

export default function FinalCTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Dark background with mesh gradient */}
      <div className="absolute inset-0 bg-mesh-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Text */}
        <ScrollAnimator>
          <div className="text-center mb-16">
            <Image
              src="/logo.png"
              alt="TURTLY"
              width={48}
              height={48}
              className="mx-auto mb-6 rounded-xl"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              오늘부터, 나만의 속도로
              <br />
              시작하세요.
            </h2>
            <p className="text-lg text-white/50 mb-10">
              TURTLY와 함께 집중력과 평온함을 되찾으세요
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="btn-gradient text-white rounded-full px-8 h-12 text-base font-semibold"
                >
                  App Store 다운로드
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 text-base font-medium border-white/10 text-white/40 cursor-default hover:bg-transparent bg-transparent"
                disabled
              >
                Google Play 출시 예정
              </Button>
            </div>
          </div>
        </ScrollAnimator>

        {/* App Screenshots */}
        <ScrollAnimator delay={0.2}>
          <div className="flex justify-center items-end gap-4 sm:gap-6">
            <PhoneMockup
              src="/screen-guide.jpeg"
              alt="터틀리 가이드 화면"
              className="w-[110px] sm:w-[150px] lg:w-[160px] translate-y-6"
            />
            <PhoneMockup
              src="/screen-breathing.jpeg"
              alt="터틀리 호흡 훈련"
              className="w-[110px] sm:w-[150px] lg:w-[160px] -translate-y-2"
            />
            <PhoneMockup
              src="/screen-profile.jpeg"
              alt="터틀리 프로필 화면"
              className="w-[110px] sm:w-[150px] lg:w-[160px] translate-y-6"
            />
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

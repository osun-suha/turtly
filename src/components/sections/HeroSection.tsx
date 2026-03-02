"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const APP_STORE_URL =
  "https://apps.apple.com/kr/app/turtly-%ED%95%98%EB%A3%A8-5%EB%B6%84-%EB%AA%85%EC%83%81/id6758706673";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Dark background with mesh gradient */}
      <div className="absolute inset-0 bg-mesh-dark" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-light/8 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark mb-6 text-sm text-white/60"
          >
            <Image
              src="/logo.png"
              alt=""
              width={16}
              height={16}
              className="rounded-sm"
            />
            명상앱 터틀리 TURTLY
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-5 tracking-tight">
            산만한 뇌를 가진
            <br />
            우리를 위한{" "}
            <span className="text-gradient-light">집중력 훈련</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-lg mb-10 leading-relaxed">
            하루 5분, 명상으로 집중을 훈련하세요.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
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
        </motion.div>
      </div>
    </section>
  );
}

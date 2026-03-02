"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimator from "@/components/ScrollAnimator";

const testimonials = [
  {
    text: "감정이 안정되고, 집중력이 오르니 업무 성과도, 인간관계도 좋아졌어요.",
    author: "김○○",
    info: "28세, 직장인",
    gradient: "from-amber-200 via-yellow-100 to-green-200",
  },
  {
    text: "명상에 대한 거부감이 있었는데, 터틀리와 함께하니 쉽고 재밌어요.",
    author: "이○○",
    info: "32세, 프리랜서",
    gradient: "from-green-200 via-emerald-100 to-teal-200",
  },
  {
    text: "아침에 5분 터틀리 하고 출근하면 오전 집중력이 확실히 달라요.",
    author: "박○○",
    info: "26세, 대학원생",
    gradient: "from-sky-200 via-blue-100 to-indigo-200",
  },
  {
    text: "쉽게 포기하는 성향인데, 터틀리는 쉽고 체계적이라 꾸준히 하게돼요.",
    author: "최○○",
    info: "35세, 창업자",
    gradient: "from-violet-200 via-purple-100 to-pink-200",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-amber-500"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div
      className={`bg-gradient-to-br ${testimonial.gradient} rounded-2xl p-6 sm:p-8 flex flex-col justify-between aspect-square`}
    >
      <p className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div>
        <Stars />
        <div className="flex items-center gap-3 mt-2">
          <div className="w-9 h-9 rounded-lg bg-black/10 flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-700"
            >
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {testimonial.author}
            </p>
            <p className="text-xs text-gray-600">{testimonial.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(0);

  const totalDesktopSteps = Math.ceil(testimonials.length / 2);
  const totalMobileSteps = testimonials.length;

  const next = useCallback(() => {
    setDirection(1);
    setDesktopIndex((prev) => (prev + 1) % totalDesktopSteps);
    setMobileIndex((prev) => (prev + 1) % totalMobileSteps);
  }, [totalDesktopSteps, totalMobileSteps]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setDirection(1);
        setDesktopIndex((prev) => (prev + 1) % totalDesktopSteps);
        setMobileIndex((prev) => (prev + 1) % totalMobileSteps);
      } else {
        setDirection(-1);
        setDesktopIndex(
          (prev) => (prev - 1 + totalDesktopSteps) % totalDesktopSteps
        );
        setMobileIndex(
          (prev) => (prev - 1 + totalMobileSteps) % totalMobileSteps
        );
      }
    }
  };

  const goToDesktop = useCallback(
    (index: number) => {
      setDirection(index > desktopIndex ? 1 : -1);
      setDesktopIndex(index);
      setMobileIndex(index * 2);
    },
    [desktopIndex]
  );

  const goToMobile = useCallback(
    (index: number) => {
      setDirection(index > mobileIndex ? 1 : -1);
      setMobileIndex(index);
      setDesktopIndex(Math.floor(index / 2));
    },
    [mobileIndex]
  );

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  const desktopPair = [
    testimonials[desktopIndex * 2],
    testimonials[desktopIndex * 2 + 1],
  ].filter(Boolean);

  return (
    <section className="py-24 sm:py-32 bg-brand-50/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-brand mb-3 tracking-wide uppercase">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              변화를 경험한 분들
            </h2>
            <p className="text-muted-foreground text-lg">
              집중력 부족, 감정기복, 실행력 부족으로 어려움을 겪던 분들의 이야기
            </p>
          </div>
        </ScrollAnimator>

        <ScrollAnimator>
          <div
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Desktop: 2 cards */}
            <div className="hidden sm:block">
              <div className="relative overflow-hidden min-h-[360px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`desktop-${desktopIndex}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.35,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="grid grid-cols-2 gap-5"
                  >
                    {desktopPair.map((t, i) => (
                      <TestimonialCard key={i} testimonial={t} />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-center gap-2 mt-8">
                {Array.from({ length: totalDesktopSteps }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToDesktop(index)}
                    className="group relative p-1"
                    aria-label={`후기 ${index + 1}`}
                  >
                    <div
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === desktopIndex
                          ? "w-6 bg-brand"
                          : "w-1.5 bg-brand/20 group-hover:bg-brand/40"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile: 1 card */}
            <div className="sm:hidden">
              <div className="relative overflow-hidden min-h-[320px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`mobile-${mobileIndex}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.35,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="w-full max-w-[340px] mx-auto"
                  >
                    <TestimonialCard testimonial={testimonials[mobileIndex]} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToMobile(index)}
                    className="group relative p-1"
                    aria-label={`후기 ${index + 1}`}
                  >
                    <div
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === mobileIndex
                          ? "w-6 bg-brand"
                          : "w-1.5 bg-brand/20 group-hover:bg-brand/40"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

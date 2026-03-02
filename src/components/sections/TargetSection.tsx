"use client";

import ScrollAnimator from "@/components/ScrollAnimator";

const targets = [
  "집중력 부족으로 어려움을 겪는 분",
  "감정기복과 불안으로 흔들리는 분",
  "작은 습관도 꾸준한 실행이 어려운 분",
];

export default function TargetSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimator>
          <p className="text-sm font-medium text-brand mb-3 tracking-wide uppercase">
            For you
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-14">
            이런 분들에게 추천합니다
          </h2>
        </ScrollAnimator>

        <div className="space-y-3 max-w-md mx-auto">
          {targets.map((target, index) => (
            <ScrollAnimator key={index} delay={index * 0.1}>
              <div className="flex items-center gap-4 p-4 rounded-xl glass text-left hover:bg-white/80 transition-all">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand" />
                <p className="text-[15px] font-medium text-foreground">
                  {target}
                </p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import { Card, CardContent } from "@/components/ui/card";

const scienceCards = [
  {
    title: "전두엽 피질 두께 증가",
    description:
      "8주 꾸준한 명상 훈련으로 실행 기능과 의사결정을 담당하는 전두엽 피질이 물리적으로 두꺼워집니다.",
  },
  {
    title: "편도체 크기 감소",
    description:
      "명상은 불안과 충동 반응을 담당하는 편도체의 과활성을 줄이고, 감정적 안정을 되찾게 합니다.",
  },
  {
    title: "잡생각의 원인, DMN 과활성 감소",
    description:
      "멍하니 있을 때 후회, 걱정이 자동으로 떠오르는 DMN의 과활성을 낮추고, 지금 이 순간에 집중하는 TPN을 강화합니다.",
  },
  {
    title: "도파민 수용체 민감도 향상",
    description:
      "명상은 도파민 수용체를 민감하게 만들어, 적은 자극으로도 동기와 실행이 가능하게 합니다.",
  },
];

export default function ScienceSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Dark background with mesh gradient */}
      <div className="absolute inset-0 bg-mesh-dark" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-brand-light mb-3 tracking-wide uppercase">
              Science
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              과학이 증명하는 명상의 힘
            </h2>
            <p className="text-brand-lighter/70 text-lg">
              뇌과학 연구가 뒷받침하는 명상의 효과
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {scienceCards.map((card, index) => (
            <ScrollAnimator key={index} delay={index * 0.1}>
              <Card className="glass-dark hover:bg-white/[0.08] transition-all duration-300 h-full border-white/[0.06] hover:border-white/[0.12]">
                <CardContent className="p-6 sm:p-7">
                  <div className="w-2 h-2 rounded-full bg-brand-light mb-5" />
                  <h3 className="text-base font-semibold text-white mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimator>
          ))}
        </div>

        <ScrollAnimator delay={0.5}>
          <div className="mt-12 text-center text-xs text-white/30 max-w-2xl mx-auto space-y-1">
            <p>
              Jon Kabat-Zinn 박사 (MIT/Harvard Medical School), MBSR 프로그램
              창시자
            </p>
            <p>
              Sara Lazar 연구팀 (Harvard), 명상과 뇌 구조 변화 연구
            </p>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

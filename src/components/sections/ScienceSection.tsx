"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import { Card, CardContent } from "@/components/ui/card";

const scienceCards = [
  {
    label: "자기조절력",
    title: "집중 상승, 충동 감소",
    description:
      "명상은 전두엽을 강화해 판단력과 자기 조절 능력을 높여줍니다.",
    source: "Lazar et al., 2005, NeuroReport",
  },
  {
    label: "감정 안정",
    title: "흔들리지 않는 중심",
    description:
      "외부 자극에 과하게 반응하던 편도체가 안정되어 감정 조절이 쉬워집니다.",
    source: "Hölzel et al., 2011, Psychiatry Research",
  },
  {
    label: "잡생각 감소",
    title: "머릿속 소음의 감소",
    description:
      "잡생각이 자동으로 떠오르는 DMN이 조용해지고, 지금 이 순간에 집중하는 TPN이 강화됩니다.",
    source: "Brewer et al., 2011, PNAS",
  },
  {
    label: "실행력 상승",
    title: "내면의 동기 회복",
    description:
      "즉각적 자극에 의존하던 패턴에서 벗어나 내적 동기와 실행력이 회복됩니다.",
    source: "Kjaer et al., 2002, Nature Neuroscience",
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
                  <p className="text-xs font-medium text-brand-light mb-3 tracking-wide">
                    {card.label}
                  </p>
                  <h3 className="text-base font-semibold text-white mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <p className="text-[11px] text-white/25">
                    {card.source}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimator>
          ))}
        </div>

        <ScrollAnimator delay={0.5}>
          <p className="mt-10 text-center text-[11px] text-white/25 max-w-2xl mx-auto leading-relaxed">
            위 내용은 터틀리 앱의 효과를 보증하는 것이 아닌, 명상에 관한 학술 연구 결과입니다. 개인에 따라 효과는 다를 수 있습니다. 이용 중 불편함이 발생할 경우 즉시 중단하시기 바랍니다.
          </p>
        </ScrollAnimator>
      </div>
    </section>
  );
}

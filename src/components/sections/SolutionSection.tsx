"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import { Card, CardContent } from "@/components/ui/card";

const solutions = [
  {
    title: "집중 훈련",
    description:
      "산만한 뇌를 단계별로 훈련하는 12주 커리큘럼. 뇌과학 기반으로 설계된 체계적인 집중 훈련법.",
  },
  {
    title: "호흡 훈련",
    description:
      "박스호흡, 빨대호흡 등 과학적으로 검증된 호흡법. 불안하거나 산만할 때, 즉각적으로 뇌를 안정시킵니다.",
  },
  {
    title: "수면 가이드",
    description:
      "깊은 수면이 뇌 회복의 핵심입니다. 취침 전 요가니드라로 수면의 질을 높이세요.",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 sm:py-32 bg-brand-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-brand mb-3 tracking-wide uppercase">
              Solution
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              당신의 뇌를 위해 설계되었습니다
            </h2>
            <p className="text-muted-foreground text-lg">
              세 가지 핵심 프로그램으로 뇌를 훈련합니다
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {solutions.map((solution, index) => (
            <ScrollAnimator key={index} delay={index * 0.12}>
              <Card className="group bg-white/70 backdrop-blur-sm border-brand-100/60 hover:border-brand/20 transition-all duration-300 hover:shadow-lg hover:shadow-brand/5 h-full">
                <CardContent className="p-7">
                  <div className="w-2 h-2 rounded-full bg-brand mb-5" />
                  <h3 className="text-lg font-semibold text-foreground mb-2.5">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}

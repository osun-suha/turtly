"use client";

import ScrollAnimator from "@/components/ScrollAnimator";

const problems = [
  "해야 할 일은 많은데 도무지 시작을 못 하겠는 날",
  "집중하려고 앉았는데 5분도 안 돼서 딴생각",
  "중요한 일 대신 스마트폰만 만지작거리는 자신",
  "파도치는 감정기복으로 인간관계는 엉망",
  '"나는 왜이러지" 매일 반복되는 자책',
];

export default function ProblemSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <p className="text-sm font-medium text-brand mb-3 tracking-wide uppercase">
            Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-14 tracking-tight">
            혹시 이런 경험, 있지 않나요?
          </h2>
        </ScrollAnimator>

        <div className="space-y-4">
          {problems.map((problem, index) => (
            <ScrollAnimator key={index} delay={index * 0.08}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-brand/40 mt-2.5" />
                <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                  {problem}
                </p>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        <ScrollAnimator delay={0.5}>
          <div className="mt-14">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              이건 의지력의 문제가 아닙니다.
              <br />
              <span className="text-gradient font-semibold">
                당신의 뇌가 도움을 필요로 하고 있는 거예요.
              </span>
            </p>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}

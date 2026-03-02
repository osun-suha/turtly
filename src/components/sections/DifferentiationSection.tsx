"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import { Card, CardContent } from "@/components/ui/card";

const comparisonData = [
  {
    label: "목표",
    general: "스트레스 완화, 수면",
    turtly: "집중력 훈련, 실행력 회복",
  },
  {
    label: "설계",
    general: "일반 사용자",
    turtly: "산만한 뇌에 최적화",
  },
  {
    label: "구조",
    general: "자유 선택",
    turtly: "12주 단계별 커리큘럼",
  },
  {
    label: "접근",
    general: "이완 중심",
    turtly: "전두엽·작업기억·충동조절 직접 접근",
  },
  {
    label: "시간",
    general: "10~30분",
    turtly: "하루 5분부터 시작",
  },
];

export default function DifferentiationSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollAnimator>
            <div>
              <p className="text-sm font-medium text-brand mb-3 tracking-wide uppercase">
                Difference
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6">
                일반 명상앱과는{" "}
                <span className="text-gradient">다릅니다</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Headspace나 Calm 같은 일반 명상앱은 스트레스 완화에는
                  효과적입니다. 하지만 집중력이 유독 어려운 뇌에 최적화되어
                  있지 않습니다.
                </p>
                <p>
                  집중하라는 지시 자체가 부담이 되고, 좋다고 알면서도 시작을
                  못 하는 것이 반복됩니다.
                </p>
                <p>
                  터틀리는 이런 뇌의 특성을 이해하고, 실제로 변화를 경험할 수
                  있도록 설계된{" "}
                  <span className="text-brand font-medium">
                    &apos;집중력 훈련&apos; 시스템
                  </span>
                  입니다.
                </p>
              </div>
            </div>
          </ScrollAnimator>

          {/* Desktop Table */}
          <ScrollAnimator delay={0.15}>
            <Card className="hidden md:block glass border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="p-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        비교
                      </th>
                      <th className="p-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        일반 명상앱
                      </th>
                      <th className="p-4 text-left text-xs font-semibold text-brand uppercase tracking-wider">
                        터틀리
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b border-border/30 last:border-b-0 hover:bg-white/50 transition-colors"
                      >
                        <td className="p-4 text-sm font-medium text-foreground">
                          {row.label}
                        </td>
                        <td className="p-4 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                            {row.general}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-brand font-medium">
                          <span className="inline-flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                            {row.turtly}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3">
              {comparisonData.map((row, index) => (
                <Card key={index} className="glass border-border/50">
                  <CardContent className="p-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      {row.label}
                    </p>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <p className="text-[10px] text-muted-foreground mb-1 uppercase tracking-wider">
                          일반 명상앱
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {row.general}
                        </p>
                      </div>
                      <div className="w-px bg-border/50" />
                      <div className="flex-1">
                        <p className="text-[10px] text-brand mb-1 uppercase tracking-wider">
                          터틀리
                        </p>
                        <p className="text-sm text-brand font-medium">
                          {row.turtly}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  );
}

"use client";

import ScrollAnimator from "@/components/ScrollAnimator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "명상을 한 번도 해본 적 없는데 괜찮을까요?",
    answer:
      "네, 터틀리는 완전 초보를 위해 설계되었습니다. 하루 5분, 호흡부터 시작합니다.",
  },
  {
    question: "하루에 얼마나 해야 효과가 있나요?",
    answer:
      "5분부터 최대 20분이면 충분합니다. 꾸준함이 시간보다 중요합니다.",
  },
  {
    question: "무료로 이용할 수 있나요?",
    answer:
      "기본 기능은 무료입니다. 고급 기능은 구독(월 3,900원 / 연 29,000원)으로 이용 가능합니다.",
  },
  {
    question: "다른 명상앱과 뭐가 다른가요?",
    answer:
      "터틀리는 '집중력 훈련'에 특화되어 있습니다. 산만한 뇌에 맞춘 12주 단계별 커리큘럼이 핵심입니다.",
  },
  {
    question: "Android에서도 사용할 수 있나요?",
    answer:
      "현재 iOS에서만 이용 가능하며, Android 버전 출시 예정입니다.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimator>
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-brand mb-3 tracking-wide uppercase">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              자주 묻는 질문
            </h2>
          </div>
        </ScrollAnimator>

        <ScrollAnimator delay={0.1}>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass border border-border/50 rounded-xl px-5 data-[state=open]:border-brand/20 transition-colors"
              >
                <AccordionTrigger className="text-left text-[15px] font-medium py-4 hover:no-underline hover:text-brand transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimator>
      </div>
    </section>
  );
}

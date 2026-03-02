import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | TURTLY",
  description: "TURTLY 이용약관",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          이용약관
        </h1>
        <p className="text-sm text-muted mb-10">최종 수정일: 2025년 1월</p>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted prose-strong:text-foreground">
          <h2>1. 서비스 이용</h2>
          <p>
            TURTLY 앱은 명상과 호흡 훈련을 제공하는 서비스입니다. 본
            서비스는 의료 행위를 대체하지 않으며, 건강에 관한 전문적인 조언이
            필요한 경우 의료 전문가와 상담하시기 바랍니다.
          </p>

          <h2>2. 사용자의 의무</h2>
          <p>
            사용자는 본 서비스를 법률 및 본 약관에 따라 이용해야 합니다.
            서비스의 부정 이용, 타인의 권리 침해, 서비스 운영 방해 행위는
            금지됩니다.
          </p>

          <h2>3. 지적재산권</h2>
          <p>
            TURTLY 앱의 모든 콘텐츠, 디자인, 기능은 저작권법에 의해
            보호됩니다. 사전 서면 동의 없이 콘텐츠를 복제, 배포, 수정할 수
            없습니다.
          </p>

          <h2>4. 면책조항</h2>
          <p>
            TURTLY는 앱 사용으로 인한 직접적, 간접적 손해에 대해 책임지지
            않습니다. 서비스는 &apos;있는 그대로&apos; 제공되며, 특정 목적에의
            적합성을 보장하지 않습니다.
          </p>

          <h2>5. 약관의 변경</h2>
          <p>
            본 약관은 필요 시 변경될 수 있으며, 변경 시 앱 내 공지를 통해
            안내합니다. 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단할
            수 있습니다.
          </p>

          <h2>6. 문의처</h2>
          <p>
            서비스 이용 관련 문의사항은{" "}
            <a href="mailto:picko.corp@gmail.com" className="text-primary">
              picko.corp@gmail.com
            </a>
            으로 연락해주시기 바랍니다.
          </p>
        </div>
      </div>
    </div>
  );
}

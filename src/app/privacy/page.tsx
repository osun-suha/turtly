import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | TURTLY",
  description: "TURTLY 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          개인정보처리방침
        </h1>
        <p className="text-sm text-muted mb-10">최종 수정일: 2025년 1월</p>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted prose-strong:text-foreground">
          <h2>1. 수집하는 개인정보</h2>
          <p>
            TURTLY는 서비스 제공을 위해 최소한의 정보만 수집합니다. 앱 사용
            시 명상 기록(시간, 별점, 메모)이 기기에 저장되며, 계정 생성 시
            이메일 주소를 수집할 수 있습니다.
          </p>

          <h2>2. 개인정보의 이용 목적</h2>
          <p>
            수집된 정보는 서비스 제공, 사용자 경험 개선, 앱 기능 향상을 위해
            사용됩니다. 수집된 개인정보는 제3자에게 제공되지 않습니다.
          </p>

          <h2>3. 개인정보의 보관 및 파기</h2>
          <p>
            사용자의 명상 기록은 기기에 로컬로 저장됩니다. 계정 삭제 시 모든
            개인정보는 즉시 파기됩니다.
          </p>

          <h2>4. 이용자의 권리</h2>
          <p>
            사용자는 언제든지 자신의 개인정보에 대한 열람, 수정, 삭제를 요청할
            수 있습니다. 관련 문의는 이메일을 통해 접수해주시기 바랍니다.
          </p>

          <h2>5. 문의처</h2>
          <p>
            개인정보 관련 문의사항이 있으시면{" "}
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

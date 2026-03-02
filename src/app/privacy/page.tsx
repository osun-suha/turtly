import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | TURTLY",
  description: "TURTLY 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Dark Header Banner */}
      <div className="bg-mesh-dark pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-light mb-3 tracking-wide uppercase">
            Privacy Policy
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            개인정보처리방침
          </h1>
          <p className="text-sm text-white/40">최종 수정일: 2025년 1월</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              1. 수집하는 개인정보
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              TURTLY는 서비스 제공을 위해 최소한의 정보만 수집합니다. 앱 사용
              시 명상 기록(시간, 별점, 메모)이 기기에 저장되며, 계정 생성 시
              이메일 주소를 수집할 수 있습니다.
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              2. 개인정보의 이용 목적
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              수집된 정보는 서비스 제공, 사용자 경험 개선, 앱 기능 향상을 위해
              사용됩니다. 수집된 개인정보는 제3자에게 제공되지 않습니다.
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              3. 개인정보의 보관 및 파기
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              사용자의 명상 기록은 기기에 로컬로 저장됩니다. 계정 삭제 시 모든
              개인정보는 즉시 파기됩니다.
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              4. 이용자의 권리
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              사용자는 언제든지 자신의 개인정보에 대한 열람, 수정, 삭제를 요청할
              수 있습니다. 관련 문의는 이메일을 통해 접수해주시기 바랍니다.
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              5. 문의처
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              개인정보 관련 문의사항이 있으시면{" "}
              <a
                href="mailto:picko.corp@gmail.com"
                className="text-brand font-medium hover:underline"
              >
                picko.corp@gmail.com
              </a>
              으로 연락해주시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

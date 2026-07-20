import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "계정 삭제 안내 | 터틀리",
  description: "터틀리 앱 계정 및 관련 데이터 삭제 요청 안내",
  alternates: { canonical: "/account-deletion" },
};

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Dark Header Banner */}
      <div className="bg-mesh-dark pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-light mb-3 tracking-wide uppercase">
            Account Deletion
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            계정 삭제 안내
          </h1>
          <p className="text-sm text-white/40">앱 이름: 터틀리 (TURTLY)</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-strong rounded-2xl p-6 sm:p-8 mb-4">
          <p className="text-foreground/70 leading-relaxed">
            터틀리 이용자는 언제든지 본인의 계정과 관련 데이터의 삭제를 요청할 수
            있습니다. 아래 안내에 따라 앱 내에서 직접 계정을 삭제하거나, 이메일로
            삭제를 요청할 수 있습니다.
          </p>
        </div>

        <div className="space-y-4">
          {/* 1. 앱 내 삭제 절차 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              1. 앱에서 계정 삭제하기
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              터틀리 앱에서 다음 순서로 계정을 삭제할 수 있습니다.
            </p>
            <ol className="space-y-2 text-foreground/70 leading-relaxed list-decimal pl-5">
              <li>터틀리 앱을 실행합니다.</li>
              <li>
                홈 화면 우측 상단 메뉴에서{" "}
                <span className="font-medium text-foreground">MY</span> 탭으로
                이동합니다.
              </li>
              <li>
                우측 상단의{" "}
                <span className="font-medium text-foreground">
                  설정(톱니바퀴) 아이콘
                </span>
                을 누릅니다.
              </li>
              <li>
                <span className="font-medium text-foreground">계정삭제</span>를
                누른 뒤 안내에 따라 삭제를 완료합니다.
              </li>
            </ol>
          </div>

          {/* 2. 이메일 요청 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              2. 이메일로 삭제 요청하기
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              앱 내 삭제가 어려운 경우, 가입하신 이메일로{" "}
              <a
                href="mailto:team@turtly.app"
                className="text-brand font-medium hover:underline"
              >
                team@turtly.app
              </a>
              에 계정 삭제를 요청해 주세요. 본인 확인 후 관련 법령에 따라 지체 없이
              처리합니다.
            </p>
          </div>

          {/* 3. 삭제되는 데이터 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              3. 삭제되는 데이터
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              계정 삭제 시 다음 데이터가 삭제됩니다.
            </p>
            <ul className="space-y-1.5 text-foreground/70 leading-relaxed list-disc pl-5">
              <li>회원 정보: 이메일, 닉네임, 사용자 식별자</li>
              <li>온보딩 응답 정보: 성별, 연령대, 명상 경험, 이용 목적, 유입 경로</li>
              <li>
                서비스 이용 정보: 명상 기록, 집중 훈련 기록, 출석 기록, 앱 이용
                이벤트
              </li>
              <li>커뮤니티 정보: 게시글, 댓글, 신고 및 차단 기록</li>
              <li>문의 정보: 이용자가 문의 시 제공한 내용 및 연락처 정보</li>
            </ul>
          </div>

          {/* 4. 보관되는 데이터 및 기간 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              4. 보관되는 데이터 및 보관 기간
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              위 데이터는 계정 삭제 시 원칙적으로 즉시 파기되며, 복구 및 재생이
              어렵도록 삭제합니다. 다만 다음의 경우 일부 데이터는 해당 목적에 필요한
              범위에서 일정 기간 분리하여 보관할 수 있습니다.
            </p>
            <ul className="space-y-1.5 text-foreground/70 leading-relaxed list-disc pl-5 mb-4">
              <li>
                커뮤니티 게시글·댓글: 다른 이용자 보호와 운영정책 위반 대응을 위해
                필요한 범위에서 일정 기간 보관할 수 있습니다.
              </li>
              <li>
                신고·차단 및 부정 이용 대응 기록: 서비스 안전성 확보, 분쟁 대응,
                부정 이용 방지를 위해 필요한 기간 동안 보관할 수 있습니다.
              </li>
              <li>
                문의 기록: 문의 처리 및 분쟁 대응을 위해 필요한 기간 동안 보관할 수
                있습니다.
              </li>
              <li>
                관계 법령에 따라 보관이 필요한 정보: 해당 법령에서 정한 기간 동안
                별도로 분리하여 보관합니다.
              </li>
            </ul>
            <p className="text-foreground/70 leading-relaxed">
              보관 사유가 종료되면 해당 데이터는 지체 없이 파기합니다. 자세한 내용은{" "}
              <a
                href="/privacy"
                className="text-brand font-medium hover:underline"
              >
                개인정보처리방침
              </a>
              에서 확인할 수 있습니다.
            </p>
          </div>

          {/* 5. 문의 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              5. 문의
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              계정 삭제와 관련한 문의는{" "}
              <a
                href="mailto:team@turtly.app"
                className="text-brand font-medium hover:underline"
              >
                team@turtly.app
              </a>
              으로 연락해 주시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

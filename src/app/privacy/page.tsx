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
          <p className="text-sm text-white/40">시행일: 2026년 7월 7일</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-strong rounded-2xl p-6 sm:p-8 mb-4">
          <p className="text-foreground/70 leading-relaxed">
            터틀리는 이용자의 개인정보를 소중히 여기며, 개인정보보호법 등 관련
            법령에 따라 개인정보를 안전하게 처리하기 위해 다음과 같이
            개인정보처리방침을 안내합니다.
          </p>
        </div>

        <div className="space-y-4">
          {/* 1 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              1. 개인정보의 처리 목적
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              터틀리는 다음 목적을 위해 개인정보를 처리합니다. 처리한 개인정보는
              아래 목적 외의 용도로 이용하지 않으며, 이용 목적이 변경되는 경우
              관련 법령에 따라 필요한 조치를 합니다.
            </p>
            <ul className="space-y-1.5 text-foreground/70 leading-relaxed list-disc pl-5">
              <li>회원 식별 및 서비스 제공</li>
              <li>회원가입, 로그인, 계정 관리 및 본인 계정 복구</li>
              <li>온보딩 응답에 기반한 사용자 경험 제공</li>
              <li>명상 기록, 집중 훈련 기록, 출석 기록 저장 및 동기화</li>
              <li>커뮤니티 기능 제공, 게시글·댓글 운영, 신고·차단 처리</li>
              <li>서비스 이용 현황 분석, 오류 확인 및 기능 개선</li>
              <li>고객 문의 응대 및 공지 전달</li>
              <li>부정 이용 방지, 서비스 안전성 확보 및 분쟁 대응</li>
            </ul>
          </div>

          {/* 2 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              2. 처리하는 개인정보 항목
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              터틀리는 서비스 제공에 필요한 범위에서 다음 개인정보를 처리할 수
              있습니다.
            </p>
            <ul className="space-y-1.5 text-foreground/70 leading-relaxed list-disc pl-5 mb-4">
              <li>
                회원 정보: 이메일, 닉네임, 사용자 식별자, 만 14세 이상 확인 여부
                및 확인 시각
              </li>
              <li>
                온보딩 응답 정보: 성별, 연령대, 명상 경험, 이용 목적, 유입 경로
              </li>
              <li>
                서비스 이용 정보: 명상 기록, 집중 훈련 기록, 출석 기록, 앱 이용
                이벤트
              </li>
              <li>커뮤니티 정보: 게시글, 댓글, 신고 및 차단 기록</li>
              <li>문의 정보: 이용자가 문의 시 제공한 내용 및 연락처 정보</li>
              <li>
                자동 생성 정보: 접속 로그, 기기 정보, OS 정보, 앱 버전, 오류 기록
                등 서비스 이용 과정에서 생성되는 정보
              </li>
            </ul>
            <p className="text-foreground/70 leading-relaxed">
              터틀리는 현재 위 항목 외의 개인정보를 처리하지 않습니다. 향후 새로운
              기능 제공으로 처리 항목이 변경되는 경우 개인정보처리방침에 반영하여
              안내합니다.
            </p>
          </div>

          {/* 3 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              3. 만 14세 미만 아동의 개인정보 처리
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              터틀리는 현재 만 14세 미만 아동의 회원가입을 허용하지 않습니다.
              회원가입 시 이용자는 만 14세 이상임을 확인해야 합니다.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              만 14세 미만 아동의 개인정보가 수집된 사실을 확인한 경우, 터틀리는
              해당 계정의 이용을 제한하고 관련 개인정보를 지체 없이 삭제합니다.
              법정대리인 동의 절차가 필요한 서비스는 해당 절차가 준비된 후 별도로
              안내합니다.
            </p>
          </div>

          {/* 4 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              4. 개인정보의 처리 및 보유 기간
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              터틀리는 개인정보를 수집·이용 목적 달성 시까지 보유하며, 목적이
              달성되거나 회원 탈퇴 등 파기 사유가 발생하면 지체 없이 파기합니다.
            </p>
            <ul className="space-y-1.5 text-foreground/70 leading-relaxed list-disc pl-5 mb-4">
              <li>계정 정보: 회원 탈퇴 시까지</li>
              <li>
                명상 기록, 집중 훈련 기록, 출석 기록: 회원 탈퇴 시까지 또는
                이용자가 삭제를 요청할 때까지
              </li>
              <li>
                커뮤니티 게시글·댓글: 게시글·댓글 삭제 또는 회원 탈퇴 시까지. 단,
                다른 이용자 보호와 운영정책 위반 대응을 위해 필요한 범위에서는
                관련 기록을 일정 기간 보관할 수 있습니다.
              </li>
              <li>
                신고·차단 및 부정 이용 대응 기록: 서비스 안전성 확보, 분쟁 대응,
                부정 이용 방지를 위해 필요한 기간
              </li>
              <li>문의 기록: 문의 처리 및 분쟁 대응을 위해 필요한 기간</li>
            </ul>
            <p className="text-foreground/70 leading-relaxed">
              관계 법령에 따라 보관이 필요한 정보는 해당 법령에서 정한 기간 동안
              보관할 수 있습니다.
            </p>
          </div>

          {/* 4 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              5. 개인정보의 제3자 제공
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              터틀리는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만
              이용자의 별도 동의가 있거나 법령에 따라 필요한 경우에는 예외로
              합니다.
            </p>
          </div>

          {/* 5 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              6. 개인정보 처리의 위탁
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              터틀리는 원활한 서비스 제공을 위해 개인정보 처리 업무의 일부를 외부
              서비스에 위탁합니다. 위탁계약 또는 서비스 이용 조건에 따라 개인정보가
              안전하게 처리되도록 필요한 사항을 확인하고 관리합니다.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-3">
              현재 이용 중인 주요 수탁자는 다음과 같습니다.
            </p>
            <div className="space-y-4 mb-4">
              <div>
                <p className="font-medium text-foreground mb-1.5">Supabase</p>
                <ul className="space-y-1 text-foreground/70 leading-relaxed list-disc pl-5">
                  <li>
                    위탁 업무: 회원가입 및 로그인, 인증 이메일 발송, 데이터베이스
                    저장, 서비스 데이터 관리, 계정 삭제 처리
                  </li>
                  <li>
                    처리 항목: 이메일, 닉네임, 사용자 식별자, 온보딩 응답, 서비스
                    이용 기록, 명상 기록, 집중 훈련 기록, 출석 기록, 커뮤니티
                    게시글·댓글·신고·차단 기록
                  </li>
                  <li>
                    보유 및 이용 기간: 회원 탈퇴 또는 위탁계약 종료 시까지
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1.5">PostHog</p>
                <ul className="space-y-1 text-foreground/70 leading-relaxed list-disc pl-5">
                  <li>
                    위탁 업무: 서비스 이용 분석, 이벤트 분석, 오류 확인 및 기능
                    개선
                  </li>
                  <li>
                    처리 항목: 사용자 식별자, 앱 이용 이벤트, 기기 및 접속 환경
                    정보
                  </li>
                  <li>
                    보유 및 이용 기간: 서비스 이용 목적 달성 또는 위탁계약 종료
                    시까지
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              향후 새로운 외부 서비스를 이용하게 되는 경우, 해당 내용은
              개인정보처리방침에 반영하여 안내합니다.
            </p>
          </div>

          {/* 6 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              7. 개인정보의 파기 절차 및 방법
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              터틀리는 개인정보 보유 기간이 지나거나 처리 목적이 달성되어
              개인정보가 불필요하게 되었을 때 지체 없이 파기합니다.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              전자적 파일 형태의 개인정보는 복구 및 재생이 어렵도록 삭제하며, 종이
              문서가 있는 경우 분쇄 또는 이에 준하는 방법으로 파기합니다. 다만 관계
              법령에 따라 보관이 필요한 정보는 해당 기간 동안 별도로 분리하여
              보관할 수 있습니다.
            </p>
          </div>

          {/* 7 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              8. 이용자의 권리와 행사 방법
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              이용자는 언제든지 본인의 개인정보에 대해 열람, 정정, 삭제,
              처리정지를 요청할 수 있습니다.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-4">
              요청은 앱 내 설정 또는 이메일 문의를 통해 할 수 있으며, 터틀리는
              관련 법령에 따라 지체 없이 조치합니다. 다만 법령상 보관 의무가 있거나
              다른 이용자의 권리 보호, 서비스 안전성 확보를 위해 필요한 경우에는
              요청 처리가 제한될 수 있습니다.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              문의:{" "}
              <a
                href="mailto:linings.biz@gmail.com"
                className="text-brand font-medium hover:underline"
              >
                linings.biz@gmail.com
              </a>
            </p>
          </div>

          {/* 8 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              9. 개인정보의 안전성 확보 조치
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              터틀리는 개인정보 보호를 위해 다음과 같은 조치를 합니다.
            </p>
            <ul className="space-y-1.5 text-foreground/70 leading-relaxed list-disc pl-5">
              <li>개인정보 접근 권한 관리</li>
              <li>인증 정보 및 계정 정보 보호</li>
              <li>전송 구간 암호화 등 보안 조치</li>
              <li>데이터 접근 제한 및 서비스 권한 관리</li>
              <li>오류와 부정 이용을 확인하기 위한 최소한의 기록 관리</li>
            </ul>
          </div>

          {/* 9 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              10. 앱 접근권한
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              터틀리는 서비스 제공에 필요한 경우 앱 접근권한을 요청할 수 있습니다.
              사용하지 않는 권한은 요청하지 않으며, 이용자는 기기 설정에서
              접근권한을 변경할 수 있습니다.
            </p>
            <ul className="space-y-1.5 text-foreground/70 leading-relaxed list-disc pl-5">
              <li>
                알림(선택): 명상 타이머 종료를 알리기 위해 사용합니다. 화면이 꺼져
                있거나 앱이 백그라운드 상태일 때도 설정한 시간이 끝나면 알림으로
                안내합니다. 알림 권한을 허용하지 않으면 화면이 꺼지거나 다른 앱을
                사용하는 동안에는 타이머 종료음이 제때 울리지 않을 수 있습니다.
                권한은 기기 설정 또는 앱 내 알림설정에서 언제든 변경할 수 있습니다.
              </li>
            </ul>
          </div>

          {/* 10 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              11. 개인정보 보호책임자
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-2">
              개인정보 보호책임자: 권유나
            </p>
            <p className="text-foreground/70 leading-relaxed mb-4">
              이메일:{" "}
              <a
                href="mailto:linings.biz@gmail.com"
                className="text-brand font-medium hover:underline"
              >
                linings.biz@gmail.com
              </a>
            </p>
            <p className="text-foreground/70 leading-relaxed">
              개인정보 처리와 관련한 문의, 열람·정정·삭제·처리정지 요청, 불편사항은
              위 연락처로 문의할 수 있습니다.
            </p>
          </div>

          {/* 11 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              12. 권익침해 구제 방법
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              이용자는 개인정보 침해에 대한 상담이나 분쟁 해결이 필요한 경우
              개인정보분쟁조정위원회, 개인정보침해신고센터 등 관련 기관에 문의할 수
              있습니다.
            </p>
          </div>

          {/* 12 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              13. 개인정보처리방침의 변경
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              본 개인정보처리방침은 관련 법령 또는 서비스 변경에 따라 수정될 수
              있습니다. 변경 시 서비스 내 공지 또는 적절한 방법으로 안내합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

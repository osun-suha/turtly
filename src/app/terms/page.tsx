import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | TURTLY",
  description: "TURTLY 이용약관",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Dark Header Banner */}
      <div className="bg-mesh-dark pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-brand-light mb-3 tracking-wide uppercase">
            Terms of Service
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            이용약관
          </h1>
          <p className="text-sm text-white/40">시행일: 2026년 7월 7일</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {/* 1 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              1. 목적
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              본 약관은 터틀리 서비스 이용과 관련하여 서비스 제공자와 이용자의
              권리와 의무를 정합니다.
            </p>
          </div>

          {/* 2 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              2. 서비스 내용
            </h2>
            <div className="space-y-3 text-foreground/70 leading-relaxed">
              <p>
                터틀리는 명상, 호흡, 이완, 집중 훈련을 돕기 위한 웰니스 서비스를
                제공합니다.
              </p>
              <p>
                서비스는 명상 타이머, 명상 기록, 집중 훈련 콘텐츠, 커뮤니티 등으로
                구성될 수 있으며, 제공되는 기능은 서비스 운영 상황에 따라 변경될 수
                있습니다.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              3. 이용 연령
            </h2>
            <div className="space-y-3 text-foreground/70 leading-relaxed">
              <p>
                터틀리는 현재 만 14세 이상 이용자만 회원가입할 수 있습니다.
              </p>
              <p>
                만 14세 미만 아동은 법정대리인 동의 절차가 준비되기 전까지
                회원가입 및 계정 기반 서비스를 이용할 수 없습니다. 만 14세 미만
                가입 사실이 확인되는 경우 터틀리는 해당 계정의 이용을 제한하거나
                관련 개인정보를 삭제할 수 있습니다.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              4. 이용자의 의무
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              이용자는 다음 행위를 해서는 안 됩니다.
            </p>
            <ul className="space-y-1.5 text-foreground/70 leading-relaxed list-disc pl-5">
              <li>타인의 정보를 무단으로 사용하는 행위</li>
              <li>서비스 운영을 방해하는 행위</li>
              <li>불법적이거나 부적절한 내용을 입력하거나 게시하는 행위</li>
              <li>타인을 비방, 위협, 괴롭히거나 혐오 표현을 게시하는 행위</li>
              <li>서비스 콘텐츠를 무단 복제, 배포, 판매하는 행위</li>
              <li>관련 법령을 위반하는 행위</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              5. 커뮤니티 이용
            </h2>
            <div className="space-y-3 text-foreground/70 leading-relaxed">
              <p>
                이용자가 커뮤니티에 게시한 내용은 다른 이용자에게 공개될 수
                있습니다. 이용자는 개인정보나 민감한 정보를 공개하지 않도록 주의해야
                합니다.
              </p>
              <p>
                운영자는 커뮤니티 운영정책을 위반한 게시글 또는 댓글에 대해 숨김,
                삭제, 이용 제한 등의 조치를 할 수 있습니다.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              6. 지식재산권
            </h2>
            <div className="space-y-3 text-foreground/70 leading-relaxed">
              <p>
                서비스 내 콘텐츠와 기능에 대한 권리는 터틀리 또는 정당한 권리자에게
                있습니다.
              </p>
              <p>이용자는 이를 무단으로 복제, 배포, 판매할 수 없습니다.</p>
            </div>
          </div>

          {/* 6 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              7. 웰니스 서비스 고지
            </h2>
            <div className="space-y-3 text-foreground/70 leading-relaxed">
              <p>
                터틀리는 명상, 호흡, 이완, 집중 훈련을 돕기 위한 웰니스 서비스입니다.
              </p>
              <p>
                터틀리에서 제공하는 콘텐츠는 의학적 조언, 진단, 치료, 처방 또는
                전문 상담을 대체하지 않습니다. 신체적·정신적 건강 문제가 있거나 명상
                중 불편함을 느끼는 경우 이용을 중단하고 의사, 상담사 등 전문가와
                상담해 주세요.
              </p>
            </div>
          </div>

          {/* 7 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              8. 서비스 변경 및 중단
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              터틀리는 운영상 필요에 따라 서비스의 전부 또는 일부를 변경하거나
              중단할 수 있습니다.
            </p>
          </div>

          {/* 8 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              9. 책임의 제한
            </h2>
            <div className="space-y-3 text-foreground/70 leading-relaxed">
              <p>
                터틀리는 서비스 이용으로 인한 특정 효과나 결과를 보장하지 않습니다.
              </p>
              <p>이용자는 자신의 판단과 책임에 따라 서비스를 이용합니다.</p>
            </div>
          </div>

          {/* 9 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              10. 약관 변경
            </h2>
            <div className="space-y-3 text-foreground/70 leading-relaxed">
              <p>
                본 약관은 관련 법령 또는 서비스 운영 정책에 따라 변경될 수 있습니다.
              </p>
              <p>변경 시 서비스 내 공지 또는 적절한 방법으로 안내합니다.</p>
            </div>
          </div>

          {/* 10 */}
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              11. 문의
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              <a
                href="mailto:linings.biz@gmail.com"
                className="text-brand font-medium hover:underline"
              >
                linings.biz@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

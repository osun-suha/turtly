import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="TURTLY"
                width={24}
                height={24}
                className="rounded-md"
              />
              <span className="text-base font-bold tracking-tight">
                TURTLY
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              느리지만 꾸준히, 나만의 속도로.
              <br />
              산만한 뇌를 위한 집중력 훈련 명상 앱.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              바로가기
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  뉴스레터
                </Link>
              </li>
              <li>
                <a
                  href="https://open.kakao.com/o/gTp5u8ii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  카카오톡 문의
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              정보
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  이용약관
                </Link>
              </li>
              <li>
                <a
                  href="mailto:picko.corp@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  picko.corp@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 TURTLY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

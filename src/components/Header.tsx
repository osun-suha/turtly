"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const APP_STORE_URL =
  "https://apps.apple.com/kr/app/turtly-%ED%95%98%EB%A3%A8-5%EB%B6%84-%EB%AA%85%EC%83%81/id6758706673";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showStoreMenu, setShowStoreMenu] = useState(false);
  const pathname = usePathname();

  const hasDarkHero = pathname === "/" || pathname === "/privacy" || pathname === "/terms";
  const useWhiteText = hasDarkHero && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!showStoreMenu) return;
    const close = () => setShowStoreMenu(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [showStoreMenu]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="TURTLY"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${useWhiteText ? "text-white" : "text-foreground"}`}>
              TURTLY
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-2 text-sm transition-colors rounded-lg ${useWhiteText ? "text-white/70 hover:text-white hover:bg-white/[0.08]" : "text-muted-foreground hover:text-foreground hover:bg-black/[0.04]"}`}
            >
              홈
            </Link>
            <Link
              href="/blog"
              className={`px-3 py-2 text-sm transition-colors rounded-lg ${useWhiteText ? "text-white/70 hover:text-white hover:bg-white/[0.08]" : "text-muted-foreground hover:text-foreground hover:bg-black/[0.04]"}`}
            >
              뉴스레터
            </Link>
            <a
              href="https://open.kakao.com/o/gTp5u8ii"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 text-sm transition-colors rounded-lg inline-flex items-center gap-1 ${useWhiteText ? "text-white/70 hover:text-white hover:bg-white/[0.08]" : "text-muted-foreground hover:text-foreground hover:bg-black/[0.04]"}`}
            >
              고객문의
              <ArrowUpRight size={12} className="opacity-50" />
            </a>
            <div className={`w-px h-5 mx-2 ${useWhiteText ? "bg-white/20" : "bg-border"}`} />
            <div className="relative">
              <Button
                size="sm"
                className="btn-gradient text-white rounded-full px-5 font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowStoreMenu(!showStoreMenu);
                }}
              >
                다운로드
              </Button>
              {showStoreMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 glass-strong rounded-xl shadow-lg border border-border/50 overflow-hidden">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-black/[0.04] transition-colors"
                  >
                    App Store (iOS)
                  </a>
                  <div className="border-t border-border/30" />
                  <span className="block px-4 py-3 text-sm text-muted-foreground cursor-default">
                    Google Play (출시 예정)
                  </span>
                </div>
              )}
            </div>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <div className="relative">
              <Button
                size="sm"
                className="btn-gradient text-white rounded-full px-4 text-xs font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowStoreMenu(!showStoreMenu);
                }}
              >
                다운로드
              </Button>
              {showStoreMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 glass-strong rounded-xl shadow-lg border border-border/50 overflow-hidden">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-black/[0.04] transition-colors"
                  >
                    App Store (iOS)
                  </a>
                  <div className="border-t border-border/30" />
                  <span className="block px-4 py-3 text-sm text-muted-foreground cursor-default">
                    Google Play (출시 예정)
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${useWhiteText ? "text-white/70 hover:text-white hover:bg-white/[0.08]" : "text-muted-foreground hover:text-foreground hover:bg-black/[0.04]"}`}
              aria-label="메뉴"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-strong border-t border-border/50">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-black/[0.04]"
              onClick={() => setIsOpen(false)}
            >
              홈
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-black/[0.04]"
              onClick={() => setIsOpen(false)}
            >
              뉴스레터
            </Link>
            <a
              href="https://open.kakao.com/o/gTp5u8ii"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2.5 text-sm font-medium text-foreground rounded-lg hover:bg-black/[0.04]"
            >
              고객문의
              <ArrowUpRight size={12} className="opacity-50" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

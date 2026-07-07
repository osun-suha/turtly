"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden glass-strong px-4 py-3 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2">
        <Button
          asChild
          className="btn-gradient flex-1 rounded-xl h-12 text-base font-semibold text-white"
        >
          <a
            href="https://apps.apple.com/kr/app/id6782556380"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Store
          </a>
        </Button>
        <Button
          variant="outline"
          className="flex-1 rounded-xl h-12 text-base font-semibold text-muted-foreground border-border/50"
          disabled
        >
          Google Play 출시 예정
        </Button>
      </div>
    </div>
  );
}

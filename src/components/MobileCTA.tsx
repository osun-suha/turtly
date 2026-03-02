"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const APP_STORE_URL =
  "https://apps.apple.com/kr/app/turtly-%ED%95%98%EB%A3%A8-5%EB%B6%84-%EB%AA%85%EC%83%81/id6758706673";

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
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button className="w-full btn-gradient text-white rounded-xl h-12 text-base font-semibold">
            App Store
          </Button>
        </a>
        <Button
          variant="outline"
          className="flex-1 rounded-xl h-12 text-base font-semibold text-muted-foreground border-border/50"
          disabled
        >
          Google Play
        </Button>
      </div>
    </div>
  );
}

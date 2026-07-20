import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ScienceSection from "@/components/sections/ScienceSection";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://turtly.app/#organization",
      name: "TURTLY",
      url: "https://turtly.app",
      logo: "https://turtly.app/logo.png",
      email: "team@turtly.app",
    },
    {
      "@type": "WebSite",
      "@id": "https://turtly.app/#website",
      url: "https://turtly.app",
      name: "TURTLY",
      description:
        "산만한 뇌를 가진 우리를 위한 집중력 훈련 명상 앱",
      publisher: { "@id": "https://turtly.app/#organization" },
      inLanguage: "ko-KR",
    },
    {
      "@type": "MobileApplication",
      name: "터틀리 (TURTLY)",
      operatingSystem: "iOS",
      applicationCategory: "HealthApplication",
      description:
        "하루 5분, 산만한 뇌를 훈련하는 뇌과학 기반 집중력 훈련 명상 앱",
      offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
      downloadUrl: "https://apps.apple.com/kr/app/id6782556380",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ScienceSection />
      <DifferentiationSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}

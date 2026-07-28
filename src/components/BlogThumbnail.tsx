// 블로그 썸네일 자동 생성 컴포넌트.
// thumbnail 이미지 파일 없이 글 제목만으로 브랜드 톤 SVG 썸네일을 렌더링한다.
// 새 글을 추가할 때 이미지 파일을 만들 필요가 없다.

interface BlogThumbnailProps {
  title: string;
  className?: string;
}

// 제목을 최대 폭 기준으로 줄바꿈(대략적인 글자 폭 계산, 한글/영문 혼용 대응)
function wrapTitle(title: string, maxCharsPerLine = 16, maxLines = 3): string[] {
  const words = title.split(" ");
  const lines: string[] = [];
  let current = "";

  const width = (s: string) =>
    // 한글·전각은 1, 영문·숫자·공백은 0.55로 근사
    [...s].reduce((w, ch) => w + (/[\x00-\x7F]/.test(ch) ? 0.55 : 1), 0);

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (width(candidate) > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);

  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1].replace(/\s*\S*$/, "…");
    return kept;
  }
  return lines;
}

export default function BlogThumbnail({ title, className }: BlogThumbnailProps) {
  const lines = wrapTitle(title);
  const lineHeight = 42;
  const startY = 225 - ((lines.length - 1) * lineHeight) / 2;

  return (
    <svg
      viewBox="0 0 800 450"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id="bt-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F1A0F" />
          <stop offset="100%" stopColor="#1B5E20" />
        </linearGradient>
        <radialGradient id="bt-glow" cx="50%" cy="35%" r="55%">
          <stop offset="0%" stopColor="rgba(67,160,71,0.28)" />
          <stop offset="100%" stopColor="rgba(67,160,71,0)" />
        </radialGradient>
      </defs>

      <rect width="800" height="450" fill="url(#bt-bg)" />
      <rect width="800" height="450" fill="url(#bt-glow)" />

      {/* 명상 모티브: 은은한 동심원 (우상단) */}
      <g opacity="0.9">
        <circle cx="650" cy="110" r="95" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
        <circle cx="650" cy="110" r="62" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" />
        <circle cx="650" cy="110" r="30" fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1.5" />
        <circle cx="650" cy="110" r="7" fill="rgba(102,187,106,0.55)" />
      </g>

      {/* 브랜드 라벨 */}
      <text
        x="60"
        y="90"
        fill="rgba(102,187,106,0.85)"
        fontFamily="sans-serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="2"
      >
        TURTLY · 뉴스레터
      </text>

      {/* 제목 */}
      <text
        x="60"
        y={startY}
        fill="#ffffff"
        fontFamily="sans-serif"
        fontSize="34"
        fontWeight="700"
      >
        {lines.map((line, i) => (
          <tspan key={i} x="60" dy={i === 0 ? 0 : lineHeight}>
            {line}
          </tspan>
        ))}
      </text>

      {/* 하단 강조선 */}
      <rect x="60" y="380" width="64" height="4" rx="2" fill="rgba(102,187,106,0.8)" />
    </svg>
  );
}

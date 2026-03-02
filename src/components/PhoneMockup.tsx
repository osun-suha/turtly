import Image from "next/image";

export default function PhoneMockup({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
        <Image
          src={src}
          alt={alt}
          width={390}
          height={844}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}

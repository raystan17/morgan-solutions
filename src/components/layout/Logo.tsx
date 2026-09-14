import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "light",
  size = "header",
}: {
  tone?: "light" | "dark";
  size?: "header" | "hero" | "footer" | "quote";
}) {
  const sizes = {
    header: { className: "h-14 w-auto sm:h-16", width: 220, height: 64 },
    footer: { className: "h-16 w-auto", width: 220, height: 72 },
    quote: { className: "h-28 w-auto max-w-full sm:h-32", width: 480, height: 160 },
    hero: { className: "h-auto w-full max-w-md", width: 1024, height: 682 },
  } as const;
  const s = sizes[size];

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center",
        size === "hero" && "pointer-events-none",
      )}
      aria-label="Morgan Exterior Solutions — home"
      tabIndex={size === "hero" ? -1 : undefined}
    >
      <Image
        src="/logo.png"
        alt="Morgan Exterior Solutions — Brandon MB"
        width={s.width}
        height={s.height}
        className={cn(s.className, "object-contain object-left")}
        style={{ width: "auto", height: size === "hero" ? "auto" : undefined }}
        priority={size !== "footer"}
      />
    </Link>
  );
}

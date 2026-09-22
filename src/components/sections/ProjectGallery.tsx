"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { galleryImages } from "@/lib/gallery";
import { cn } from "@/lib/utils";

const TOTAL = galleryImages.length;
const AUTO_MS = 5500;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

function GalleryLogoMark({ compact }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-3 top-3 z-[15] sm:left-5 sm:top-5",
        compact && "left-1 top-1 sm:left-1.5 sm:top-1.5",
      )}
      aria-hidden
    >
      <Image
        src="/logo.png"
        alt=""
        width={160}
        height={106}
        className={cn(
          "w-auto opacity-[0.48] drop-shadow-[0_1px_4px_rgb(0_0_0/0.35)]",
          compact ? "h-4" : "h-7 sm:h-9",
        )}
      />
    </div>
  );
}

export function ProjectGallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const thumbStripRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const go = useCallback((delta: number) => {
    setIndex((i) => mod(i + delta, TOTAL));
    setProgress(0);
  }, []);

  const goTo = useCallback((i: number) => {
    setIndex(mod(i, TOTAL));
    setProgress(0);
  }, []);

  useEffect(() => {
    const strip = thumbStripRef.current;
    const thumb = strip?.querySelector<HTMLElement>(`[data-thumb="${index}"]`);
    if (!strip || !thumb) return;
    const target =
      thumb.offsetLeft - strip.clientWidth / 2 + thumb.offsetWidth / 2;
    strip.scrollTo({
      left: target,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [index, reducedMotion]);

  useEffect(() => {
    if (window.location.hash !== "#gallery") return;
    const section = document.getElementById("gallery");
    section?.scrollIntoView({ behavior: "auto", block: "start" });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const tick = 50;
    const id = window.setInterval(() => {
      setProgress((p) => {
        const next = p + tick / AUTO_MS;
        if (next >= 1) {
          setIndex((i) => mod(i + 1, TOTAL));
          return 0;
        }
        return next;
      });
    }, tick);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, index]);

  return (
    <section
      id="gallery"
      className="relative scroll-mt-28 overflow-hidden bg-white py-20 sm:py-28"
      aria-roledescription="carousel"
      aria-label="Project photo gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 size-[28rem] rounded-full bg-accent/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-navy-900/5 blur-[90px]"
        aria-hidden
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Our work"
          title="Real projects. Real results."
          intro="A look at recent exterior jobs across Brandon and the surrounding area — pressure washing, decks, fences, landscaping, and more."
        />

        <div className="mt-12 lg:mt-14">
          <div className="relative mx-auto max-w-5xl">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-accent/25 via-navy-900/5 to-accent/15 blur-2xl sm:-inset-4"
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-navy-900/10 bg-navy-950 shadow-[0_32px_64px_-24px_rgb(7_26_51/0.35)]">
              <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                {galleryImages.map((img, i) => (
                  <div
                    key={img.src}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-700 ease-out",
                      i === index ? "opacity-100 z-10" : "opacity-0 z-0",
                    )}
                    aria-hidden={i !== index}
                  >
                    <Image
                      src={img.src}
                      alt={i === index ? img.alt : ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 896px"
                      priority={i === 0}
                      quality={90}
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-[42%] bg-linear-to-t from-navy-950/80 via-navy-950/25 to-transparent"
                      aria-hidden
                    />
                    <GalleryLogoMark />
                  </div>
                ))}

                <div className="absolute inset-x-0 bottom-0 z-20 flex flex-wrap items-end justify-between gap-4 p-5 sm:p-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      Project gallery
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">
                      {String(index + 1).padStart(2, "0")}{" "}
                      <span className="text-white/40">/</span>{" "}
                      {String(TOTAL).padStart(2, "0")}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:border-white/40 hover:bg-white/20"
                      aria-label="Previous photo"
                    >
                      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:border-white/40 hover:bg-white/20"
                      aria-label="Next photo"
                    >
                      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                {!reducedMotion ? (
                  <div
                    className="absolute inset-x-0 bottom-0 z-30 h-0.5 bg-white/15"
                    aria-hidden
                  >
                    <div
                      className="h-full bg-accent transition-[width] duration-75 ease-linear"
                      style={{ width: `${Math.min(progress, 1) * 100}%` }}
                    />
                  </div>
                ) : null}
              </div>

              <div className="border-t border-white/10 bg-navy-950/95 px-3 py-4 sm:px-4">
                <div
                  ref={thumbStripRef}
                  className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  role="tablist"
                  aria-label="Choose a photo"
                >
                  {galleryImages.map((img, i) => (
                    <button
                      key={img.src}
                      type="button"
                      role="tab"
                      data-thumb={i}
                      aria-selected={i === index}
                      aria-label={`View photo ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={cn(
                        "relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24",
                        i === index
                          ? "border-accent ring-2 ring-accent/40 ring-offset-2 ring-offset-navy-950"
                          : "border-white/10 opacity-70 hover:border-white/30 hover:opacity-100",
                      )}
                    >
                      <Image
                        src={img.src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                      <GalleryLogoMark compact />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-slate-soft">
              Use arrow keys or swipe the thumbnails · Hover to pause slideshow
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

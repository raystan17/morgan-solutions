import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site, telHref } from "@/lib/site";

const stats = [
  { value: "5.0★", label: "Google rating" },
  { value: "24/7", label: "Call anytime" },
  { value: "Home + shop", label: "Residential & commercial" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
      <div
        className="absolute -right-32 -top-32 size-[34rem] rounded-full bg-accent/25 blur-[120px] animate-float-slow"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-24 size-[30rem] rounded-full bg-navy-700/60 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute right-10 top-24 size-64 rounded-full bg-leaf/10 blur-[90px]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-navy-950/0 via-navy-950/20 to-navy-950"
        aria-hidden
      />

      <Container className="relative pt-16 pb-20 sm:pt-20 sm:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div className="max-w-2xl">
            <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              Locally owned · {site.serviceArea}
            </p>

            <h1
              className="animate-fade-up mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              Exterior work that{" "}
              <span className="text-gradient">shows from the street</span>.
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/70"
              style={{ animationDelay: "160ms" }}
            >
              {site.intro}
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "240ms" }}
            >
              <ButtonLink href="/quote" variant="primary" className="px-8">
                Request a Quote
              </ButtonLink>
              <ButtonLink href="/#services" variant="ghost" className="px-8">
                Our Services
              </ButtonLink>
              <a
                href={telHref(site.phone)}
                className="mt-1 text-sm font-medium text-white/70 transition hover:text-white sm:ml-2"
              >
                or call {site.phone}
              </a>
            </div>

            <dl
              className="animate-fade-up mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
              style={{ animationDelay: "320ms" }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-white/55">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="animate-fade-up relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end"
            style={{ animationDelay: "180ms" }}
          >
            <div
              className="absolute -inset-6 rounded-[2rem] bg-accent/20 blur-2xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-white p-4 shadow-[0_40px_80px_-30px_rgb(7_26_51/0.8)] sm:p-6">
              <Image
                src="/logo.png"
                alt="Morgan Exterior Solutions logo"
                width={1024}
                height={682}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="relative h-10 overflow-hidden text-white" aria-hidden>
        <svg
          className="animate-wave absolute bottom-0 h-10 w-[200%]"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-white"
            d="M0,20 C240,40 480,0 720,20 C960,40 1200,0 1440,20 L1440,40 L0,40 Z"
          />
          <path
            fill="currentColor"
            className="text-white"
            d="M1440,20 C1680,40 1920,0 2160,20 C2400,40 2640,0 2880,20 L2880,40 L1440,40 Z"
          />
        </svg>
      </div>
    </section>
  );
}

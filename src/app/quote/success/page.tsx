import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request received",
  robots: { index: false, follow: false },
};

export default async function QuoteSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;

  return (
    <main className="flex min-h-screen flex-col bg-navy-950 text-white">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
        aria-hidden
      />
      <div className="relative flex flex-1 flex-col">
        <Container className="py-8">
          <div className="inline-flex rounded-2xl bg-white px-3 py-2">
            <Logo tone="dark" />
          </div>
        </Container>

        <Container className="flex flex-1 items-center justify-center py-16">
          <div className="max-w-lg text-center">
            <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-accent text-navy-950">
              <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>

            <h1 className="mt-7 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Your request is in.
            </h1>
            <p className="mt-4 text-pretty leading-relaxed text-white/70">
              Thanks for reaching out to {site.name}. We&apos;ll follow up to talk through
              the job and put a clear quote together.
            </p>

            {ref ? (
              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm">
                <span className="text-white/55">Reference</span>
                <span className="font-display font-semibold tracking-wide text-accent">{ref}</span>
              </div>
            ) : null}

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/" variant="primary" className="px-8">
                Back to home
              </ButtonLink>
              <ButtonLink href={telHref(site.phone)} variant="ghost" className="px-8">
                Call {site.phone}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}

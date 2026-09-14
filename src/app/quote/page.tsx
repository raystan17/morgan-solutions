import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { site, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: `Request a quote from ${site.name} for decks, fences, pressure washing, or landscaping in Brandon, MB.`,
};

const assurances = [
  "We'll follow up promptly",
  "Clear, straightforward pricing",
  "Homes, shops, and commercial properties",
  "No obligation, no pushy sales",
];

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#f6fbff]">
      <div className="grid min-h-screen lg:grid-cols-[1fr_1.15fr]">
        <aside className="relative hidden overflow-hidden bg-navy-950 px-10 py-12 text-white lg:flex lg:flex-col xl:px-14">
          <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
          <div
            className="absolute -right-24 top-1/3 size-96 rounded-full bg-accent/20 blur-[120px]"
            aria-hidden
          />
          <div className="relative w-full max-w-sm rounded-2xl bg-white px-4 py-3">
            <Logo tone="dark" size="quote" />
          </div>
          <div className="relative mt-auto">
            <h2 className="font-display text-3xl font-semibold leading-tight text-balance">
              Let&apos;s put together a plan for your property.
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-white/65">
              Answer a few quick questions and we&apos;ll follow up. It takes less than two
              minutes.
            </p>
            <ul className="mt-8 space-y-3">
              {assurances.map((a) => (
                <li key={a} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="flex size-5 items-center justify-center rounded-full bg-accent text-navy-950">
                    <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-white/55">
              Prefer to talk?{" "}
              <a href={telHref(site.phone)} className="font-medium text-accent hover:underline">
                {site.phone}
              </a>
            </p>
          </div>
        </aside>

        <div className="flex flex-col px-5 py-8 sm:px-8 sm:py-10">
          <div className="mb-8 flex items-center justify-between lg:hidden">
            <Logo tone="dark" size="quote" />
          </div>
          <Link
            href="/"
            className="mb-8 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-navy-900"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>

          <Container className="mx-0 max-w-xl flex-1 px-0">
            <div className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-[0_40px_80px_-50px_rgb(11_44_82/0.4)] sm:p-9">
              <QuoteForm />
            </div>
          </Container>
        </div>
      </div>
    </main>
  );
}

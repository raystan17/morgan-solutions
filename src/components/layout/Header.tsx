"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { nav, site, telHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-white">
      <Container className="flex h-[4.5rem] items-center justify-between gap-4 sm:h-20">
        <Logo tone="dark" />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy-900/70 transition hover:text-navy-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={telHref(site.phone)}
            className="hidden text-sm font-semibold text-navy-900 transition hover:text-accent-strong md:inline"
          >
            {site.phone}
          </a>
          <ButtonLink
            href="/quote"
            variant="primary"
            className="hidden h-11 px-6 sm:inline-flex"
          >
            Request a Quote
          </ButtonLink>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <div className={cn("lg:hidden", menuOpen ? "block" : "hidden")}>
        <Container className="flex flex-col gap-1 border-t border-navy-900/10 py-6">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-navy-900/80 transition hover:bg-navy-900/[0.04] hover:text-navy-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href={telHref(site.phone)}
            className="rounded-lg px-3 py-3 text-base font-medium text-navy-900/80"
          >
            Call {site.phone}
          </a>
          <ButtonLink
            href="/quote"
            variant="primary"
            className="mt-3 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Request a Quote
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}

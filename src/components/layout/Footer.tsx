import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { currentServices } from "@/lib/content";
import { nav, site, telHref } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-28 bg-navy-950 text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="inline-flex rounded-2xl bg-white px-3 py-2">
              <Logo tone="dark" size="footer" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
            <ButtonLink href="/quote" variant="primary" className="mt-7 h-11 px-6">
              Request a Quote
            </ButtonLink>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Company
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Services
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {currentServices.map((s) => (
                <li key={s.slug}>
                  <a href="/#services" className="transition hover:text-accent">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Get in touch
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href={telHref(site.phone)} className="transition hover:text-accent">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.facebook} className="transition hover:text-accent" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href={site.googleMaps} className="transition hover:text-accent" target="_blank" rel="noreferrer">
                  Google · {site.googleRating} ★ ({site.googleReviewCount} reviews)
                </a>
              </li>
              <li className="text-white/60">{site.serviceArea}</li>
              <li className="text-white/60">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Locally owned · Serving {site.serviceTowns.join(", ")}</p>
        </div>
      </Container>
    </footer>
  );
}

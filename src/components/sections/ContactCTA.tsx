import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { site, telHref } from "@/lib/site";

type ContactItem = { label: string; value: string; href?: string; external?: boolean };

const contactItems: ContactItem[] = [
  { label: "Call or text", href: telHref(site.phone), value: site.phone },
  { label: "Email", href: `mailto:${site.email}`, value: site.email },
  { label: "Service area", value: site.serviceTowns.join(" · ") },
  { label: "Hours", value: site.hours },
];

export function ContactCTA() {
  return (
    <Reveal as="div">
      <section className="scroll-mt-28 bg-white pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-7 py-14 text-white sm:px-12 sm:py-16">
            <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
            <div
              className="absolute -right-16 -top-16 size-72 rounded-full bg-accent/25 blur-[100px]"
              aria-hidden
            />
            <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Let&apos;s talk
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  Ready to clean, refresh, or rebuild the outside of your place?
                </h2>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-white/70">
                  Send a quick request or call. Tell us what you need — a deck, a fence,
                  a wash, a yard — and we&apos;ll follow up with a clear plan.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/quote" variant="primary" className="px-8">
                    Request a Quote
                  </ButtonLink>
                  <ButtonLink href={telHref(site.phone)} variant="ghost" className="px-8">
                    Call {site.phone}
                  </ButtonLink>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-accent"
                  >
                    Facebook
                  </a>
                  <a
                    href={site.googleMaps}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-accent"
                  >
                    Google Maps
                  </a>
                </div>
              </div>

              <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                {contactItems.map((item) => (
                  <div key={item.label} className="bg-navy-950 p-6">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-sm font-medium text-white">
                      {item.href ? (
                        <a href={item.href} className="transition hover:text-accent">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>
    </Reveal>
  );
}

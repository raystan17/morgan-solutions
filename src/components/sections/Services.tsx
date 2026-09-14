import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { currentServices } from "@/lib/content";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 size-4 shrink-0 text-accent-strong"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function Services() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Services built around your property"
          intro="Decks, fences, landscaping, and pressure washing for homes and businesses across Brandon and the surrounding region."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {currentServices.map((service, i) => (
            <Reveal
              as="li"
              key={service.slug}
              delay={(i % 2) * 90}
              className="group flex flex-col rounded-2xl border border-navy-900/10 bg-[#f6fbff] p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgb(11_44_82/0.25)]"
            >
              <span
                aria-hidden
                className="mb-5 inline-flex w-fit items-center rounded-full bg-navy-900 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-accent"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-semibold text-navy-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.summary}
              </p>
              <ul className="mt-5 space-y-2 border-t border-navy-900/10 pt-5">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-slate-700">
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-navy-900/10 bg-navy-950 p-7 text-white sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Painting & more
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold">
              Need a paint job, yard cleanup, or something that isn&apos;t listed?
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">
              If it&apos;s outside, ask. We also handle painting, property cleanup, and
              the odd emergency that can&apos;t wait.
            </p>
          </div>
          <ButtonLink href="/quote" variant="primary" className="shrink-0">
            Ask about a job
          </ButtonLink>
        </Reveal>
      </Container>
    </Section>
  );
}

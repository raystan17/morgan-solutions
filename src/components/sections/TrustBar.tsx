import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { trustPillars } from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
  "Locally Owned": <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />,
  "Homes & Businesses": (
    <path d="M3 21V8l6-4 6 4v13M9 21v-7h6v7M15 8l6 4v9" />
  ),
  "Always Available": <path d="M12 7v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  "5.0 on Google": (
    <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.8 7.2 17.9l.9-5.4L4.2 8.7l5.4-.8L12 3z" />
  ),
};

export function TrustBar() {
  return (
    <section className="relative z-10 -mt-px border-y border-navy-900/10 bg-white">
      <Container className="py-12 sm:py-14">
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.title} delay={i * 80} className="flex gap-4">
              <span
                aria-hidden
                className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-900/[0.04] text-accent-strong"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[pillar.title]}
                </svg>
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-navy-900">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

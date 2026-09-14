import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/lib/content";
import { site } from "@/lib/site";

export function About() {
  return (
    <Section id="about" className="bg-[#f6fbff]">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow={about.eyebrow}
              title={about.title}
              intro={`Based in ${site.city}, ${site.region} — serving ${site.serviceTowns.join(", ")}.`}
            />
            <Reveal className="mt-8 rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-8">
              <p className="font-display text-lg font-medium leading-relaxed text-navy-900">
                “{about.pullQuote}”
              </p>
            </Reveal>
          </div>

          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={p} delay={i * 80}>
                <p className="text-pretty leading-relaxed text-slate-600">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

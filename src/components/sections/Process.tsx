import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <Section id="process" className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="A straightforward path from message to finished job"
          intro="No drawn-out sales process. Tell us what you need, we take a look, and we get to work."
        />

        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 4) * 80} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-lg font-semibold text-accent">
                  {i + 1}
                </span>
                {i < processSteps.length - 1 ? (
                  <span
                    className="hidden h-px flex-1 bg-linear-to-r from-navy-900/20 to-transparent lg:block"
                    aria-hidden
                  />
                ) : null}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

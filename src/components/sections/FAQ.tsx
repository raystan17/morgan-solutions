import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <Section id="faq" className="bg-[#f6fbff]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Good questions"
              title="What people ask before we come out"
              intro="If your question isn't here, call or text — you'll get a straight answer."
            />
            <ButtonLink href="/quote" variant="secondary" className="mt-7">
              Request a Quote
            </ButtonLink>
          </div>

          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

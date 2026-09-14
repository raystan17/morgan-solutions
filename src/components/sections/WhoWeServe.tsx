import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { whoWeServe } from "@/lib/content";

export function WhoWeServe() {
  return (
    <Section className="bg-[#f6fbff]">
      <Container>
        <SectionHeading
          eyebrow="Who we serve"
          title="Homes, shops, and buildings that need to look looked-after"
          intro="Same crew, same standard — whether it's a backyard deck or a commercial yard that's been through a dust storm."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {whoWeServe.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(i % 2) * 80}
              className="rounded-2xl border border-navy-900/10 bg-white p-7"
            >
              <h3 className="font-display text-lg font-semibold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

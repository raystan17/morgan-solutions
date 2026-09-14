import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { whyChooseUs } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative scroll-mt-28 overflow-hidden bg-navy-950 py-20 text-white sm:py-28"
    >
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div
        className="absolute -right-20 top-10 size-96 rounded-full bg-accent/15 blur-[120px]"
        aria-hidden
      />
      <Container className="relative">
        <SectionHeading
          tone="light"
          eyebrow="Why people call us"
          title="Show up. Do it right. Leave it looking better."
          intro="Anyone can spray a driveway once. Clients stay with us because the finish looks right, the price is fair, and you can actually reach the crew."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {whyChooseUs.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 2) * 90}
              className="bg-navy-950 p-7 sm:p-9"
            >
              <span className="font-display text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-white/65">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

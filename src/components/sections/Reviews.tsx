import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { reviews } from "@/lib/content";
import { site } from "@/lib/site";

export function Reviews() {
  return (
    <Section id="reviews" className="bg-white">
      <Container>
        <SectionHeading
          eyebrow="What neighbours say"
          title={`${site.googleRating} stars on Google — and the work holds up`}
          intro="Recent reviews from people around Brandon. The before-and-afters on Google and Facebook say as much as the words."
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {reviews.map((review, i) => (
            <Reveal
              as="li"
              key={review.name}
              delay={(i % 2) * 80}
              className="flex flex-col rounded-2xl border border-navy-900/10 bg-[#f6fbff] p-7"
            >
              <p className="text-accent-strong" aria-label="5 stars">
                ★★★★★
              </p>
              <blockquote className="mt-3 flex-1 text-pretty leading-relaxed text-navy-900">
                “{review.quote}”
              </blockquote>
              <p className="mt-5 text-sm font-semibold text-navy-900">{review.name}</p>
              <p className="text-xs text-slate-500">{review.source} review</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 text-center">
          <ButtonLink href={site.googleMaps} variant="light" target="_blank" rel="noreferrer">
            Read reviews on Google
          </ButtonLink>
        </Reveal>
      </Container>
    </Section>
  );
}

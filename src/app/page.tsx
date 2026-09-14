import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Reviews } from "@/components/sections/Reviews";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhoWeServe />
        <Reviews />
        <WhyChooseUs />
        <Process />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

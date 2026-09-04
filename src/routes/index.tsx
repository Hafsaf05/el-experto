import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process, MissionVision } from "@/components/site/Process";
import { Contact, FinalCta } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "El Experto Web Solutions | High-Performance Websites";
const DESCRIPTION =
  "Premium website development for businesses: fast, secure, SEO-ready sites and e-commerce builds that generate leads and drive growth.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <MissionVision />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

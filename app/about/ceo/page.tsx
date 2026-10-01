import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { FounderBuilding } from "@/components/founder/FounderBuilding";
import { FounderChapters } from "@/components/founder/FounderChapters";
import { FounderClosing } from "@/components/founder/FounderClosing";
import { FounderHero } from "@/components/founder/FounderHero";
import { FounderTeam } from "@/components/founder/FounderTeam";
import { Navbar } from "@/components/Navbar";
import { founder } from "@/lib/founder";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About the Founder",
  description:
    "Adrian G. is the Founder & CEO of Rakn Labs, combining software engineering, product development and business experience to build practical digital products.",
  alternates: { canonical: "/about/ceo" },
  openGraph: {
    title: "About the Founder — RAKN LABS",
    description: founder.hero.intro,
    url: "/about/ceo",
    type: "profile",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: founder.name,
  jobTitle: "Founder & CEO",
  description: founder.hero.intro,
  worksFor: {
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
  },
  knowsAbout: founder.building.stack,
  url: `${siteConfig.siteUrl}/about/ceo`,
};

export default function FounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navbar />
      <main className="pt-[var(--nav-h)]">
        <FounderHero />
        <FounderChapters />
        <FounderBuilding />
        <FounderTeam />
        <FounderClosing />
      </main>
      <Footer />
    </>
  );
}

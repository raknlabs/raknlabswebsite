import type { Metadata } from "next";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { FounderLink } from "@/components/founder/FounderLink";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.about.body,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--nav-h)]">
        <About variant="page">
          <Reveal delay={120}>
            <FounderLink />
          </Reveal>
        </About>
      </main>
      <Footer />
    </>
  );
}

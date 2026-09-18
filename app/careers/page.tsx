import type { Metadata } from "next";
import { Careers } from "@/components/Careers";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at RAKN LABS will appear here as the independent game studio grows.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--nav-h)]">
        <Careers />
      </main>
      <Footer />
    </>
  );
}

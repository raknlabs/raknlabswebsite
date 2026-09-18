import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-[100svh] items-center bg-void px-5 pt-[var(--nav-h)] md:px-8">
        <div className="energy-field opacity-40" />
        <div className="relative mx-auto w-full max-w-7xl py-24">
          <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-rakn-cyan">
            404
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight text-white sm:text-7xl">
            Signal lost.
          </h1>
          <p className="mt-6 max-w-md text-white/60">
            This page does not exist. Return to the lab.
          </p>
          <Button asChild className="mt-10" size="lg">
            <Link href="/">Back to RAKN LABS</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}

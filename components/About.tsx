import { type ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";

type AboutProps = {
  variant?: "home" | "page";
  children?: ReactNode;
};

export function About({ variant = "home", children }: AboutProps) {
  return (
    <section
      id={variant === "home" ? "about" : undefined}
      className="relative overflow-hidden bg-ink py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 bg-rakn-purple/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 bg-rakn-red/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-rakn-cyan">
            About
          </p>
          {variant === "page" ? (
            <h1 className="mt-5 max-w-5xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl">
              {siteConfig.about.title}
            </h1>
          ) : (
            <h2 className="mt-5 max-w-5xl font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl">
              {siteConfig.about.title}
            </h2>
          )}
        </Reveal>
        <Reveal delay={90}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            {siteConfig.about.body}
          </p>
        </Reveal>
        {variant === "home" ? (
          <Reveal delay={140}>
            <div className="mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/about">About the studio</Link>
              </Button>
            </div>
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}

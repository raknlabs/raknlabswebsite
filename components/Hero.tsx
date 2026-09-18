"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ParticleField } from "@/components/ParticleField";
import { SmartImage } from "@/components/SmartImage";
import { TrailerModal } from "@/components/TrailerModal";
import { siteConfig } from "@/lib/siteConfig";

type HeroProps = {
  heroAvailable: boolean;
};

export function Hero({ heroAvailable }: HeroProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const [trailerOpen, setTrailerOpen] = useState(false);
  const game = siteConfig.featuredGame;

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        layer.style.transform = `translate3d(0, ${y * 0.14}px, 0) scale(1.06)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-void">
      <div
        ref={layerRef}
        className="absolute inset-0 origin-center scale-105 will-change-transform"
      >
        <SmartImage
          src={game.heroImage}
          alt={`${game.title} key art`}
          available={heroAvailable}
          placeholderLabel="KEY ART SLOT"
          placeholderCaption=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rakn-red/10 via-transparent to-rakn-cyan/10 mix-blend-screen" />
        <div className="absolute -left-10 top-1/4 h-64 w-[45%] bg-rakn-red/20 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-72 w-[40%] bg-rakn-cyan/15 blur-3xl" />
      </div>

      <ParticleField className="absolute inset-0 z-10 h-full w-full" />
      <div className="scanlines z-10" />
      <div className="vignette z-10" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-void to-transparent" />

      <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-5 pb-10 pt-28 sm:pb-16 md:px-8 lg:pb-20">
        <div className="hero-copy max-w-4xl">
          <p className="hero-kicker mb-4 font-display text-[0.7rem] font-semibold uppercase tracking-[0.48em] text-white/70 sm:text-[0.78rem]">
            {game.kicker}
          </p>
          <h1 className="font-display text-[clamp(2.6rem,8vw,7.2rem)] font-bold uppercase leading-[0.86] tracking-tight text-white [text-shadow:0_8px_40px_rgba(0,0,0,0.55)]">
            {game.title}
          </h1>
          <p className="mt-5 max-w-xl font-display text-base font-medium uppercase tracking-[0.18em] text-white/85 sm:text-xl">
            {game.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
              <Link href="/#featured">Discover the game</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => setTrailerOpen(true)}
            >
              Watch trailer
            </Button>
          </div>
        </div>
      </div>
      <TrailerModal open={trailerOpen} onOpenChange={setTrailerOpen} />
    </section>
  );
}

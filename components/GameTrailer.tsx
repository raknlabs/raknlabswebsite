"use client";

import { useState } from "react";
import { PlayIcon } from "@/components/SocialIcons";
import { SmartImage } from "@/components/SmartImage";
import { TrailerModal } from "@/components/TrailerModal";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/lib/siteConfig";

type GameTrailerProps = {
  coverAvailable: boolean;
};

export function GameTrailer({ coverAvailable }: GameTrailerProps) {
  const [open, setOpen] = useState(false);
  const game = siteConfig.featuredGame;

  return (
    <section id="trailer" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle kicker="Cinematic" title="Watch the trailer" />
        </Reveal>
        <Reveal className="mt-12">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="media-frame group relative block aspect-video w-full border border-white/10 text-left"
            aria-label={`Play ${game.title} trailer`}
          >
            <SmartImage
              src={game.trailerCover}
              alt={`${game.title} trailer cover`}
              available={coverAvailable}
              placeholderLabel="TRAILER COVER"
              placeholderCaption="Play"
              fill
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/15" />
            <span className="play-core absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md sm:size-28">
              <PlayIcon className="size-8 translate-x-[2px] sm:size-10" />
            </span>
          </button>
        </Reveal>
      </div>
      <TrailerModal open={open} onOpenChange={setOpen} />
    </section>
  );
}

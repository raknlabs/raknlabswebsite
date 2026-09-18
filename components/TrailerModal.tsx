"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

type TrailerModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function TrailerEmbed() {
  const { trailer } = siteConfig.featuredGame;
  const title = `${siteConfig.featuredGame.title} trailer`;

  if (trailer.provider === "youtube" && trailer.youtubeId) {
    return (
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${trailer.youtubeId}?autoplay=1&rel=0`}
        className="h-full w-full"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (trailer.provider === "vimeo" && trailer.vimeoId) {
    return (
      <iframe
        title={title}
        src={`https://player.vimeo.com/video/${trailer.vimeoId}?autoplay=1`}
        className="h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (trailer.provider === "mp4" && trailer.mp4Src) {
    return (
      <video
        className="h-full w-full bg-black object-contain"
        src={trailer.mp4Src}
        controls
        autoPlay
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-ink px-8 text-center">
      <div>
        <p className="font-display text-sm font-semibold uppercase tracking-[0.4em] text-rakn-cyan">
          Trailer
        </p>
        <p className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
          Coming Soon
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60">
          The official trailer will play here when it is ready.
        </p>
      </div>
    </div>
  );
}

export function TrailerModal({ open, onOpenChange }: TrailerModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm data-[state=open]:animate-in" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 z-[90] w-[min(96vw,1120px)] -translate-x-1/2 -translate-y-1/2 border border-white/10 bg-black shadow-[0_0_80px_rgb(0_0_0_/_0.6)] focus:outline-none"
          aria-describedby={undefined}
        >
          <Dialog.Title className="sr-only">
            {siteConfig.featuredGame.title} trailer
          </Dialog.Title>
          <div className="relative aspect-video w-full">
            {open ? <TrailerEmbed /> : null}
          </div>
          <Dialog.Close
            className="absolute -top-12 right-0 inline-flex size-10 items-center justify-center text-white/80 transition hover:text-white"
            aria-label="Close trailer"
          >
            <X className="size-6" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

import Image from "next/image";
import { founder } from "@/lib/founder";

export function FounderPortrait() {
  return (
    <figure className="w-full max-w-sm">
      <div className="corner-ticks relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-surface">
        {founder.portrait ? (
          <Image
            src={founder.portrait}
            alt={founder.portraitAlt}
            fill
            sizes="(min-width: 1024px) 24rem, 100vw"
            className="object-cover grayscale-[18%]"
            priority
          />
        ) : (
          <div
            className="blueprint-grid absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="font-display text-[clamp(4rem,10vw,7rem)] font-bold leading-none tracking-tight text-white/[0.13]">
              {founder.initials}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-void/70 via-transparent to-transparent" />
      </div>
      <figcaption className="mt-5 border-t border-white/10 pt-4">
        <p className="font-display text-base font-semibold uppercase tracking-[0.14em] text-white">
          {founder.name}
        </p>
        <p className="mt-1.5 text-sm text-white/50">{founder.role}</p>
        <p className="text-sm text-white/40">{founder.secondaryRole}</p>
      </figcaption>
    </figure>
  );
}

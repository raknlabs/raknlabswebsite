import { type ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type DocPageProps = {
  kicker: string;
  title: string;
  meta?: ReactNode;
  children: ReactNode;
};

export function DocPage({ kicker, title, meta, children }: DocPageProps) {
  return (
    <div className="relative overflow-hidden bg-void">
      <div
        className="blueprint-grid pointer-events-none absolute inset-x-0 top-0 h-[32rem] opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-3xl px-5 pb-28 pt-16 md:px-8 md:pb-36 md:pt-24">
        <Reveal>
          <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-rakn-cyan">
            {kicker}
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <div className="light-line mt-7 max-w-[12rem]" />
        </Reveal>
        {meta ? (
          <Reveal delay={70}>
            <div className="mt-8 border-l border-white/10 pl-5 text-sm leading-relaxed text-white/50 [&_a]:text-rakn-cyan [&_code]:font-mono [&_code]:text-[0.86em] [&_code]:text-white/80 [&_strong]:font-semibold [&_strong]:text-white/80">
              {meta}
            </div>
          </Reveal>
        ) : null}
        <div className="mt-14 flex flex-col gap-12 md:gap-14">{children}</div>
      </div>
    </div>
  );
}

type DocSectionProps = {
  index?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function DocSection({
  index,
  title,
  children,
  className,
}: DocSectionProps) {
  return (
    <Reveal>
      <section className={cn("scroll-mt-28", className)}>
        <div className="flex items-baseline gap-3">
          {index ? (
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-rakn-cyan/70">
              {index}
            </span>
          ) : null}
          <h2 className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-white md:text-2xl">
            {title}
          </h2>
        </div>
        <div className="doc-prose mt-4 text-[0.97rem] md:text-base">
          {children}
        </div>
      </section>
    </Reveal>
  );
}

type DocSubheadingProps = {
  children: ReactNode;
};

export function DocSubheading({ children }: DocSubheadingProps) {
  return (
    <h3 className="mb-3 mt-7 font-display text-[0.8rem] font-semibold uppercase tracking-[0.26em] text-white/55">
      {children}
    </h3>
  );
}

type DocCalloutProps = {
  children: ReactNode;
  tone?: "neutral" | "danger";
};

export function DocCallout({ children, tone = "neutral" }: DocCalloutProps) {
  return (
    <p
      className={cn(
        "my-5 border-l-2 px-5 py-3 text-[0.94rem] leading-relaxed",
        tone === "danger"
          ? "border-rakn-red bg-rakn-red/[0.07] text-white/80"
          : "border-white/20 bg-white/[0.03] text-white/65",
      )}
    >
      {children}
    </p>
  );
}

type DocPathProps = {
  children: ReactNode;
};

export function DocPath({ children }: DocPathProps) {
  return (
    <p className="my-5">
      <span className="inline-block border border-rakn-cyan/30 bg-rakn-cyan/[0.08] px-4 py-2.5 font-mono text-[0.88rem] text-rakn-cyan">
        {children}
      </span>
    </p>
  );
}

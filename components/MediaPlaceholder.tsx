import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  label?: string;
  caption?: string;
  className?: string;
  variant?: "hero" | "wide" | "card" | "logo" | "square";
};

export function MediaPlaceholder({
  label = "KEY ART",
  caption,
  className,
  variant = "wide",
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative isolate flex h-full w-full items-center justify-center overflow-hidden",
        className,
      )}
    >
      <div className="energy-field" />
      <div
        className="energy-shard -left-[8%] top-[18%] h-[58%] w-[48%] opacity-40"
        aria-hidden="true"
      />
      <div
        className="energy-shard right-[-6%] top-[28%] h-[46%] w-[38%] rotate-12 opacity-50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 0%, rgb(255 32 64 / 0.12) 28%, transparent 36%, rgb(34 230 255 / 0.14) 72%, transparent 80%)",
        }}
        aria-hidden="true"
      />
      <div className="scanlines" />
      <div className="vignette" />
      <div className="relative z-10 px-6 text-center">
        <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.5em] text-white/55">
          {label}
        </p>
        {caption ? (
          <p
            className={cn(
              "mt-3 font-display font-bold uppercase tracking-tight text-white/80",
              variant === "hero"
                ? "text-3xl sm:text-5xl"
                : "text-lg sm:text-2xl",
            )}
          >
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}

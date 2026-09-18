import { cn } from "@/lib/utils";

type SectionTitleProps = {
  kicker?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  kicker,
  title,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-5xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker ? (
        <p className="mb-3 font-display text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-rakn-cyan">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h2>
      <div
        className={cn(
          "light-line mt-6",
          align === "center" ? "mx-auto max-w-xs" : "max-w-[12rem]",
        )}
      />
    </div>
  );
}

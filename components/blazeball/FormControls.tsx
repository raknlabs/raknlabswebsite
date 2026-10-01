"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type StatusKind = "error" | "ok" | "info";

export type Status = {
  kind: StatusKind;
  text: ReactNode;
} | null;

const statusStyles: Record<StatusKind, string> = {
  error: "border-rakn-red/45 bg-rakn-red/[0.08] text-[#ffc9c9]",
  ok: "border-[#4bd68a]/45 bg-[#4bd68a]/[0.08] text-[#bff5d6]",
  info: "border-rakn-cyan/40 bg-rakn-cyan/[0.07] text-[#cfe4ff]",
};

export function StatusMessage({ status }: { status: Status }) {
  if (!status) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "mt-6 border-l-2 px-5 py-3.5 text-[0.93rem] leading-relaxed whitespace-pre-line",
        statusStyles[status.kind],
      )}
    >
      {status.text}
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type: "email" | "password";
  value: string;
  onChange: (value: string) => void;
  autoComplete: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  hint?: string;
};

export function Field({
  id,
  label,
  type,
  value,
  onChange,
  autoComplete,
  placeholder,
  required = true,
  minLength,
  hint,
}: FieldProps) {
  return (
    <div className="mt-5">
      <label
        htmlFor={id}
        className="block font-display text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/45"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        className="mt-2.5 w-full border border-white/15 bg-void px-4 py-3 text-base text-white transition-colors duration-200 placeholder:text-white/25 hover:border-white/25 focus:border-rakn-cyan/60 focus:outline-none"
      />
      {hint ? <p className="mt-2 text-[0.82rem] text-white/40">{hint}</p> : null}
    </div>
  );
}

type TabsProps = {
  tabs: { id: string; label: string }[];
  active: string;
  onSelect: (id: string) => void;
  ariaLabel: string;
};

export function Tabs({ tabs, active, onSelect, ariaLabel }: TabsProps) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className="flex flex-wrap gap-px bg-white/10"
    >
      {tabs.map((tab) => {
        const selected = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onSelect(tab.id)}
            className={cn(
              "flex-1 px-4 py-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-200",
              selected
                ? "bg-rakn-cyan/[0.12] text-rakn-cyan"
                : "bg-void text-white/45 hover:text-white/75",
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border border-white/10 bg-ink p-6 md:p-7", className)}>
      {children}
    </div>
  );
}

export function SubmitButton({
  children,
  busy,
  busyLabel,
  tone = "primary",
  onClick,
  type = "submit",
}: {
  children: ReactNode;
  busy: boolean;
  busyLabel: string;
  tone?: "primary" | "danger" | "quiet";
  onClick?: () => void;
  type?: "submit" | "button";
}) {
  const tones: Record<string, string> = {
    primary: "bg-white text-black hover:bg-rakn-cyan",
    danger: "bg-rakn-red text-white hover:brightness-110",
    quiet:
      "border border-white/20 bg-transparent text-white/80 hover:border-white/40 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={busy}
      className={cn(
        "mt-7 inline-flex h-[3.25rem] w-full items-center justify-center px-6 font-display text-[0.8rem] font-semibold uppercase tracking-[0.22em] transition-all duration-200 disabled:cursor-progress disabled:opacity-55",
        tones[tone],
      )}
    >
      {busy ? busyLabel : children}
    </button>
  );
}

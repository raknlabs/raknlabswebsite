import Image from "next/image";
import Link from "next/link";
import { founder } from "@/lib/founder";

export function FounderLink() {
  return (
    <Link
      href="/about/ceo"
      className="group mt-16 grid max-w-2xl items-center gap-6 border border-white/10 bg-void p-5 transition duration-300 hover:border-rakn-cyan/40 sm:grid-cols-[7.5rem_1fr] sm:p-6"
    >
      <div className="relative aspect-[4/5] w-full max-w-[7.5rem] overflow-hidden border border-white/10 bg-surface">
        {founder.portrait ? (
          <Image
            src={founder.portrait}
            alt=""
            fill
            sizes="120px"
            className="object-cover object-[center_18%] transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center font-display text-3xl font-bold text-white/20">
            {founder.initials}
          </span>
        )}
      </div>
      <div>
        <p className="font-display text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-rakn-cyan">
          Founder
        </p>
        <p className="mt-2 font-display text-2xl font-semibold uppercase tracking-tight text-white">
          {founder.name}
        </p>
        <p className="mt-1 text-sm text-white/50">{founder.role}</p>
        <p className="mt-4 font-display text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/70 transition group-hover:text-rakn-cyan">
          Read the founder story →
        </p>
      </div>
    </Link>
  );
}

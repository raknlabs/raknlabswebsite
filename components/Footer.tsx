"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Link href="/" className="w-fit">
            <Logo className="h-10 md:h-12" />
          </Link>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {siteConfig.footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-white/55 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialLinks />
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-[0.16em] text-white/40 uppercase">
            © {year} {siteConfig.siteName}
          </p>
          <p className="text-xs text-white/30">We build games.</p>
        </div>
      </div>
    </footer>
  );
}

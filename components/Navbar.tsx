"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { socialIconMap } from "@/components/SocialIcons";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.navReady = "true";
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled && !open ? "nav-glass" : "bg-transparent",
        open && "z-[70] bg-void",
      )}
    >
      <Link
        href="/#featured"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[70] focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to game
      </Link>
      <nav className="mx-auto flex h-[var(--nav-h)] w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="relative z-[60] shrink-0" onClick={() => setOpen(false)}>
          <Logo priority />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {siteConfig.navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/#follow"
            className="inline-flex size-11 items-center justify-center border border-white/15 text-white/80 transition hover:border-rakn-cyan hover:text-rakn-cyan"
            aria-label="Social links"
          >
            {(() => {
              const Icon = socialIconMap.discord;
              return <Icon />;
            })()}
          </Link>
        </div>

        <button
          type="button"
          className="relative z-[70] inline-flex size-11 items-center justify-center text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          data-menu-toggle="true"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-[65] bg-void pt-[var(--nav-h)] transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10">
          <ul className="flex flex-col gap-2 pt-8">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-5xl font-bold uppercase tracking-tight text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#follow"
            onClick={() => setOpen(false)}
            className="font-display text-sm font-semibold uppercase tracking-[0.32em] text-rakn-cyan"
          >
            Follow the lab
          </Link>
        </div>
      </div>
    </header>
  );
}

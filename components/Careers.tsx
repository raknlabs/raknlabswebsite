import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";

export function Careers() {
  const roles = siteConfig.careers.openRoles;

  return (
    <section id="careers" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-rakn-cyan">
            Careers
          </p>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">
            {siteConfig.careers.title}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
            {siteConfig.careers.body}
          </p>
        </Reveal>
        <div className="mt-10">
          {roles.length === 0 ? (
            <Reveal>
              <div className="border border-white/10 bg-void/50 px-6 py-8">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                  No open roles yet
                </p>
              </div>
            </Reveal>
          ) : (
            <ul className="divide-y divide-white/10 border border-white/10">
              {roles.map((role) => (
                <li key={role.title}>
                  <a
                    href={role.href || "#careers"}
                    className="flex items-center justify-between gap-4 px-6 py-5 transition hover:bg-white/5"
                  >
                    <span className="font-display text-lg font-semibold uppercase tracking-wide text-white">
                      {role.title}
                    </span>
                    <span className="text-sm text-white/45">{role.location}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

import { socialIconMap } from "@/components/SocialIcons";
import { siteConfig, type SocialLink } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "lg";
};

function SocialItem({
  link,
  size,
}: {
  link: SocialLink;
  size: "sm" | "lg";
}) {
  const Icon = socialIconMap[link.id];
  const className = cn(
    "inline-flex items-center justify-center border border-white/15 text-white/75 transition hover:border-rakn-cyan hover:text-rakn-cyan hover:bg-white/5",
    size === "lg" ? "size-16" : "size-11",
    !link.href && "cursor-default opacity-45 hover:border-white/15 hover:text-white/75 hover:bg-transparent",
  );

  if (!link.href) {
    return (
      <span className={className} title={`${link.label} — add URL in siteConfig.ts`}>
        <span className="sr-only">{link.label} (coming soon)</span>
        <Icon className={size === "lg" ? "size-6" : "size-5"} />
      </span>
    );
  }

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label={link.label}
    >
      <Icon className={size === "lg" ? "size-6" : "size-5"} />
    </a>
  );
}

export function SocialLinks({ className, size = "sm" }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {siteConfig.socialLinks.map((link) => (
        <SocialItem key={link.id} link={link} size={size} />
      ))}
    </div>
  );
}

import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  mark?: boolean;
  priority?: boolean;
};

export function Logo({ className, mark = true, priority = false }: LogoProps) {
  const src = mark ? siteConfig.logoMark : siteConfig.logo;
  return (
    <Image
      src={src}
      alt="RAKN LABS"
      width={mark ? 360 : 640}
      height={mark ? 146 : 427}
      priority={priority}
      className={cn("h-8 w-auto mix-blend-screen md:h-9", className)}
    />
  );
}

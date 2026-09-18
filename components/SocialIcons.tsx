import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function DiscordIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} fill="currentColor" aria-hidden="true">
      <path d="M19.27 5.33A17.4 17.4 0 0 0 14.89 4c-.2.36-.43.85-.59 1.24a16.2 16.2 0 0 0-4.6 0A10 10 0 0 0 9.1 4a17.3 17.3 0 0 0-4.4 1.35C2.18 9.05 1.57 12.67 1.82 16.23A17.6 17.6 0 0 0 7.1 20c.37-.5.7-1.03 1-1.58a11.3 11.3 0 0 1-1.57-.76c.13-.1.26-.2.38-.3 3.03 1.42 6.31 1.42 9.31 0 .13.1.26.2.39.3-.5.3-1.03.56-1.58.76.3.55.63 1.08 1 1.58a17.5 17.5 0 0 0 5.3-3.77c.4-4.12-.66-7.7-2.06-10.9ZM8.68 14.86c-.9 0-1.64-.84-1.64-1.86s.72-1.87 1.64-1.87 1.66.84 1.64 1.87c0 1.02-.73 1.86-1.64 1.86Zm6.64 0c-.9 0-1.64-.84-1.64-1.86s.72-1.87 1.64-1.87 1.66.84 1.64 1.87c0 1.02-.72 1.86-1.64 1.86Z" />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3.05 3.05 0 0 0-2.15-2.16C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.35.44A3.05 3.05 0 0 0 .5 6.2 32 32 0 0 0 0 12a32 32 0 0 0 .5 5.8 3.05 3.05 0 0 0 2.15 2.16C4.5 20.4 12 20.4 12 20.4s7.5 0 9.35-.44A3.05 3.05 0 0 0 23.5 17.8 32 32 0 0 0 24 12a32 32 0 0 0-.5-5.8ZM9.75 15.57V8.43L15.84 12l-6.09 3.57Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} fill="currentColor" aria-hidden="true">
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2a1.8 1.8 0 1 0 1.8 1.8A1.8 1.8 0 0 0 12 10.2ZM17.4 7.1a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} fill="currentColor" aria-hidden="true">
      <path d="M14.2 3h3.02a6.7 6.7 0 0 0  .2 1.7 4.9 4.9 0 0 0 3.38 3.18V11a8 8 0 0 1-3.4-.82v6.16A6.35 6.35 0 1 1 10.7 10.1v3.17a3.2 3.2 0 1 0 2.24 3.05V3Z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} fill="currentColor" aria-hidden="true">
      <path d="M17.8 3h3.1l-6.76 7.73L22 21h-6.17l-4.83-6.31L5.4 21H2.28l7.23-8.26L2 3h6.33l4.36 5.77L17.8 3Zm-1.08 16.2h1.72L7.36 4.7H5.5l11.22 14.5Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} fill="currentColor" aria-hidden="true">
      <path d="M6.5 9.5H3.7V20h2.8V9.5ZM5.1 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20.3 20h-2.8v-5.6c0-1.9-.7-3.1-2.2-3.1-1.2 0-1.9.8-2.2 1.6-.1.3-.1.7-.1 1.1V20h-2.8s.04-8.7 0-9.5h2.8v1.5c.4-.7 1.3-1.8 3.3-1.8 2.4 0 4.2 1.6 4.2 5V20Z" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-8", className)} fill="currentColor" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5L8 5.5Z" />
    </svg>
  );
}

export const socialIconMap = {
  discord: DiscordIcon,
  youtube: YouTubeIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
};

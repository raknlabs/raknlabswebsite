export type TrailerProvider = "youtube" | "vimeo" | "mp4" | "none";

export type Platform = {
  id: "steam" | "googlePlay" | "appStore" | "epic" | "playstation" | "xbox";
  label: string;
  href: string;
  visible: boolean;
};

export type GameSlot = {
  id: string;
  title: string;
  status: string;
  image: string;
  href: string;
  featured?: boolean;
};

export type NewsItem = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  image: string;
  placeholder: boolean;
};

export type SocialLink = {
  id: "discord" | "youtube" | "instagram" | "tiktok" | "x" | "linkedin";
  label: string;
  href: string;
};

export const siteConfig = {
  siteName: "RAKN LABS",
  tagline: "We Build Games",
  description:
    "RAKN LABS is an independent game studio. Blazeball is the next game from the lab.",
  logo: "/images/rakn-labs-logo.png",
  logoMark: "/images/rakn-labs-logo-mark.png",
  ogImage: "/images/og-image.webp",
  contactEmail: "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://raknlabs.vercel.app",

  navigation: [
    { label: "Games", href: "/#games" },
    { label: "About", href: "/#about" },
    { label: "News", href: "/#news" },
    { label: "Careers", href: "/#careers" },
  ] as const,

  footerNavigation: [
    { label: "Games", href: "/#games" },
    { label: "About", href: "/#about" },
    { label: "News", href: "/#news" },
    { label: "Careers", href: "/#careers" },
    { label: "Contact", href: "/#follow" },
  ] as const,

  socialLinks: [
    { id: "discord", label: "Discord", href: "" },
    { id: "youtube", label: "YouTube", href: "" },
    { id: "instagram", label: "Instagram", href: "" },
    { id: "tiktok", label: "TikTok", href: "" },
    { id: "x", label: "X", href: "" },
    { id: "linkedin", label: "LinkedIn", href: "" },
  ] satisfies SocialLink[],

  featuredGame: {
    kicker: "RAKN LABS PRESENTS",
    title: "BLAZEBALL",
    tagline: "The next game from RAKN LABS",
    description:
      "Blazeball is the next game from RAKN LABS. The full reveal lands here as launch approaches.",
    genre: "Coming Soon",
    releaseStatus: "Coming Soon",
    heroImage: "/images/game-hero.webp",
    logoImage: "/images/game-logo.png",
    coverImage: "/images/game-hero.webp",
    trailerCover: "/images/game-trailer-cover.webp",
    trailer: {
      provider: "none" as TrailerProvider,
      youtubeId: "",
      vimeoId: "",
      mp4Src: "",
    },
    screenshots: [
      "/images/game-screenshot-01.webp",
      "/images/game-screenshot-02.webp",
      "/images/game-screenshot-03.webp",
      "/images/game-screenshot-04.webp",
    ],
    features: [
      {
        title: "FEATURE 01",
        body: "A short placeholder for a core pillar of the game.",
      },
      {
        title: "FEATURE 02",
        body: "A short placeholder for a defining system.",
      },
      {
        title: "FEATURE 03",
        body: "A short placeholder for the player fantasy.",
      },
    ],
    platforms: [
      { id: "steam", label: "Play on Steam", href: "", visible: false },
      { id: "googlePlay", label: "Google Play", href: "", visible: false },
      { id: "appStore", label: "App Store", href: "", visible: false },
      { id: "epic", label: "Epic Games Store", href: "", visible: false },
      { id: "playstation", label: "PlayStation", href: "", visible: false },
      { id: "xbox", label: "Xbox", href: "", visible: false },
    ] satisfies Platform[],
  },

  games: [
    {
      id: "main",
      title: "BLAZEBALL",
      status: "Coming Soon",
      image: "/images/game-hero.webp",
      href: "/#featured",
      featured: true,
    },
    {
      id: "slot-01",
      title: "GAME 01",
      status: "Coming Soon",
      image: "/images/game-02.webp",
      href: "",
    },
    {
      id: "slot-02",
      title: "GAME 02",
      status: "Coming Soon",
      image: "/images/game-03.webp",
      href: "",
    },
    {
      id: "slot-03",
      title: "GAME 03",
      status: "Coming Soon",
      image: "/images/game-04.webp",
      href: "",
    },
  ] satisfies GameSlot[],

  news: [
    {
      id: "placeholder-01",
      category: "GAME UPDATE",
      title: "Coming Soon",
      excerpt: "Development updates for Blazeball will appear here.",
      date: "Coming Soon",
      href: "",
      image: "/images/news-01.webp",
      placeholder: true,
    },
    {
      id: "placeholder-02",
      category: "TRAILER",
      title: "Coming Soon",
      excerpt: "Trailer drops and cinematic reveals will be posted here.",
      date: "Coming Soon",
      href: "",
      image: "/images/news-02.webp",
      placeholder: true,
    },
    {
      id: "placeholder-03",
      category: "STUDIO",
      title: "Coming Soon",
      excerpt: "Studio notes and launch news will live in this feed.",
      date: "Coming Soon",
      href: "",
      image: "/images/news-03.webp",
      placeholder: true,
    },
  ] satisfies NewsItem[],

  about: {
    title: "WE BUILD GAMES.",
    body: "RAKN LABS is an independent game studio focused on creating ambitious interactive experiences. We chase bold ideas, sharp technology, and worlds that stay with you long after the screen goes dark.",
  },

  careers: {
    title: "THE LAB IS TAKING SHAPE.",
    body: "Open roles will appear here as the studio grows. If you want to build ambitious games with us, follow the lab and stay close.",
    openRoles: [] as { title: string; location: string; href: string }[],
  },
};

export type SiteConfig = typeof siteConfig;

export function getLivePlatforms() {
  return siteConfig.featuredGame.platforms.filter(
    (platform) => platform.visible && platform.href,
  );
}

export function getLiveSocialLinks() {
  return siteConfig.socialLinks.filter((link) => Boolean(link.href));
}

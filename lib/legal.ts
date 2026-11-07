import { siteConfig } from "@/lib/siteConfig";

export const legal = {
  siteUrl: siteConfig.siteUrl,
  privacyEmail: "raknlabs@gmail.com",
  effectiveDate: "30 September 2026",
  lastUpdated: "30 September 2026",
  deletionLastUpdated: "1 October 2026",
  termsEffectiveDate: "7 November 2026",
  termsLastUpdated: "7 November 2026",
  blazeball: {
    name: "Blazeball",
    packageName: "com.raknlabs.blazeball",
  },
} as const;

import { About } from "@/components/About";
import { Careers } from "@/components/Careers";
import { FeaturedGame } from "@/components/FeaturedGame";
import { Footer } from "@/components/Footer";
import { GameTrailer } from "@/components/GameTrailer";
import { GamesGrid } from "@/components/GamesGrid";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { News } from "@/components/News";
import { Social } from "@/components/Social";
import { assetExists } from "@/lib/assets";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  const game = siteConfig.featuredGame;

  const screenshotAvailability = game.screenshots.map((src) => assetExists(src));
  const gamesAvailability = Object.fromEntries(
    siteConfig.games.map((item) => [item.id, assetExists(item.image)]),
  );
  const newsAvailability = Object.fromEntries(
    siteConfig.news.map((item) => [item.id, assetExists(item.image)]),
  );

  return (
    <>
      <Navbar />
      <main>
        <Hero heroAvailable={assetExists(game.heroImage)} />
        <FeaturedGame
          coverAvailable={assetExists(game.coverImage)}
          logoAvailable={assetExists(game.logoImage)}
          screenshotAvailability={screenshotAvailability}
        />
        <GameTrailer coverAvailable={assetExists(game.trailerCover)} />
        <GamesGrid availability={gamesAvailability} />
        <About />
        <News availability={newsAvailability} />
        <Careers />
        <Social />
      </main>
      <Footer />
    </>
  );
}

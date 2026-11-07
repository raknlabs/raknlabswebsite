import type { Metadata } from "next";
import Link from "next/link";
import {
  DocCallout,
  DocPage,
  DocSection,
  DocSubheading,
} from "@/components/DocPage";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms and Conditions — Blazeball",
  description:
    "Terms and Conditions of use for the Blazeball mobile game by RAKN LABS (com.raknlabs.blazeball).",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--nav-h)]">
        <DocPage
          kicker="Legal"
          title="Terms and Conditions — Blazeball"
          meta={
            <>
              Application: <strong>Blazeball</strong> (Android package{" "}
              <code>{legal.blazeball.packageName}</code>)
              <br />
              Developer: <strong>RAKN LABS</strong>
              <br />
              Website:{" "}
              <a href={legal.siteUrl}>{legal.siteUrl.replace("https://", "")}</a>
              <br />
              Effective date: {legal.termsEffectiveDate}
              <br />
              Last updated: {legal.termsLastUpdated}
              <br />
              Related: <Link href="/privacy">Privacy Policy</Link>
              {" · "}
              <Link href="/delete-account">Delete account</Link>
            </>
          }
        >
          <DocSection index="01" title="Developer identification">
            <p>
              These Terms and Conditions (the &ldquo;Terms&rdquo;) govern your
              access to and use of the mobile game <strong>Blazeball</strong>{" "}
              (the &ldquo;App&rdquo;, the &ldquo;Game&rdquo;) and related online
              services, including accounts, cloud save, the in-game shop, and
              multiplayer.
            </p>
            <p>
              The App is developed and operated by{" "}
              <strong>RAKN LABS</strong> (&ldquo;RAKN LABS&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
            </p>
            <ul>
              <li>
                Developer: <strong>RAKN LABS</strong>
              </li>
              <li>
                Game: <strong>Blazeball</strong>
              </li>
              <li>
                Android package: <code>{legal.blazeball.packageName}</code>
              </li>
              <li>
                Website:{" "}
                <a href={legal.siteUrl}>
                  {legal.siteUrl.replace("https://", "")}
                </a>
              </li>
              <li>
                Contact email:{" "}
                <a href={`mailto:${legal.privacyEmail}`}>
                  {legal.privacyEmail}
                </a>
              </li>
            </ul>
            <p>
              Personal data is handled as described in our{" "}
              <Link href="/privacy">Privacy Policy</Link>. If these Terms and
              the Privacy Policy conflict on a privacy matter, the Privacy
              Policy controls for that matter.
            </p>
          </DocSection>

          <DocSection index="02" title="Acceptance of these Terms">
            <p>
              By downloading, installing, creating an account, or playing
              Blazeball, you agree to these Terms. If you do not agree, do not
              use the App.
            </p>
            <p>
              You must be at least 13 years old, or the minimum age required in
              your country to use online services, whichever is higher. If you
              are under the age of majority where you live, you may use the App
              only with the involvement and consent of a parent or legal
              guardian, who agrees to these Terms on your behalf.
            </p>
            <p>
              Blazeball includes optional online features (sign-in, cloud save,
              friends, and multiplayer). Some features require an internet
              connection and a RAKN LABS account. Offline or local play, where
              available, may still be limited by device, store, or platform
              rules.
            </p>
            <p>
              Additional terms may apply from third parties that you use with
              the App, including <strong>Google Play</strong> (distribution and
              billing), <strong>Google Sign-In</strong> (optional), our account
              and save backend, and our multiplayer networking provider. You
              are responsible for complying with those terms as well.
            </p>
          </DocSection>

          <DocSection index="03" title="Use of the application">
            <p>
              We grant you a personal, limited, revocable, non-exclusive,
              non-transferable license to install and play Blazeball on devices
              you own or control, solely for your own entertainment, and subject
              to these Terms and the rules of the platform store from which you
              obtained the App.
            </p>

            <DocSubheading>3.1 Fair play</DocSubheading>
            <p>
              Blazeball is a competitive team sports game (matches, campaign /
              league play, practice, and related modes). You agree to play
              fairly and not to disrupt other players.
            </p>
            <ul>
              <li>
                Do not cheat, exploit bugs, use unauthorized bots, scripts,
                mods, or automation.
              </li>
              <li>
                Do not manipulate matchmaking, throw matches in bad faith, or
                abuse game systems to gain an unfair advantage.
              </li>
              <li>
                Do not harass, threaten, impersonate, or abuse other players or
                RAKN LABS staff.
              </li>
              <li>
                Do not use offensive, hateful, or illegal names, messages, or
                content where the App allows player-visible text.
              </li>
              <li>
                Do not interfere with servers, accounts, or other players&rsquo;
                progress.
              </li>
            </ul>

            <DocSubheading>3.2 Restrictions</DocSubheading>
            <p>You may not, except as allowed by mandatory law:</p>
            <ul>
              <li>
                Copy, sell, rent, sublicense, or commercially exploit the App
                or any part of it.
              </li>
              <li>
                Reverse engineer, decompile, or attempt to extract source
                code, assets, or non-public data.
              </li>
              <li>
                Remove or alter copyright, trademark, or proprietary notices.
              </li>
              <li>
                Bypass security, access controls, or regional / platform
                restrictions.
              </li>
              <li>
                Use the App to transmit malware or to attack our services or
                other users.
              </li>
              <li>
                Scrape, mine, or bulk-export game data, accounts, or content.
              </li>
            </ul>
            <p>
              We may update, patch, add, change, or retire modes, characters
              (&ldquo;Blazers&rdquo;), maps, items, balance, events, or features
              at any time. Competitive fairness and live-service operation may
              require changes that affect existing progress or virtual items.
            </p>
          </DocSection>

          <DocSection index="04" title="In-app purchases">
            <p>
              Blazeball may offer digital content for purchase or for virtual
              currency earned or bought in the Game. This includes, without
              limitation:
            </p>
            <ul>
              <li>
                Cosmetic <strong>skins</strong> and other visual items for
                Blazers
              </li>
              <li>
                Unlocks of playable <strong>Blazers</strong> and related content
              </li>
              <li>
                Equipment, items, and shop offers (including featured shop
                content and loot / boxes)
              </li>
              <li>
                Virtual currencies such as gold and gems, and other entitlements
                stored on your account
              </li>
            </ul>

            <DocSubheading>4.1 Payments</DocSubheading>
            <p>
              Real-money payments, if offered, are processed by{" "}
              <strong>Google Play Billing</strong> (or another official platform
              store on that device). RAKN LABS does not collect or store your
              payment card numbers in the App. Prices, taxes, and payment
              methods are those shown by the store at checkout.
            </p>
            <p>
              Virtual currency and digital items have{" "}
              <strong>no cash value</strong>. They are a limited license to use
              content in Blazeball, not real-world money, property, or a
              transferable asset. You may not sell, trade, or transfer accounts,
              gems, gold, skins, Blazers, or other virtual items outside the
              App, except where we expressly allow it inside the Game.
            </p>

            <DocSubheading>4.2 Refunds</DocSubheading>
            <p>
              Digital purchases are generally final once delivered to your
              account. Refunds are handled according to:
            </p>
            <ul>
              <li>
                the refund policy of <strong>Google Play</strong> (or the store
                you used); and
              </li>
              <li>
                any mandatory consumer-protection law that applies to you.
              </li>
            </ul>
            <p>
              If you believe a purchase failed, was duplicated, or was not
              credited, contact{" "}
              <a href={`mailto:${legal.privacyEmail}`}>{legal.privacyEmail}</a>{" "}
              from the email linked to your account, and also use the platform
              store&rsquo;s purchase support tools. We may restore missing
              entitlements after we verify the store receipt; we are not
              required to refund where the store has already delivered the
              content, except where the law says otherwise.
            </p>
            <p>
              Unused virtual currency, unopened boxes, and unused items are not
              redeemable for cash. If we reasonably determine that content was
              obtained through fraud, chargeback abuse, or a violation of these
              Terms, we may remove that content and suspend the account.
            </p>
            <DocCallout>
              Parents and guardians should use Google Play family and
              purchase-approval controls to limit spending by minors.
            </DocCallout>
          </DocSection>

          <DocSection index="05" title="Intellectual property">
            <p>
              Blazeball and all related content are owned by RAKN LABS or our
              licensors. This includes, without limitation:
            </p>
            <ul>
              <li>the Blazeball name, logos, and branding</li>
              <li>
                Blazers (characters), names, designs, animations, and abilities
              </li>
              <li>maps, arenas, user interface, icons, and visual effects</li>
              <li>
                audio, music, sound effects, and voice or cinematic material
              </li>
              <li>code, documentation, and other software in the App</li>
              <li>in-game text, tutorials, and shop presentation</li>
            </ul>
            <p>
              Purchasing or unlocking a skin, Blazer, item, or other digital
              content does <strong>not</strong> transfer ownership. You receive
              a limited license to use that content inside Blazeball while your
              account is in good standing and the App remains available.
            </p>
            <p>
              You may not use RAKN LABS or Blazeball names, characters, or
              artwork to create competing products, merchandise, or commercial
              content without our prior written permission. Fan content that is
              non-commercial and does not suggest official endorsement may be
              tolerated; we can ask you to take it down if it harms the Game or
              our rights.
            </p>
          </DocSection>

          <DocSection index="06" title="Accounts and data">
            <DocSubheading>6.1 Creating and securing an account</DocSubheading>
            <p>
              Online features may require an account created with email and
              password or optional Google Sign-In. You agree to provide accurate
              information and to keep your login details confidential. You are
              responsible for activity on your account unless you tell us of
              unauthorized access promptly.
            </p>
            <p>
              Cloud save may store campaign / league progress, Blazer levels
              and XP, skill unlocks, inventory, cosmetics, shop entitlements,
              currencies, achievements, career stats, friends / invites, and
              other gameplay state needed to restore your account on another
              device.
            </p>

            <DocSubheading>6.2 Suspension and termination</DocSubheading>
            <p>
              We may suspend, restrict, or close an account, or remove content,
              if we reasonably believe you have violated these Terms, cheated,
              abused other players, committed fraud, or created risk to the
              service. We may also act where required by law or platform rules.
            </p>
            <p>
              You may stop using the App at any time. You may delete your
              account from the App (
              <strong>Options → Account → Delete my account</strong>) or
              through the{" "}
              <Link href="/delete-account">account deletion page</Link>.
              Deletion removes the account and associated cloud progress as
              described in the Privacy Policy. Some local files on other
              devices, store records, and short-lived backups held by providers
              may remain for a technical period.
            </p>
            <p>
              We do not guarantee that the App or any particular mode will
              remain available indefinitely. If we discontinue online services,
              we will try to give reasonable notice on the website or in the App
              when practical.
            </p>
          </DocSection>

          <DocSection index="07" title="Limitation of liability">
            <p>
              Blazeball is provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis. Online play depends on your device,
              internet connection, Google Play, and third-party services. We do
              not warrant that the App will be uninterrupted, error-free, or
              free of loss of progress.
            </p>
            <p>To the maximum extent permitted by law:</p>
            <ul>
              <li>
                we are not liable for indirect, incidental, special,
                consequential, or punitive damages;
              </li>
              <li>
                we are not liable for lost profits, lost data, lost progress, or
                lost virtual items, except where we must restore them under
                store rules or mandatory law;
              </li>
              <li>
                our total liability arising out of these Terms or the App is
                limited to the greater of (a) the amount you paid to us for
                Blazeball in-app purchases in the 12 months before the claim, or
                (b) fifty euros (EUR 50) or the equivalent in your local
                currency.
              </li>
            </ul>
            <p>
              Nothing in these Terms excludes or limits liability that cannot be
              excluded under applicable law, including liability for death or
              personal injury caused by negligence, fraud, or mandatory consumer
              rights in your country of residence (for example in the EEA/UK).
              If you are a consumer, you keep those rights.
            </p>
          </DocSection>

          <DocSection index="08" title="Modifications">
            <p>
              We may update these Terms to reflect new features, legal
              requirements, or how Blazeball is operated. The &ldquo;Last
              updated&rdquo; date at the top will change when we do. The current
              version will be published at{" "}
              <Link href="/terms">
                {legal.siteUrl.replace("https://", "")}/terms
              </Link>
              .
            </p>
            <p>
              If a change is material, we will try to provide notice in the App
              or on our website. Continued use of the App after the updated
              Terms take effect constitutes acceptance, except where additional
              consent is required by law. If you do not agree, stop using the
              App and delete your account.
            </p>
          </DocSection>

          <DocSection index="09" title="Contact">
            <p>
              For questions about these Terms, support, purchases, or the Game:
            </p>
            <p>
              <strong>RAKN LABS</strong> — Blazeball Support
              <br />
              Email:{" "}
              <a href={`mailto:${legal.privacyEmail}`}>{legal.privacyEmail}</a>
              <br />
              Web:{" "}
              <a href={legal.siteUrl}>{legal.siteUrl.replace("https://", "")}</a>
              <br />
              Privacy: <Link href="/privacy">Privacy Policy</Link>
              <br />
              Account deletion:{" "}
              <Link href="/delete-account">Delete account</Link>
            </p>
            <DocCallout>
              Please email us from the address linked to your Blazeball account
              when the request concerns that account, a purchase, or a
              suspension.
            </DocCallout>
          </DocSection>

          <p className="border-t border-white/10 pt-8 text-sm text-white/35">
            © {new Date().getFullYear()} RAKN LABS. These Terms apply to
            Blazeball (
            <code className="font-mono">{legal.blazeball.packageName}</code>).
          </p>
        </DocPage>
      </main>
      <Footer />
    </>
  );
}

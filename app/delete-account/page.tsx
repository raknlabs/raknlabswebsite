import type { Metadata } from "next";
import Link from "next/link";
import { AccountDeletionWidget } from "@/components/blazeball/AccountDeletionWidget";
import {
  DocCallout,
  DocPage,
  DocPath,
  DocSection,
} from "@/components/DocPage";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Delete Your Blazeball Account",
  description:
    "Delete your Blazeball account and all associated cloud data (com.raknlabs.blazeball).",
  alternates: { canonical: "/delete-account" },
};

const deletionRequestMailto = `mailto:${legal.privacyEmail}?subject=${encodeURIComponent(
  "Blazeball account deletion request",
)}`;

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--nav-h)]">
        <DocPage
          kicker="Account"
          title="Delete your Blazeball account"
          meta={
            <>
              App: <strong>Blazeball</strong> (
              <code>{legal.blazeball.packageName}</code>)
              <br />
              Developer: <strong>RAKN LABS</strong>
              <br />
              Last updated: {legal.deletionLastUpdated}
            </>
          }
        >
          <DocSection index="01" title="Delete your account here">
            <p>
              Sign in with your Blazeball account below to permanently delete
              it. This is the same deletion used inside the game, so your
              account and cloud progress are removed immediately.
            </p>
            <noscript>
              <DocCallout tone="danger">
                This form needs JavaScript. Please use the in-app flow in
                section 2, or email us as described in section 3.
              </DocCallout>
            </noscript>
            <div className="mt-7">
              <AccountDeletionWidget />
            </div>
          </DocSection>

          <DocSection index="02" title="Delete from inside the app">
            <p>If you still have Blazeball installed and can sign in:</p>
            <ol>
              <li>
                Open <strong>Blazeball</strong> and sign in to the account you
                want to delete.
              </li>
              <li>
                Open <strong>Options</strong>.
              </li>
              <li>
                Tap <strong>Account</strong>.
              </li>
              <li>
                Tap <strong>Delete my account</strong>.
              </li>
              <li>Confirm deletion.</li>
            </ol>
            <DocPath>
              Options → Account → Delete my account → Confirm
            </DocPath>
            <DocCallout tone="danger">
              Deletion is permanent. Your account, email link, user ID and cloud
              progress associated with that account will be removed.
            </DocCallout>
          </DocSection>

          <DocSection index="03" title="Request deletion by email">
            <p>
              If you cannot use the form or the app, email us from the{" "}
              <strong>same email address</strong> used for your Blazeball
              account:
            </p>
            <p>
              <a href={deletionRequestMailto}>{legal.privacyEmail}</a>
            </p>
            <p>Include:</p>
            <ul>
              <li>
                Subject: <strong>Blazeball account deletion request</strong>
              </li>
              <li>The email of the account to delete</li>
              <li>
                Optional: approximate creation date or username / display name
              </li>
            </ul>
            <p>
              We will verify ownership and delete the account and associated
              cloud data. We aim to complete verified requests as soon as
              possible and within applicable legal deadlines.
            </p>
          </DocSection>

          <DocSection index="04" title="What gets deleted">
            <ul>
              <li>Authentication account (email / sign-in)</li>
              <li>User ID and profile data linked to that account</li>
              <li>
                Cloud-saved game progress (campaign, blazers, inventory,
                cosmetics, achievements and related cloud records)
              </li>
            </ul>
            <p>
              Local data remaining on a device may be cleared when you delete
              from the app on that device, or by uninstalling the app. Purchases
              handled by Google Play follow Google&rsquo;s own policies.
            </p>
          </DocSection>

          <DocSection index="05" title="More information">
            <p>
              Full details are in our{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>
            <p>
              Need to keep your account but change your password?{" "}
              <Link href="/reset-password">Reset your password</Link>.
            </p>
            <p>
              Contact:{" "}
              <a href={`mailto:${legal.privacyEmail}`}>{legal.privacyEmail}</a>
            </p>
          </DocSection>

          <p className="border-t border-white/10 pt-8 text-sm text-white/35">
            Account deletion page for Blazeball (
            <code className="font-mono">{legal.blazeball.packageName}</code>).
          </p>
        </DocPage>
      </main>
      <Footer />
    </>
  );
}

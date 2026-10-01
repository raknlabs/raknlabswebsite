import type { Metadata } from "next";
import Link from "next/link";
import { PasswordResetWidget } from "@/components/blazeball/PasswordResetWidget";
import { DocCallout, DocPage, DocSection } from "@/components/DocPage";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Reset Your Blazeball Password",
  description:
    "Set a new password for your Blazeball account (com.raknlabs.blazeball).",
  // Reached from an emailed link, so it should not surface in search results.
  robots: { index: false, follow: false },
};

export default function ResetPasswordPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--nav-h)]">
        <DocPage
          kicker="Account"
          title="Set a new password"
          meta={
            <>
              App: <strong>Blazeball</strong> (
              <code>{legal.blazeball.packageName}</code>)
              <br />
              Developer: <strong>RAKN LABS</strong>
            </>
          }
        >
          <noscript>
            <DocCallout tone="danger">
              This page needs JavaScript enabled. Please open it in a different
              browser, or email {legal.privacyEmail} for help.
            </DocCallout>
          </noscript>

          <PasswordResetWidget />

          <DocSection title="Having trouble?">
            <p>
              If you created your account with <strong>Google</strong>, you do
              not have a password — just use the{" "}
              <strong>Sign in with Google</strong> button in the game.
            </p>
            <p>
              Need to delete your account instead? Go to{" "}
              <Link href="/delete-account">Delete account</Link>.
            </p>
            <p>
              Contact:{" "}
              <a href={`mailto:${legal.privacyEmail}`}>{legal.privacyEmail}</a>
            </p>
          </DocSection>
        </DocPage>
      </main>
      <Footer />
    </>
  );
}

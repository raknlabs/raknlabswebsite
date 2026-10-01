import type { Metadata } from "next";
import Link from "next/link";
import { PasswordResetWidget } from "@/components/blazeball/PasswordResetWidget";
import { DocCallout, DocPage, DocSection } from "@/components/DocPage";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { legal } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Blazeball Account",
  description:
    "Sign in to your Blazeball account to reset your password or delete the account (com.raknlabs.blazeball).",
  alternates: { canonical: "/account" },
};

export default function AccountPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--nav-h)]">
        <DocPage
          kicker="Account"
          title="Blazeball account"
          meta={
            <>
              App: <strong>Blazeball</strong> (
              <code>{legal.blazeball.packageName}</code>)
              <br />
              Developer: <strong>RAKN LABS</strong>
            </>
          }
        >
          <DocSection index="01" title="Sign in to reset your password">
            <p>
              Enter the email of your Blazeball account. We will send you a
              one-time link. Open it on this device to choose a new password.
            </p>
            <noscript>
              <DocCallout tone="danger">
                This form needs JavaScript. Email {legal.privacyEmail} if you
                cannot use it.
              </DocCallout>
            </noscript>
            <div className="mt-7">
              <PasswordResetWidget variant="login" />
            </div>
          </DocSection>

          <DocSection index="02" title="Other account actions">
            <p>
              Need to permanently remove the account instead? Use the{" "}
              <Link href="/delete-account">account deletion page</Link>.
            </p>
            <p>
              How we handle your data is in the{" "}
              <Link href="/privacy">Privacy Policy</Link>.
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

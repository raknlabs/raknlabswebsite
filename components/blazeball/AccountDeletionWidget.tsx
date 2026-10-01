"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Field,
  Panel,
  type Status,
  StatusMessage,
  SubmitButton,
  Tabs,
} from "@/components/blazeball/FormControls";
import { legal } from "@/lib/legal";
import {
  anonHeaders,
  apiRequest,
  AUTH_URL,
  consumeAuthFragment,
  emailRedirectTo,
  errorText,
  REST_URL,
  userHeaders,
} from "@/lib/supabase";

type Mode = "password" | "link";
type Step = "auth" | "confirm" | "deleted";

const tabs = [
  { id: "password", label: "Email and password" },
  { id: "link", label: "Google sign-in / forgot password" },
];

export function AccountDeletionWidget() {
  const [mode, setMode] = useState<Mode>("password");
  const [step, setStep] = useState<Step>("auth");
  const [status, setStatus] = useState<Status>(null);
  const [busy, setBusy] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [linkEmail, setLinkEmail] = useState("");

  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [confirmedEmail, setConfirmedEmail] = useState<string | null>(null);

  // Returning from the emailed confirmation link.
  useEffect(() => {
    const { accessToken: token, error } = consumeAuthFragment();
    if (!token && !error) return;

    let active = true;

    void (async () => {
      if (error) {
        if (active) {
          setStatus({
            kind: "error",
            text: `${error} Request a new one below.`,
          });
        }
        return;
      }
      if (!token) return;

      if (active) {
        setAccessToken(token);
        setStep("confirm");
        setStatus({
          kind: "info",
          text: "Identity confirmed. Review the warning below and confirm the deletion.",
        });
      }

      try {
        const result = await apiRequest(
          "GET",
          `${AUTH_URL}/user`,
          userHeaders(token),
        );
        if (!active) return;
        const resolved = result.ok ? result.json?.email : null;
        if (typeof resolved === "string") setConfirmedEmail(resolved);
      } catch {
        // Only used to display the address; deletion works without it.
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  async function handlePasswordSignIn(event: React.FormEvent) {
    event.preventDefault();
    setStatus(null);

    if (!email.trim() || !password) {
      setStatus({ kind: "error", text: "Enter your email and password." });
      return;
    }

    setBusy(true);
    try {
      const result = await apiRequest(
        "POST",
        `${AUTH_URL}/token?grant_type=password`,
        anonHeaders(),
        { email: email.trim(), password },
      );

      const token = result.json?.access_token;
      if (!result.ok || typeof token !== "string") {
        setStatus({
          kind: "error",
          text: `${errorText(result.json, result.status)}\n\nIf you created your account with Google, use the other tab.`,
        });
        return;
      }

      const user = result.json?.user as { email?: string } | undefined;
      setAccessToken(token);
      setConfirmedEmail(user?.email ?? email.trim());
      setPassword("");
      setStep("confirm");
      setStatus(null);
    } catch (error) {
      setStatus({
        kind: "error",
        text: `Network error: ${(error as Error).message}`,
      });
    } finally {
      setBusy(false);
    }
  }

  async function handleSendLink(event: React.FormEvent) {
    event.preventDefault();
    setStatus(null);

    const target = linkEmail.trim();
    if (!target) {
      setStatus({ kind: "error", text: "Enter your account email." });
      return;
    }

    setBusy(true);
    try {
      const redirectTo = emailRedirectTo("/delete-account");
      const result = await apiRequest(
        "POST",
        `${AUTH_URL}/recover?redirect_to=${encodeURIComponent(redirectTo)}`,
        anonHeaders(),
        { email: target, redirect_to: redirectTo },
      );

      if (!result.ok) {
        setStatus({
          kind: "error",
          text: errorText(result.json, result.status),
        });
        return;
      }

      // Supabase answers 200 even for unknown addresses, so accounts are not enumerable.
      setStatus({
        kind: "ok",
        text: `Email sent. Open the link we just sent to ${target} on this device and you will come back here to confirm the deletion. The link expires after a short time.`,
      });
    } catch (error) {
      setStatus({
        kind: "error",
        text: `Network error: ${(error as Error).message}`,
      });
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete() {
    if (!accessToken) {
      setStatus({
        kind: "error",
        text: "Your session expired. Please sign in again.",
      });
      return;
    }

    setBusy(true);
    try {
      // Mirrors the in-game flow: the RPC first, DELETE /user as a fallback.
      const rpc = await apiRequest(
        "POST",
        `${REST_URL}/rpc/delete_own_account`,
        userHeaders(accessToken),
        {},
      );

      if (!rpc.ok) {
        const fallback = await apiRequest(
          "DELETE",
          `${AUTH_URL}/user`,
          userHeaders(accessToken),
        );

        if (!fallback.ok && fallback.status !== 204) {
          setStatus({
            kind: "error",
            text: `We could not delete the account: ${errorText(
              fallback.json ?? rpc.json,
              fallback.status,
            )}\n\nPlease email ${legal.privacyEmail} and we will remove it manually.`,
          });
          return;
        }
      }

      setAccessToken(null);
      setStep("deleted");
      setStatus({
        kind: "ok",
        text: "Your account and its cloud data have been permanently deleted. You can uninstall the app to remove any remaining local data.",
      });
    } catch (error) {
      setStatus({
        kind: "error",
        text: `Network error: ${(error as Error).message}`,
      });
    } finally {
      setBusy(false);
    }
  }

  function handleCancel() {
    setAccessToken(null);
    setConfirmedEmail(null);
    setStep("auth");
    setStatus({
      kind: "info",
      text: "Cancelled. Your account has not been deleted.",
    });
  }

  if (step === "deleted") {
    return (
      <Panel>
        <h3 className="font-display text-lg font-semibold uppercase tracking-[0.06em] text-white">
          Account deleted
        </h3>
        <StatusMessage status={status} />
      </Panel>
    );
  }

  if (step === "confirm") {
    return (
      <Panel className="border-rakn-red/40">
        <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/45">
          Signed in as
        </p>
        <p className="mt-2 font-mono text-[0.95rem] break-all text-white">
          {confirmedEmail ?? "your account"}
        </p>
        <p className="mt-6 border-l-2 border-rakn-red pl-5 text-[0.95rem] leading-relaxed text-white/80">
          This cannot be undone. Your sign-in account, user ID and all
          cloud-saved progress will be permanently deleted.
        </p>
        <SubmitButton
          type="button"
          tone="danger"
          busy={busy}
          busyLabel="Deleting…"
          onClick={handleDelete}
        >
          Permanently delete my account
        </SubmitButton>
        <SubmitButton
          type="button"
          tone="quiet"
          busy={false}
          busyLabel=""
          onClick={handleCancel}
        >
          Cancel
        </SubmitButton>
        <StatusMessage status={status} />
      </Panel>
    );
  }

  return (
    <div>
      <Tabs
        tabs={tabs}
        active={mode}
        ariaLabel="How to verify your account"
        onSelect={(id) => {
          setMode(id as Mode);
          setStatus(null);
        }}
      />
      <Panel className="border-t-0">
        {mode === "password" ? (
          <form onSubmit={handlePasswordSignIn}>
            <Field
              id="pw-email"
              label="Account email"
              type="email"
              value={email}
              onChange={setEmail}
              autoComplete="username"
              placeholder="you@example.com"
            />
            <Field
              id="pw-password"
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              autoComplete="current-password"
              placeholder="Your Blazeball password"
            />
            <SubmitButton busy={busy} busyLabel="Signing in…">
              Sign in to continue
            </SubmitButton>
          </form>
        ) : (
          <form onSubmit={handleSendLink}>
            <p className="text-[0.95rem] leading-relaxed text-white/65">
              If you created your account with Google, or you do not remember
              your password, we will email you a one-time confirmation link.
              Open it on this same device to finish the deletion.
            </p>
            <p className="mt-3 text-[0.88rem] text-white/40">
              Only want to change your password instead?{" "}
              <Link
                href="/reset-password"
                className="text-rakn-cyan underline decoration-rakn-cyan/35 underline-offset-[3px] transition hover:decoration-rakn-cyan"
              >
                Reset your password
              </Link>
              .
            </p>
            <Field
              id="link-email"
              label="Account email"
              type="email"
              value={linkEmail}
              onChange={setLinkEmail}
              autoComplete="username"
              placeholder="you@example.com"
            />
            <SubmitButton busy={busy} busyLabel="Sending…">
              Email me a deletion link
            </SubmitButton>
          </form>
        )}
        <StatusMessage status={status} />
      </Panel>
    </div>
  );
}

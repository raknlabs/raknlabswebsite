"use client";

import { useEffect, useState } from "react";
import {
  Field,
  Panel,
  type Status,
  StatusMessage,
  SubmitButton,
} from "@/components/blazeball/FormControls";
import {
  anonHeaders,
  apiRequest,
  AUTH_URL,
  consumeAuthFragment,
  emailRedirectTo,
  errorText,
  userHeaders,
} from "@/lib/supabase";

type Step = "request" | "setPassword" | "done";
type Variant = "reset" | "login";

export function PasswordResetWidget({
  variant = "reset",
}: {
  variant?: Variant;
}) {
  const [step, setStep] = useState<Step>("request");
  const [status, setStatus] = useState<Status>(null);
  const [busy, setBusy] = useState(false);

  const [requestEmail, setRequestEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [accountEmail, setAccountEmail] = useState<string | null>(null);

  // Arriving from the emailed reset link.
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
        setStep("setPassword");
      }

      try {
        const result = await apiRequest(
          "GET",
          `${AUTH_URL}/user`,
          userHeaders(token),
        );
        if (!active) return;
        const resolved = result.ok ? result.json?.email : null;
        if (typeof resolved === "string") setAccountEmail(resolved);
      } catch {
        // Display only; the password change works without it.
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  async function handleRequestLink(event: React.FormEvent) {
    event.preventDefault();
    setStatus(null);

    const target = requestEmail.trim();
    if (!target) {
      setStatus({ kind: "error", text: "Enter your account email." });
      return;
    }

    setBusy(true);
    try {
      const redirectTo = emailRedirectTo("/reset-password");
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
        text: `Email sent to ${target}. Open the link on this device to set your new password. It expires after a short time. Check your spam folder if you do not see it.`,
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

  async function handleSavePassword(event: React.FormEvent) {
    event.preventDefault();
    setStatus(null);

    if (password.length < 6) {
      setStatus({
        kind: "error",
        text: "The password must be at least 6 characters long.",
      });
      return;
    }
    if (password !== passwordRepeat) {
      setStatus({ kind: "error", text: "The two passwords do not match." });
      return;
    }
    if (!accessToken) {
      setStatus({
        kind: "error",
        text: "Your link expired. Request a new one below.",
      });
      setStep("request");
      return;
    }

    setBusy(true);
    try {
      const result = await apiRequest(
        "PUT",
        `${AUTH_URL}/user`,
        userHeaders(accessToken),
        { password },
      );

      if (!result.ok) {
        setStatus({
          kind: "error",
          text: errorText(result.json, result.status),
        });
        return;
      }

      setAccessToken(null);
      setPassword("");
      setPasswordRepeat("");
      setStep("done");
      setStatus({
        kind: "ok",
        text: "Password changed. You can now sign in inside the game.",
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

  if (step === "done") {
    return (
      <Panel>
        <h2 className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-white">
          Password updated
        </h2>
        <p className="mt-4 text-[0.98rem] leading-relaxed text-white/65">
          Go back to <strong className="text-white/90">Blazeball</strong>, open
          the login screen and sign in with your email and the new password.
        </p>
        <StatusMessage status={status} />
      </Panel>
    );
  }

  if (step === "setPassword") {
    return (
      <Panel>
        <h2 className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-white">
          Choose your new password
        </h2>
        {accountEmail ? (
          <p className="mt-3 font-mono text-[0.9rem] break-all text-white/55">
            {accountEmail}
          </p>
        ) : null}
        <form onSubmit={handleSavePassword}>
          <Field
            id="new-password"
            label="New password"
            type="password"
            value={password}
            onChange={setPassword}
            autoComplete="new-password"
            minLength={6}
            placeholder="At least 6 characters"
          />
          <Field
            id="new-password-repeat"
            label="Repeat new password"
            type="password"
            value={passwordRepeat}
            onChange={setPasswordRepeat}
            autoComplete="new-password"
            minLength={6}
            placeholder="Repeat it"
            hint="Avoid a password you already use on other sites."
          />
          <SubmitButton busy={busy} busyLabel="Saving…">
            Save new password
          </SubmitButton>
        </form>
        <StatusMessage status={status} />
      </Panel>
    );
  }

  return (
    <Panel>
      <h2 className="font-display text-xl font-semibold uppercase tracking-[0.06em] text-white">
        {variant === "login" ? "Sign in" : "Request a reset link"}
      </h2>
      <p className="mt-4 text-[0.98rem] leading-relaxed text-white/65">
        {variant === "login"
          ? "Use the email linked to your Blazeball account. We will send a one-time link so you can set a new password."
          : "Enter the email of your Blazeball account and we will send you a link to set a new password. Open the link on this same device."}
      </p>
      <form onSubmit={handleRequestLink}>
        <Field
          id="request-email"
          label="Account email"
          type="email"
          value={requestEmail}
          onChange={setRequestEmail}
          autoComplete="username"
          placeholder="you@example.com"
        />
        <SubmitButton busy={busy} busyLabel="Sending…">
          {variant === "login" ? "Email me a sign-in link" : "Email me a reset link"}
        </SubmitButton>
      </form>
      <StatusMessage status={status} />
    </Panel>
  );
}

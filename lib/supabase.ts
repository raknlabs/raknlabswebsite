/**
 * Same project and publishable key the game client uses.
 *
 * The publishable key is safe to ship to the browser: every table is behind
 * RLS and the deletion RPC requires a signed-in user session. The secret key
 * (sb_secret_...) must never appear here or in any NEXT_PUBLIC_ variable.
 */
export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://esupyxnnczhzsccpryrf.supabase.co";

export const SUPABASE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  "sb_publishable_U3SSmkD0wzj7bdS_IuDvCA_HQdcMnYS";

export const AUTH_URL = `${SUPABASE_URL}/auth/v1`;
export const REST_URL = `${SUPABASE_URL}/rest/v1`;

export type ApiResult = {
  ok: boolean;
  status: number;
  json: Record<string, unknown> | null;
};

export function anonHeaders(): HeadersInit {
  return {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
    "Content-Type": "application/json",
  };
}

export function userHeaders(token: string): HeadersInit {
  return {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}

export async function apiRequest(
  method: string,
  url: string,
  headers: HeadersInit,
  body?: unknown,
): Promise<ApiResult> {
  const response = await fetch(url, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const text = await response.text();
  let json: Record<string, unknown> | null = null;
  if (text) {
    try {
      json = JSON.parse(text) as Record<string, unknown>;
    } catch {
      // Some endpoints (e.g. DELETE /user) answer 204 with an empty body.
    }
  }

  return { ok: response.ok, status: response.status, json };
}

/** Supabase reports failures under several different keys depending on endpoint. */
export function errorText(
  payload: Record<string, unknown> | null,
  status: number,
): string {
  if (payload) {
    for (const key of [
      "msg",
      "error_description",
      "message",
      "error_message",
      "hint",
      "error",
    ]) {
      const value = payload[key];
      if (typeof value === "string" && value) return value;
    }
  }
  return `Request failed (HTTP ${status}).`;
}

/**
 * Reads the one-time token Supabase appends to the email link as a URL
 * fragment, then strips it from the address bar so it is not left in history.
 */
export function consumeAuthFragment(): {
  accessToken?: string;
  error?: string;
} {
  if (typeof window === "undefined") return {};

  const hash = window.location.hash;
  if (!hash || hash.length < 2) return {};

  const params = new URLSearchParams(hash.replace(/^#/, ""));
  const accessToken = params.get("access_token");
  const errorDescription = params.get("error_description");
  const errorCode = params.get("error");

  if (!accessToken && !errorDescription && !errorCode) return {};

  window.history.replaceState(null, "", window.location.pathname);

  if (accessToken) return { accessToken };
  return {
    error:
      errorDescription ?? "That link is invalid or has expired.",
  };
}

export function emailRedirectTo(): string {
  return `${window.location.origin}${window.location.pathname}`;
}

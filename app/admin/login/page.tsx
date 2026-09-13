"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";

const initialState: LoginState = {};

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="w-full max-w-sm">
        <p className="font-display text-2xl tracking-wide text-off-white">
          TLC
        </p>
        <h1 className="type-display mt-2 text-4xl text-off-white">
          Admin Login
        </h1>

        <form action={formAction} className="mt-10 space-y-6" noValidate>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-body text-xs font-semibold tracking-[0.25em] text-silver uppercase"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="username"
              className="w-full border-b border-off-white/30 bg-transparent py-3 font-body text-off-white focus:border-garnet-bright focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block font-body text-xs font-semibold tracking-[0.25em] text-silver uppercase"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full border-b border-off-white/30 bg-transparent py-3 font-body text-off-white focus:border-garnet-bright focus:outline-none"
            />
          </div>

          {state.error && (
            <p className="font-body text-sm text-garnet-bright">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-full bg-garnet px-8 py-4 font-body text-sm font-semibold tracking-[0.15em] text-off-white uppercase transition-colors hover:bg-garnet-bright disabled:opacity-60"
          >
            {pending ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

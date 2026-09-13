import type { ReactNode } from "react";
import Link from "next/link";
import { logout } from "./actions";

const adminNavLinks = [
  { label: "Dashboard", href: "/admin" },
  { label: "Positions", href: "/admin/positions" },
  { label: "Applications", href: "/admin/applications" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ink text-off-white">
      <header className="border-b border-off-white/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10">
          <div className="flex items-center gap-10">
            <Link href="/admin" className="font-display text-2xl tracking-wide">
              TLC ADMIN
            </Link>
            <nav className="hidden items-center gap-8 sm:flex">
              {adminNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-xs font-semibold tracking-[0.2em] text-silver uppercase hover:text-off-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="font-body text-xs font-semibold tracking-[0.2em] text-silver uppercase hover:text-off-white"
            >
              Log Out
            </button>
          </form>
        </div>
        <nav className="flex items-center gap-6 border-t border-off-white/10 px-6 py-3 sm:hidden">
          {adminNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs font-semibold tracking-[0.2em] text-silver uppercase hover:text-off-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10">
        {children}
      </main>
    </div>
  );
}

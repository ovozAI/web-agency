import Link from "next/link";
import type { ReactNode } from "react";

export function PrimaryButton({
  href,
  children,
  className = ""
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </Link>
  );
}

export function OutlineButton({
  href,
  children,
  className = ""
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink ${className}`}
    >
      {children}
    </Link>
  );
}

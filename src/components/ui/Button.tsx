import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold tracking-tight transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-navy-950 shadow-[0_8px_30px_-12px_rgb(43_159_232/0.65)] hover:bg-accent-strong hover:text-white hover:-translate-y-0.5",
  secondary:
    "bg-navy-900 text-white shadow-sm hover:bg-navy-800 hover:-translate-y-0.5 focus-visible:ring-navy-900",
  ghost:
    "border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/10",
  light:
    "border border-navy-900/15 bg-white text-navy-900 hover:border-navy-900/30 hover:bg-navy-900/[0.03]",
};

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant };

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(base, variants[variant], className)} {...props} />
  );
}

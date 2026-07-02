import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400",
  secondary:
    "bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 focus-visible:outline-primary-600 dark:bg-ink-900 dark:text-primary-300 dark:border-primary-800 dark:hover:bg-ink-800",
  ghost:
    "bg-transparent text-white border border-white/40 hover:bg-white/10 focus-visible:outline-white",
  gold: "bg-gold-500 text-ink-950 hover:bg-gold-400 focus-visible:outline-gold-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm min-h-[44px]",
  md: "px-6 py-3 text-sm min-h-[44px]",
  lg: "px-8 py-4 text-base min-h-[44px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, variant: _v, size: _s, className: _c, children: _children, ...buttonProps } =
    props as ButtonAsButton;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

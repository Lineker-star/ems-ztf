import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-ink-100 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

export function RatingStars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1" aria-label={`Note : ${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        const half = !filled && hasHalf && i === full;
        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className="h-4 w-4 text-gold-500"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={`star-half-${i}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              fill={filled ? "currentColor" : half ? `url(#star-half-${i})` : "none"}
              stroke="currentColor"
              strokeWidth="1"
              d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L10 14.9l-5.2 2.6.99-5.78-4.21-4.1 5.82-.85L10 1.5z"
            />
          </svg>
        );
      })}
      <span className="ml-1 text-xs font-medium text-ink-500">{rating.toFixed(1)}</span>
    </div>
  );
}

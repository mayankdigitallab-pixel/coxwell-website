type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function rateLimit({
  key,
  windowMs,
  limit,
}: {
  key: string;
  windowMs: number;
  limit: number;
}): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const b = buckets.get(key);

  if (!b || now >= b.resetAt) {
    const next: Bucket = { count: 1, resetAt: now + windowMs };
    buckets.set(key, next);
    return { allowed: true, remaining: limit - 1, resetAt: next.resetAt };
  }

  if (b.count >= limit) return { allowed: false, remaining: 0, resetAt: b.resetAt };

  b.count += 1;
  return { allowed: true, remaining: limit - b.count, resetAt: b.resetAt };
}


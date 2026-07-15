"use client";

import { useEffect, useState } from "react";

export function useViews(slug: string) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/views?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, [slug]);

  useEffect(() => {
    const seen = sessionStorage.getItem(`viewed:${slug}`);
    if (seen) return;

    fetch("/api/views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => {});

    sessionStorage.setItem(`viewed:${slug}`, "1");
  }, [slug]);

  return count;
}

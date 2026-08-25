import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = document.querySelector("article.article-prose");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const start = window.scrollY + rect.top - 80;
      const end = start + el.scrollHeight - window.innerHeight * 0.45;
      const t = (window.scrollY - start) / Math.max(1, end - start);
      setP(Math.min(100, Math.max(0, t * 100)));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-accent"
      style={{ width: `${p}%` }}
      aria-hidden
    />
  );
}

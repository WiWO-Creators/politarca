import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/content";
import { getGeo } from "@/lib/geo";
import { cn } from "@/lib/utils";

type Size = "hero" | "lead" | "mix" | "list";

export function StoryKicker({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  return (
    <p className={cn("rubric", className)}>
      <span className="place">{article.country}</span>
      {" · "}
      {article.rubric}
    </p>
  );
}

export function StoryTease({
  article,
  size = "mix",
  heading = "h3",
}: {
  article: Article;
  size?: Size;
  heading?: "h1" | "h2" | "h3";
}) {
  const Hed = heading;
  const isHero = size === "hero";
  const isLead = size === "lead";
  const isList = size === "list";

  const geo = getGeo(article);
  const photoClass = isHero
    ? "story-photo story-photo--hero"
    : isLead
      ? "story-photo story-photo--tall"
      : "story-photo";

  const hedClass = isHero ? "hed-hero mt-2" : isLead ? "hed-lead mt-1" : "hed-mix mt-1";
  const dekClass = isHero ? "dek-hero mt-3" : isLead ? "dek mt-2" : "dek-mix mt-2";

  return (
    <article className={cn("flex flex-col", isHero && "w-full")}>
      {isList ? null : (
        <Link
          to="/piezas/$slug"
          params={{ slug: article.slug }}
          className="block"
          tabIndex={-1}
        >
          <img
            src={article.image}
            alt={geo.alt}
            className={cn(photoClass, isHero && "bleed-photo")}
            loading={isHero ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={isHero ? "high" : "auto"}
          />
        </Link>
      )}
      <div className={cn(isHero && "max-w-3xl")}>
        <StoryKicker article={article} className={isList ? "mt-0" : "mt-3"} />
        <Hed className={hedClass}>
          <Link
            to="/piezas/$slug"
            params={{ slug: article.slug }}
            className="hed-link"
          >
            {article.title}
          </Link>
        </Hed>
        <p className={dekClass}>{isHero ? article.dek : article.excerpt}</p>
        <p className="byline mt-2">Por {article.byline}</p>
      </div>
    </article>
  );
}

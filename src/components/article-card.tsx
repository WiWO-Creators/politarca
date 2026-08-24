import type { Article } from "@/lib/content";
import { StoryTease } from "./story-tease";

export function ArticleCard({ article }: { article: Article }) {
  return <StoryTease article={article} size="mix" />;
}

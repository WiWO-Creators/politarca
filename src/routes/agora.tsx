import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";
import { sectionHead } from "@/lib/seo";

export const Route = createFileRoute("/agora")({
  component: () => <SectionPage id="agora" />,
  head: () => sectionHead("agora"),
});

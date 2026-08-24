import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";
import { sectionHead } from "@/lib/seo";

export const Route = createFileRoute("/erario")({
  component: () => <SectionPage id="erario" />,
  head: () => sectionHead("erario"),
});

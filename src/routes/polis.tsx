import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";
import { sectionHead } from "@/lib/seo";

export const Route = createFileRoute("/polis")({
  component: () => <SectionPage id="polis" />,
  head: () => sectionHead("polis"),
});

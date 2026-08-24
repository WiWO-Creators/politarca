import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";
import { sectionHead } from "@/lib/seo";

export const Route = createFileRoute("/vida-comun")({
  component: () => <SectionPage id="vida-comun" />,
  head: () => sectionHead("vida-comun"),
});

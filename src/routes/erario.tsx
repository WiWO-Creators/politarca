import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/erario")({
  component: () => <SectionPage id="erario" />,
  head: () => ({ meta: [{ title: "El Erario — el politarca" }] }),
});

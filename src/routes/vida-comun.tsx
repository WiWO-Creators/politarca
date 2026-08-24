import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/vida-comun")({
  component: () => <SectionPage id="vida-comun" />,
  head: () => ({ meta: [{ title: "Vida común — el politarca" }] }),
});

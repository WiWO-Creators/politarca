import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/polis")({
  component: () => <SectionPage id="polis" />,
  head: () => ({ meta: [{ title: "La Polis — el politarca" }] }),
});

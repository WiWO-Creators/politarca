import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/biblioteca")({
  component: () => <SectionPage id="biblioteca" />,
  head: () => ({ meta: [{ title: "Biblioteca — el politarca" }] }),
});

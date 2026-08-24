import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/frontera")({
  component: () => <SectionPage id="frontera" />,
  head: () => ({ meta: [{ title: "Frontera — el politarca" }] }),
});

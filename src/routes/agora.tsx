import { createFileRoute } from "@tanstack/react-router";
import { SectionPage } from "@/components/section-page";

export const Route = createFileRoute("/agora")({
  component: () => <SectionPage id="agora" />,
  head: () => ({ meta: [{ title: "El Ágora — el politarca" }] }),
});

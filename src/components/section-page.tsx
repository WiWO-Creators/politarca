import { Breadcrumbs } from "@/components/breadcrumbs";
import { StoryTease } from "@/components/story-tease";
import { articlesBySection, getSection, type SectionId } from "@/lib/content";

export function SectionPage({ id }: { id: SectionId }) {
  const section = getSection(id);
  const pieces = articlesBySection(id);
  const [hero, ...rest] = pieces;

  return (
    <main>
      <Breadcrumbs
        items={[
          { name: "Inicio", to: "/" },
          { name: section.name },
        ]}
      />
      <header className="page-wrap pb-10 pt-4 md:pb-14 md:pt-8">
        <p className="rubric">{section.name}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          {section.kicker}
        </h1>
        <p className="dek mt-4 max-w-2xl text-lg">{section.dek}</p>
      </header>

      {hero ? (
        <section className="page-wrap pb-12">
          <StoryTease article={hero} size={rest.length ? "lead" : "hero"} heading="h2" />
        </section>
      ) : (
        <p className="page-wrap pb-16 font-body italic text-subtle">Aún no hay piezas en esta sección.</p>
      )}

      {rest.length ? (
        <section className="page-wrap grid gap-10 pb-20 sm:grid-cols-2">
          {rest.map((a) => (
            <StoryTease key={a.slug} article={a} size="mix" />
          ))}
        </section>
      ) : null}
    </main>
  );
}

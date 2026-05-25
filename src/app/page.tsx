import { PROJECTS } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-32 md:px-10 lg:px-20">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Chunk 4 check
        </p>

        <h1 className="mt-6 font-sans text-5xl font-extralight tracking-tight text-foreground md:text-7xl">
          Cards online.
        </h1>

        <p className="mt-6 max-w-xl font-sans text-base text-muted-foreground">
          All 8 mock projects rendered as cards. Hover any card to see the
          image scale and the shadow appear. Clicking a card tries to navigate
          to <span className="font-mono text-xs">/work/[id]</span> — that route
          doesn&apos;t exist yet, so you&apos;ll hit a 404 by design.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
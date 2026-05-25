import { PROJECTS } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-32 md:px-10 lg:px-20">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Chunk 3 check
        </p>

        <h1 className="mt-6 font-sans text-5xl font-extralight tracking-tight text-foreground md:text-7xl">
          Site shell online.
        </h1>

        <p className="mt-6 max-w-xl font-sans text-base text-muted-foreground">
          The NavBar is now fixed at the top of every page with the dark-mode
          toggle built in. The Footer sits below this content. Both will appear
          on every route automatically because they live in the root layout.
        </p>

        <p className="mt-12 font-mono text-xs text-muted-foreground">
          {PROJECTS.length} projects in data — ready to be rendered as cards in the
          next chunk.
        </p>
      </div>
    </main>
  );
}
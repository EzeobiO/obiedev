export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-32 md:px-10 lg:px-20">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Scaffold check
        </p>
        <h1 className="mt-6 font-sans text-5xl font-extralight tracking-tight text-foreground md:text-7xl">
          Design system online.
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base text-muted-foreground">
          If this text is on an off-white background, the heading is near-black and very thin, 
          this paragraph is mid-gray, and the label above is monospace, the tokens are working.
        </p>
        <div className="mt-10 flex items-center gap-3">
          <span className="inline-block h-3 w-3 rounded-full bg-accent" />
          <span className="font-mono text-sm text-accent">Accent color</span>
        </div>
        <p className="mt-16 font-mono text-xs text-muted-foreground">
          To preview dark mode: open DevTools, select the &lt;html&gt; element, add class=&quot;dark&quot;.
        </p>
      </div>
    </main>
  );
}
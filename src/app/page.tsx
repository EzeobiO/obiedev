import Link from "next/link";
import { ArrowRight, Code2, PenTool, Wrench } from "lucide-react";
import {
  PROJECTS,
  CATEGORY_META,
  type Category,
} from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

const SERVICES = [
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Custom-built sites for small businesses — from simple brochure pages to full e-commerce platforms.",
  },
  {
    icon: PenTool,
    title: "Design & Prototyping",
    description:
      "High-fidelity mockups, design systems, and interactive prototypes — handed off ready to build.",
  },
  {
    icon: Wrench,
    title: "Custom Software",
    description:
      "Specialized tools, internal dashboards, and applications tailored to specific business needs.",
  },
];

export default function Home() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  const categoryCounts: Record<Category, number> = {
    live: 0,
    design: 0,
    concept: 0,
    software: 0,
  };
  PROJECTS.forEach((p) => {
    categoryCounts[p.category]++;
  });

  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="px-5 pt-40 pb-32 md:px-10 md:pt-48 md:pb-40 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Independent developer & designer
          </p>
          <h1 className="mt-6 max-w-[1000px] font-sans text-5xl font-extralight leading-[1.05] tracking-[-0.02em] text-foreground md:text-7xl lg:text-[96px]">
            Websites and software, built for the businesses that need them.
          </h1>
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
            I help small businesses get online with custom-built websites,
            design studies, and specialized tools — without the bloat of an
            agency.
          </p>
          <div className="mt-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-sans text-sm text-background transition-opacity hover:opacity-90"
            >
              See the work
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="px-5 py-24 md:px-10 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="mb-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Categories
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {(Object.keys(CATEGORY_META) as Category[]).map((cat) => {
              const meta = CATEGORY_META[cat];
              return (
                <Link
                  key={cat}
                  href={`/work?category=${cat}`}
                  className="group relative flex flex-col justify-between rounded-lg border border-border bg-card p-8 transition-colors hover:border-foreground md:p-10 lg:min-h-[280px] lg:p-12"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-sans text-3xl font-light tracking-tight text-foreground md:text-4xl">
                      {meta.label}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(categoryCounts[cat]).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-6 max-w-sm font-sans text-base text-muted-foreground">
                    {meta.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="px-5 py-24 md:px-10 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Featured work
              </p>
              <h2 className="font-sans text-4xl font-extralight tracking-tight text-foreground md:text-5xl">
                Selected projects.
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden items-center gap-2 font-sans text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
            >
              All work
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5 py-24 md:px-10 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Services
          </p>
          <h2 className="mb-16 max-w-2xl font-sans text-4xl font-extralight tracking-tight text-foreground md:text-5xl">
            What I do.
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {SERVICES.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <Icon size={28} strokeWidth={1.25} className="text-foreground" />
                <h3 className="mt-6 font-sans text-xl font-medium text-foreground">
                  {title}
                </h3>
                <p className="mt-3 font-sans text-base text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-32 md:px-10 lg:px-20">
        <div className="mx-auto max-w-[1280px] border-t border-border pt-20">
          <h2 className="max-w-3xl font-sans text-4xl font-extralight tracking-tight text-foreground md:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mt-6 max-w-xl font-sans text-base text-muted-foreground">
            I take on a small number of new engagements each quarter. Reach out
            and let&apos;s see if it&apos;s a fit.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-sans text-sm text-background transition-opacity hover:opacity-90"
          >
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
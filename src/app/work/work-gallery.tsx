"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { PROJECTS, getAverageRating, type Category } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { TagChip } from "@/components/tag-chip";
import { cn } from "@/lib/utils";

type SortOption = "recent" | "rated" | "commented";
type FilterCategory = Category | "all";

const SORT_LABELS: Record<SortOption, string> = {
recent: "Recent",
rated: "Highest Rated",
commented: "Most Commented",
};

const SORT_OPTIONS: SortOption[] = ["recent", "rated", "commented"];
const CATEGORIES: FilterCategory[] = [
"all",
"live",
"design",
"concept",
"software",
];

function parseCategory(value: string | null): FilterCategory {
if (
    value === "live" ||
    value === "design" ||
    value === "concept" ||
    value === "software"
) {
    return value;
}
return "all";
}

function parseSort(value: string | null): SortOption {
if (value === "rated" || value === "commented") return value;
return "recent";
}

export function WorkGallery() {
const router = useRouter();
const pathname = usePathname();
const searchParams = useSearchParams();

const filter = parseCategory(searchParams.get("category"));
const sort = parseSort(searchParams.get("sort"));

const [sortOpen, setSortOpen] = useState(false);
const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Escape
useEffect(() => {
    if (!sortOpen) return;

    const handleClick = (e: MouseEvent) => {
    if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
    ) {
        setSortOpen(false);
    }
    };

    const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setSortOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
    document.removeEventListener("mousedown", handleClick);
    document.removeEventListener("keydown", handleKey);
    };
}, [sortOpen]);

const updateUrl = (nextFilter: FilterCategory, nextSort: SortOption) => {
    const params = new URLSearchParams();
    if (nextFilter !== "all") params.set("category", nextFilter);
    if (nextSort !== "recent") params.set("sort", nextSort);
    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
};

const handleFilterChange = (cat: FilterCategory) => updateUrl(cat, sort);
const handleSortChange = (opt: SortOption) => {
    setSortOpen(false);
    updateUrl(filter, opt);
};

const sorted = useMemo(() => {
    const filtered = PROJECTS.filter(
    (p) => filter === "all" || p.category === filter
    );

    return [...filtered].sort((a, b) => {
    if (sort === "rated") {
        return getAverageRating(b.ratings) - getAverageRating(a.ratings);
    }
    if (sort === "commented") {
        return b.comments.length - a.comments.length;
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}, [filter, sort]);

return (
    <>
      {/* Filter + Sort row */}
    <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
            <TagChip
            key={cat}
            category={cat}
            active={filter === cat}
            onClick={() => handleFilterChange(cat)}
            />
        ))}
        </div>

        {/* Sort dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            type="button"
            onClick={() => setSortOpen((o) => !o)}
            className="flex items-center gap-2 whitespace-nowrap rounded-md border border-border bg-transparent px-3.5 py-2 font-mono text-xs tracking-[0.04em] text-muted-foreground transition-colors hover:text-foreground"
            aria-haspopup="listbox"
            aria-expanded={sortOpen}
          >
            {SORT_LABELS[sort]}
            <ChevronDown
              size={12}
              className={cn(
                "transition-transform duration-150",
                sortOpen && "rotate-180"
              )}
            />
          </button>
          {sortOpen && (
            <div
              role="listbox"
              className="absolute top-full right-0 z-50 mt-1.5 min-w-[160px] overflow-hidden rounded-lg border border-border bg-background shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            >
            {SORT_OPTIONS.map((opt) => {
                const active = opt === sort;
                return (
                <button
                    key={opt}
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => handleSortChange(opt)}
                    className={cn(
                    "block w-full px-4 py-2.5 text-left font-mono text-xs transition-colors",
                    active
                        ? "bg-accent/10 text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    {SORT_LABELS[opt]}
                </button>
                );
            })}
            </div>
        )}
        </div>
    </div>

      {/* Project grid or empty state */}
    {sorted.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {sorted.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ))}
        </div>
    ) : (
        <div className="py-20 text-center font-sans text-base text-muted-foreground">
        No projects in this category yet.
        </div>
    )}
    </>
);
}
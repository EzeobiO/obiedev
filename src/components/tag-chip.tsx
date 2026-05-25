"use client";

import { cn } from "@/lib/utils";
import type { Category } from "@/lib/data";

const CATEGORY_LABELS: Record<Category | "all", string> = {
all: "All",
live: "Live",
design: "Designs",
concept: "Concepts",
software: "Software",
};

interface TagChipProps {
category: Category | "all";
active?: boolean;
onClick?: () => void;
}

export function TagChip({ category, active = false, onClick }: TagChipProps) {
return (
    <button
    onClick={onClick}
    className={cn(
        "rounded-full border px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.06em] whitespace-nowrap transition-colors duration-150",
        active
        ? "border-accent bg-accent text-white"
        : "border-border bg-transparent text-muted-foreground hover:text-foreground"
    )}
    >
    {CATEGORY_LABELS[category]}
    </button>
);
}

interface CategoryTagProps {
category: Category;
}

export function CategoryTag({ category }: CategoryTagProps) {
return (
    <span className="inline-block rounded border border-border px-2 py-[3px] font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
    {CATEGORY_LABELS[category]}
    </span>
);
}
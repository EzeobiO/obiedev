"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { TagChip, CategoryTag } from "@/components/tag-chip";
import { StarRating, SmallStar } from "@/components/star-rating";
import type { Category } from "@/lib/data";

type Filter = Category | "all";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [ratingValue, setRatingValue] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  const filters: Filter[] = ["all", "live", "design", "concept", "software"];

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-32 md:px-10 lg:px-20">
        <div className="mb-12 flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Chunk 2 check
          </p>
          <ThemeToggle />
        </div>

        <h1 className="font-sans text-5xl font-extralight tracking-tight text-foreground md:text-7xl">
          Components online.
        </h1>

        <div className="mt-16 space-y-16">
          {/* TagChip — interactive filter pills */}
          <section>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              TagChip — click to switch active
            </p>
            <div className="flex flex-wrap gap-2">
              {filters.map((cat) => (
                <TagChip
                  key={cat}
                  category={cat}
                  active={activeFilter === cat}
                  onClick={() => setActiveFilter(cat)}
                />
              ))}
            </div>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              Active: {activeFilter}
            </p>
          </section>

          {/* CategoryTag — read-only labels */}
          <section>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              CategoryTag — read-only
            </p>
            <div className="flex flex-wrap gap-2">
              <CategoryTag category="live" />
              <CategoryTag category="design" />
              <CategoryTag category="concept" />
              <CategoryTag category="software" />
            </div>
          </section>

          {/* StarRating — interactive */}
          <section>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              StarRating — hover and click to rate
            </p>
            <StarRating
              value={ratingValue}
              interactive
              hasRated={hasRated}
              onRate={(v) => {
                setRatingValue(v);
                setHasRated(true);
              }}
            />
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              {hasRated ? `Rated ${ratingValue} stars (locked)` : "Click a star"}
            </p>
            {hasRated && (
              <button
                onClick={() => {
                  setRatingValue(0);
                  setHasRated(false);
                }}
                className="mt-3 font-mono text-xs text-accent hover:underline"
              >
                Reset
              </button>
            )}
          </section>

          {/* StarRating — read-only at fractional value */}
          <section>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              StarRating — read-only at 3.5 (no hover, no interaction)
            </p>
            <StarRating value={3.5} />
          </section>

          {/* SmallStar — compact display */}
          <section>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              SmallStar — compact display
            </p>
            <div className="flex items-center gap-6">
              <SmallStar value={4.7} />
              <SmallStar value={3.2} />
              <SmallStar value={0} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
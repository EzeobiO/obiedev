"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
value: number;
interactive?: boolean;
onRate?: (value: number) => void;
size?: number;
hasRated?: boolean;
}

export function StarRating({
value,
interactive = false,
onRate,
size = 20,
hasRated = false,
}: StarRatingProps) {
const [hover, setHover] = useState(0);
const displayValue = hover > 0 ? hover : value;
const canInteract = interactive && !hasRated;

return (
    <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= displayValue;
        return (
        <button
            key={star}
            type="button"
            disabled={!canInteract}
            onClick={() => canInteract && onRate?.(star)}
            onMouseEnter={() => canInteract && setHover(star)}
            onMouseLeave={() => canInteract && setHover(0)}
            className={cn(
            "flex items-center bg-transparent p-0.5 transition-transform duration-100",
            canInteract ? "cursor-pointer" : "cursor-default",
            hover === star && canInteract && "scale-[1.15]"
            )}
            aria-label={`Rate ${star} stars`}
        >
            <Star
            size={size}
            strokeWidth={1.5}
            className={cn(
                filled
                ? "fill-accent text-accent"
                : "fill-transparent text-zinc-300 dark:text-zinc-700"
            )}
            />
        </button>
        );
    })}
    </div>
);
}

interface SmallStarProps {
value: number;
}

export function SmallStar({ value }: SmallStarProps) {
return (
    <div className="flex items-center gap-1">
    <Star
        size={12}
        strokeWidth={1.5}
        className="fill-accent text-accent"
    />
    <span className="font-mono text-xs text-muted-foreground">
        {value === 0 ? "—" : value.toFixed(1)}
    </span>
    </div>
);
}
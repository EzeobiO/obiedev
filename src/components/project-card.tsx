import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import {
type Project,
type Rating,
getAverageRating,
} from "@/lib/data";
import { CategoryTag } from "./tag-chip";
import { SmallStar } from "./star-rating";

interface ProjectCardProps {
project: Project;
ratings?: Rating[];
commentCount?: number;
}

export function ProjectCard({
project,
ratings,
commentCount,
}: ProjectCardProps) {
  // Allow live store data to override the mock numbers later
const effectiveRatings = ratings ?? project.ratings;
const effectiveCommentCount = commentCount ?? project.comments.length;
const avg = getAverageRating(effectiveRatings);

return (
    <Link href={`/work/${project.id}`} className="group block">
    <article className="overflow-hidden rounded-lg border border-border bg-card transition-shadow duration-200 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {/* Thumbnail */}
        <div className="relative aspect-[4/3] overflow-hidden bg-image-placeholder">
        <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        </div>

        {/* Content */}
        <div className="px-5 pt-5 pb-4">
        <h3 className="mb-1.5 font-sans text-base font-medium leading-snug text-foreground">
            {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 font-sans text-sm leading-normal text-muted-foreground">
            {project.description}
        </p>

          {/* Bottom row — category + stats */}
        <div className="flex items-center justify-between border-t border-border pt-3">
            <CategoryTag category={project.category} />
            <div className="flex items-center gap-3">
            <SmallStar value={avg} />
            <div className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                <MessageCircle size={12} />
                <span>{effectiveCommentCount}</span>
            </div>
            </div>
        </div>
        </div>
    </article>
    </Link>
);
}
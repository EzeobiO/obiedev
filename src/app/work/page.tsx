import { Suspense } from "react";
import { WorkGallery } from "./work-gallery";

export const metadata = {
title: "Work — Portfolio",
};

export default function WorkPage() {
return (
    <main className="min-h-screen bg-background">
    <div className="mx-auto max-w-[1280px] px-5 pt-[104px] pb-24 md:px-10 md:pt-[140px] lg:px-20">
        <h1 className="mb-12 font-sans text-5xl font-extralight tracking-[-0.03em] text-foreground md:text-[56px]">
        Work
        </h1>
        <Suspense fallback={<GalleryFallback />}>
        <WorkGallery />
        </Suspense>
    </div>
    </main>
);
}

function GalleryFallback() {
return (
    <div className="py-20 text-center font-sans text-base text-muted-foreground">
    Loading…
    </div>
);
}
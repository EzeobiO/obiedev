"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
const [mounted, setMounted] = useState(false);
const { resolvedTheme, setTheme } = useTheme();

useEffect(() => {
    setMounted(true);
}, []);

  // Prevent hydration mismatch — server doesn't know the user's theme yet
if (!mounted) {
    return <div className="h-9 w-9" />;
}

const isDark = resolvedTheme === "dark";

return (
    <button
    onClick={() => setTheme(isDark ? "light" : "dark")}
    className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
    aria-label="Toggle theme"
    >
    {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
);
}
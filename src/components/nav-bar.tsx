"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
{ label: "Work", href: "/work" },
{ label: "Services", href: "/#services" },
{ label: "About", href: "/about" },
{ label: "Contact", href: "/contact" },
];

export function NavBar() {
const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
const [mounted, setMounted] = useState(false);
const { resolvedTheme, setTheme } = useTheme();
const pathname = usePathname();

useEffect(() => {
    setMounted(true);
}, []);

  // Toggle scrolled background once past 40px
useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // Close menu on route change
useEffect(() => {
    setMenuOpen(false);
}, [pathname]);

  // Close mobile menu if window resizes to desktop
useEffect(() => {
    const handleResize = () => {
    if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);

  // Lock body scroll while menu is open
useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
    document.body.style.overflow = "";
    };
}, [menuOpen]);

const isDark = mounted && resolvedTheme === "dark";
const toggleTheme = () => setTheme(isDark ? "light" : "dark");

return (
    <>
    <header
        className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300",
        scrolled || menuOpen
            ? "border-border bg-background/95 backdrop-blur-md"
            : "border-transparent"
        )}
    >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 md:px-10 lg:px-20">
          {/* Wordmark — replace "JD" with your initials */}
        <Link
            href="/"
            className="font-mono text-[15px] font-semibold tracking-[0.04em] text-foreground"
        >
            JD
        </Link>

          {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
            <Link
                key={label}
                href={href}
                className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
                {label}
            </Link>
            ))}
            <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
            >
            {mounted ? (
                isDark ? <Sun size={16} /> : <Moon size={16} />
            ) : (
                <div className="h-4 w-4" />
            )}
            </button>
        </nav>

          {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
            <button
            onClick={toggleTheme}
            className="p-2 text-muted-foreground"
            aria-label="Toggle theme"
            >
            {mounted ? (
                isDark ? <Sun size={16} /> : <Moon size={16} />
            ) : (
                <div className="h-4 w-4" />
            )}
            </button>
            <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 text-foreground"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>
        </div>
    </header>

      {/* Mobile fullscreen overlay */}
    <AnimatePresence>
        {menuOpen && (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-background px-5 py-8 md:hidden"
        >
            {NAV_LINKS.map(({ label, href }, i) => (
            <motion.div
                key={label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 + 0.05, duration: 0.18 }}
            >
                <Link
                href={href}
                className="block border-b border-border py-4 font-sans text-[28px] font-light tracking-[-0.02em] text-foreground"
                >
                {label}
                </Link>
            </motion.div>
            ))}
        </motion.div>
        )}
    </AnimatePresence>
    </>
);
}
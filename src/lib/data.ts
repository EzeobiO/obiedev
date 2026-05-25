export type Category = "live" | "design" | "concept" | "software";

export interface Rating {
userId: string;
value: number;
}

export interface Comment {
id: string;
author: string;
initials: string;
color: string;
date: string;
text: string;
replies?: Omit<Comment, "replies">[];
}

export interface Screenshot {
url: string;
caption: string;
}

export interface Project {
id: string;
title: string;
description: string;
category: Category;
date: string;
thumbnail: string;
featured: boolean;
techStack: string[];
status: string;
liveUrl?: string;
writeup: {
    context: string;
    approach: string;
    outcome: string;
};
screenshots: Screenshot[];
ratings: Rating[];
comments: Comment[];
}

export const PROJECTS: Project[] = [
{
    id: "thornfield-bakery",
    title: "Thornfield & Co.",
    description: "A full-stack e-commerce site for an artisan bakery with custom order management.",
    category: "live",
    date: "March 2025",
    thumbnail: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    featured: true,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Vercel"],
    status: "Live",
    liveUrl: "https://example.com",
    writeup: {
    context: "Thornfield & Co. is a family-run artisan bakery that had been relying on phone orders and a static HTML page for over a decade. They approached me needing a full e-commerce presence that matched the warmth and craftsmanship of their brand — without losing the personal touch that made customers loyal.",
    approach: "I started with a discovery session to map the full order lifecycle. Rather than reach for a heavy CMS, I built a lightweight Next.js storefront backed by a PostgreSQL database and Stripe for payments. The custom order management dashboard gives the owners full visibility into upcoming orders, and I integrated email confirmations using Resend so no order goes unacknowledged.",
    outcome: "The site launched in three weeks. Online orders now account for 40% of weekly revenue. The bakery reported a measurable drop in phone volume, freeing staff to focus on production. One recurring customer told them it was 'the best small business website I've used.'",
    },
    screenshots: [
    { url: "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80", caption: "Product listing page with category filtering and seasonal highlights." },
    { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80", caption: "Owner dashboard — live order tracking and daily sales summary." },
    ],
    ratings: [
    { userId: "u1", value: 5 },
    { userId: "u2", value: 4 },
    { userId: "u3", value: 5 },
    { userId: "u4", value: 5 },
    { userId: "u5", value: 4 },
    ],
    comments: [
    {
        id: "c1",
        author: "Morgan Ellis",
        initials: "ME",
        color: "#7C3AED",
        date: "Apr 12, 2025",
        text: "Really clean implementation. The order management flow especially — it's clear a lot of thought went into the owner experience, not just the customer-facing side.",
        replies: [
        { id: "c1r1", author: "James Derrick", initials: "JD", color: "#2563EB", date: "Apr 13, 2025", text: "Thanks Morgan — the dashboard was actually the trickiest part. They needed something their staff could use without any training." },
        ],
    },
    { id: "c2", author: "Priya Nair", initials: "PN", color: "#059669", date: "May 1, 2025", text: "Love the attention to performance. Did you do any image optimization for the product photos?" },
    ],
},
{
    id: "northgate-realty",
    title: "Northgate Realty Group",
    description: "Property listing platform for a regional estate agency with MLS integration.",
    category: "live",
    date: "January 2025",
    thumbnail: "https://images.unsplash.com/photo-1672957581665-bdc4a16b8347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    featured: true,
    techStack: ["React", "Node.js", "Express", "MongoDB", "AWS S3", "Netlify"],
    status: "Live",
    liveUrl: "https://example.com",
    writeup: {
    context: "Northgate had an outdated WordPress site that agents described as 'embarrassing to share with clients.' Listings were entered manually, photos were small and slow to load, and there was no way to filter by anything beyond city.",
    approach: "I built a custom React frontend against their existing property data API, adding a faceted search system that lets buyers filter by price, bedrooms, lot size, and school district. Agents can update listings through a simple CMS interface I built on top of MongoDB. All property photos are processed through AWS S3 with automatic resizing.",
    outcome: "Time-on-site increased by 2.3x in the first month post-launch. The agency's managing director said the new site 'finally reflects how seriously we take our clients.' Three agents who had been linking competitors' sites for reference now link their own.",
    },
    screenshots: [
    { url: "https://images.unsplash.com/photo-1645518557701-406efe2120ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80", caption: "Search results page with map view and advanced filtering sidebar." },
    ],
    ratings: [
    { userId: "u1", value: 4 },
    { userId: "u6", value: 5 },
    { userId: "u7", value: 4 },
    ],
    comments: [
    { id: "c3", author: "Sam Okafor", initials: "SO", color: "#DC2626", date: "Feb 3, 2025", text: "How did you handle the MLS sync? That's always the painful part with real estate projects." },
    ],
},
{
    id: "vela-surfboards",
    title: "Vela Surfboards",
    description: "Brand identity and e-commerce design study for a premium custom surfboard maker.",
    category: "design",
    date: "November 2024",
    thumbnail: "https://images.unsplash.com/photo-1622212993957-6d4631a0ba8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    featured: false,
    techStack: ["Figma", "Framer", "Design Systems"],
    status: "Design Only",
    writeup: {
    context: "A personal brief I set for myself: design the ideal e-commerce experience for a premium custom surfboard brand. The client is fictional, but the constraints are real — high-consideration purchase, lots of SKU variation, a brand that relies on craft and heritage.",
    approach: "Spent two weeks on brand exploration before touching a UI frame. The identity work — wordmark, color palette, type pairing — came first, then the component system. I designed 40+ screens across mobile and desktop, including a custom board configurator where buyers can select fin setup, blank material, and artwork.",
    outcome: "A portfolio piece that consistently generates the most questions in client conversations. Several people have asked if Vela is real. One prospect hired me specifically to replicate this level of design care for their own brand.",
    },
    screenshots: [
    { url: "https://images.unsplash.com/photo-1656231267330-f605c1c16a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80", caption: "Board configurator — interactive customization interface." },
    ],
    ratings: [
    { userId: "u2", value: 5 },
    { userId: "u3", value: 5 },
    { userId: "u8", value: 4 },
    { userId: "u9", value: 5 },
    ],
    comments: [
    { id: "c4", author: "Lea Fontaine", initials: "LF", color: "#D97706", date: "Dec 8, 2024", text: "The configurator screens are incredible. Did you prototype the interaction in Framer or was this static Figma only?" },
    ],
},
{
    id: "miro-associates",
    title: "Miro & Associates Law",
    description: "Clean, trust-oriented website design for a boutique litigation firm.",
    category: "design",
    date: "September 2024",
    thumbnail: "https://images.unsplash.com/photo-1677693972403-db681288b5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    featured: false,
    techStack: ["Figma", "Prototyping", "Accessibility"],
    status: "Design Only",
    writeup: {
    context: "A prospective client in the legal space asked for a design proposal before committing to a full engagement. The brief: look credible, not cold. Avoid the stock-photo-of-handshake cliché that defines most law firm sites.",
    approach: "I proposed a restrained editorial approach — deep navy and cream palette, generous whitespace, portraits by a real photographer. The information hierarchy puts the firm's core practice areas front and center, with a soft conversion path through case study summaries.",
    outcome: "The client ultimately chose a different direction internally, but the design proposal won me two referrals from their network. The aesthetic language I developed for this project directly influenced how I approach service business sites today.",
    },
    screenshots: [],
    ratings: [
    { userId: "u4", value: 4 },
    { userId: "u5", value: 3 },
    ],
    comments: [],
},
{
    id: "orbit-finance",
    title: "Orbit Finance",
    description: "Speculative redesign of a personal finance dashboard emphasizing clarity over features.",
    category: "concept",
    date: "August 2024",
    thumbnail: "https://images.unsplash.com/photo-1645518557701-406efe2120ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    featured: true,
    techStack: ["Figma", "Motion Design", "Data Visualization"],
    status: "Concept",
    writeup: {
    context: "Most personal finance apps suffer from the same problem: they prioritize showing you data over helping you understand it. This was an unsolicited redesign concept exploring what a finance dashboard looks like when the primary design constraint is 'one clear insight per view.'",
    approach: "I stripped back a hypothetical existing product to its core functions: net worth tracking, spending by category, and upcoming bills. Every visualization was designed to answer exactly one question. The color system uses green/red sparingly — only to indicate over/under budget, never for decorative purposes.",
    outcome: "Posted to a design community and received overwhelmingly positive feedback. Two fintech startup founders reached out — one asked me to do a similar audit of their existing product, which became a paid consulting project.",
    },
    screenshots: [
    { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80", caption: "Net worth overview — one week of trend data with clear delta indicators." },
    { url: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80", caption: "Spending breakdown — categorized by type, sorted by highest variance from budget." },
    ],
    ratings: [
    { userId: "u1", value: 5 },
    { userId: "u6", value: 5 },
    { userId: "u7", value: 4 },
    { userId: "u10", value: 5 },
    ],
    comments: [
    {
        id: "c5",
        author: "Felix Hartmann",
        initials: "FH",
        color: "#7C3AED",
        date: "Sep 2, 2024",
        text: "The restraint here is what gets me. Most redesign concepts add features to seem more impressive. This one removes them. Really rare.",
        replies: [
        { id: "c5r1", author: "James Derrick", initials: "JD", color: "#2563EB", date: "Sep 3, 2024", text: "That was very intentional. The design constraint of 'one insight per view' forced a lot of hard decisions early on." },
        ],
    },
    ],
},
{
    id: "groundwork-cms",
    title: "Groundwork CMS",
    description: "Concept for a headless CMS aimed at agencies managing 10–50 client sites.",
    category: "concept",
    date: "June 2024",
    thumbnail: "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    featured: false,
    techStack: ["Figma", "System Design", "Information Architecture"],
    status: "Concept",
    writeup: {
    context: "After working with half a dozen agencies over two years, I kept seeing the same pain: managing multiple client Contentful/Sanity instances is painful, billing is disconnected from usage, and client access control is always an afterthought. Groundwork is a concept for a CMS built specifically for agencies.",
    approach: "The core insight was that agency CMS management is fundamentally a multi-tenant problem. I designed the architecture and UI from that lens — one dashboard, many clients, role-scoped access, and a billing layer that can pass costs through to clients or absorb them. The content editing experience is intentionally Notion-inspired.",
    outcome: "Still in the concept phase but actively refining. Two agency owners who reviewed an early version said it addresses real daily frustrations. If I find a co-founder with backend depth, this is the product I'd build.",
    },
    screenshots: [],
    ratings: [
    { userId: "u2", value: 4 },
    { userId: "u8", value: 4 },
    ],
    comments: [
    { id: "c6", author: "Dana Reyes", initials: "DR", color: "#059669", date: "Jul 14, 2024", text: "This aligns really well with what our agency deals with every week. Have you thought about open-sourcing the design files?" },
    ],
},
{
    id: "stackwise",
    title: "Stackwise",
    description: "A minimal project tracking tool built for solo developers and very small teams.",
    category: "software",
    date: "April 2025",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    featured: false,
    techStack: ["React", "TypeScript", "SQLite", "Electron", "Node.js"],
    status: "Beta",
    liveUrl: "https://example.com",
    writeup: {
    context: "I tried every project management tool on the market and found myself either fighting the interface or paying for features I'd never use. Stackwise is what I built for myself — a minimal, keyboard-first project tracker that stays out of the way.",
    approach: "Built as an Electron app with a SQLite backend so all data is local and offline-first. The UI is React with a heavy keyboard navigation emphasis — you can manage a full sprint without touching the mouse. I dogfood it daily, which keeps the feature set honest.",
    outcome: "Released a beta to 80 users after posting on Hacker News. Currently averaging 12 active daily users with minimal churn. Most requested feature: GitHub issues sync, which is on the roadmap for v0.4.",
    },
    screenshots: [
    { url: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80", caption: "Main board view — keyboard shortcuts visible in the bottom status bar." },
    ],
    ratings: [
    { userId: "u3", value: 5 },
    { userId: "u9", value: 4 },
    { userId: "u10", value: 5 },
    ],
    comments: [
    { id: "c7", author: "Alex Tran", initials: "AT", color: "#DC2626", date: "May 10, 2025", text: "Finally tried this after seeing it on HN. The keyboard nav is genuinely good — feels closer to Vim than a project manager, which is a compliment." },
    ],
},
{
    id: "mailform",
    title: "Mailform",
    description: "A dead-simple form backend that forwards submissions to email with no account required.",
    category: "software",
    date: "February 2025",
    thumbnail: "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    featured: false,
    techStack: ["Go", "AWS Lambda", "SES", "Terraform", "Cloudflare"],
    status: "Live",
    liveUrl: "https://example.com",
    writeup: {
    context: "Every static site needs a contact form. Every contact form solution is either overpriced, over-featured, or has a 'free tier' designed to convert you. Mailform is a self-hostable alternative: point an HTML form at your endpoint, submissions go to your email. That's it.",
    approach: "Built in Go and deployed as a Lambda function behind a Cloudflare proxy. The entire infrastructure is defined in Terraform and can be deployed in under five minutes. SPAM filtering is handled via a honeypot field and basic rate limiting. No database, no accounts, no dashboard.",
    outcome: "The project is live and processing about 300 form submissions a month for my own sites and a few friends'. The self-hosting story resonated — the GitHub repo has 240 stars despite zero promotion beyond one blog post.",
    },
    screenshots: [],
    ratings: [
    { userId: "u1", value: 4 },
    { userId: "u4", value: 5 },
    { userId: "u5", value: 5 },
    { userId: "u6", value: 4 },
    ],
    comments: [
    {
        id: "c8",
        author: "Chris Lombardi",
        initials: "CL",
        color: "#D97706",
        date: "Mar 5, 2025",
        text: "I've been looking for exactly this for two years. The Terraform config is clean — what's your estimated AWS cost per month for a small personal site?",
        replies: [
        { id: "c8r1", author: "James Derrick", initials: "JD", color: "#2563EB", date: "Mar 5, 2025", text: "Under $0.50/month in most cases. Lambda free tier covers almost all of it — SES is the only real cost and it's fractions of a cent per email." },
        ],
    },
    ],
},
];

export const CATEGORY_META: Record<Category, { label: string; description: string }> = {
live: { label: "Live Sites", description: "Deployed and actively serving real users." },
design: { label: "Design Studies", description: "High-fidelity mockups, non-functional." },
concept: { label: "Concept Work", description: "Speculative explorations and self-briefs." },
software: { label: "Software", description: "Deployed tools, utilities, and applications." },
};

export function getAverageRating(ratings: Rating[]): number {
if (ratings.length === 0) return 0;
return ratings.reduce((sum, r) => sum + r.value, 0) / ratings.length;
}
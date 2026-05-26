const SOCIAL_LINKS = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X / Twitter", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12 md:px-10 lg:px-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">

        {/* Contact */}
        <div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            Contact
          </p>

          <a
            href="mailto:obieksu@gmail.com"
            className="border-b border-border pb-px font-sans text-sm text-foreground transition-colors hover:text-accent"
          >
            obieksu@gmail.com
          </a>
        </div>

        {/* Links */}
        <div>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            Links
          </p>

          <div className="flex gap-5">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Attribution */}
        <div className="md:text-right">
          <p className="font-mono text-xs leading-[1.8] text-muted-foreground">
            Built by Ebube Ezeobi
            <br />
            © {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </footer>
  );
}
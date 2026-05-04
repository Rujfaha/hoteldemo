import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white/70 pb-24 md:pb-10 pt-14">
      <div className="container-px mx-auto max-w-7xl grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-white mb-3">
            {siteConfig.name}
          </p>
          <p className="text-sm leading-relaxed">{siteConfig.tagline}</p>
        </div>
        <div>
          <p className="text-white text-sm font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.address}</li>
          </ul>
        </div>
        <div>
          <p className="text-white text-sm font-semibold mb-3">Explore</p>
          <ul className="space-y-2 text-sm">
            {siteConfig.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-px mx-auto max-w-7xl mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}

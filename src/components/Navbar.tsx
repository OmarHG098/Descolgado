import Link from "next/link";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="bg-descolgado-yellow border-descolgado-ink/10 border-b">
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <Logo />

        <nav className="font-grotesque flex items-center gap-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>

        <form action="/buscar" className="flex items-center gap-2">
          <input
            type="search"
            name="q"
            placeholder="Buscar piezas..."
            className="font-body border-descolgado-ink/20 bg-descolgado-gray px-3 py-1.5 text-sm"
          />
          <button
            type="submit"
            className="font-grotesque text-sm font-medium hover:underline"
          >
            Buscar
          </button>
        </form>
      </div>
    </header>
  );
}

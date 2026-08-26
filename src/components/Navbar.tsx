import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SearchToggle } from "@/components/SearchToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="border-ink bg-paper border-b">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
        <div className="border-ink/50 font-grotesque flex items-center justify-between border-b py-2 text-[10px] uppercase tracking-[0.18em]">
          <span className="text-ink/60">Revista digital independiente</span>
          <Link href="/contacto" className="hover:text-accent">
            Contacto
          </Link>
        </div>

        <div className="flex items-center justify-center py-6">
          <Logo />
        </div>

        <div className="border-ink/50 relative flex items-center justify-center border-t py-3">
          <nav className="font-grotesque flex items-center gap-6 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-accent">
                {link.label}
              </Link>
            ))}
          </nav>
          <form action="/buscar" className="absolute right-0">
            <SearchToggle />
          </form>
        </div>
      </div>
    </header>
  );
}

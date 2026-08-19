import Link from "next/link";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { href: "/", label: "Piezas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="border-ink border-b bg-paper">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="flex items-center justify-between border-b border-ink/50 py-2 font-grotesque text-[10px] uppercase tracking-[0.18em]">
          <span className="text-ink/60">Revista digital independiente</span>
          <div className="flex items-center gap-4">
            <Link href="/sobre" className="hover:text-accent">Instagram</Link>
            <Link href="/contacto" className="hover:text-accent">Suscribite</Link>
          </div>
        </div>
        <div className="relative flex min-h-36 items-center justify-center py-7 sm:min-h-48">
          <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 sm:block">
            <p className="font-grotesque text-[11px] uppercase tracking-[0.18em] text-accent">Descolgado</p>
            <p className="font-serif text-sm italic">Una revista sin pose</p>
          </div>
          <Logo />
          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-right sm:block">
            <p className="font-grotesque text-[11px] uppercase tracking-[0.18em] text-accent">Newsletter</p>
            <p className="font-serif text-sm italic">Entrá cuando quieras</p>
          </div>
        </div>
        <div className="flex items-center justify-center border-t border-ink/50 py-3">
          <nav className="flex items-center gap-7 font-grotesque text-[11px] uppercase tracking-[0.2em] sm:gap-12">
            {NAV_LINKS.map((link) => <Link key={link.href} href={link.href} className="hover:text-accent">{link.label}</Link>)}
          </nav>
          <form action="/buscar" className="absolute right-5 hidden items-center gap-2 sm:flex">
            <label htmlFor="search" className="sr-only">Buscar</label>
            <input id="search" type="search" name="q" placeholder="Buscar" className="w-20 border-b border-ink bg-transparent px-1 py-1 font-serif text-sm outline-none placeholder:text-ink/50" />
            <button type="submit" aria-label="Buscar" className="font-grotesque text-[10px] uppercase tracking-[0.15em]">Ir</button>
          </form>
        </div>
      </div>
    </header>
  );
}

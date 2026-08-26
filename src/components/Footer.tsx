import { Logo } from "@/components/Logo";

const SHOW_SOCIAL_LINE = false;
const SHOW_NEWSLETTER = false;

export function Footer() {
  return (
    <footer className="border-ink mt-16 border-t-4">
      {SHOW_SOCIAL_LINE && (
        <div className="flex flex-col items-center justify-center gap-2 px-4 py-9 text-center sm:flex-row sm:gap-5">
          <span className="font-grotesque text-3xl">◎</span>
          <p className="font-body text-lg">
            Seguinos <span className="font-semibold">@descolgado</span>
          </p>
        </div>
      )}
      <div className="bg-ink text-paper px-4 py-12 text-center sm:px-8">
        {SHOW_NEWSLETTER && (
          <>
            <p className="font-grotesque text-[10px] uppercase tracking-[0.2em]">Newsletter</p>
            <form className="mx-auto mt-4 flex max-w-sm gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Tu email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Tu email"
                className="border-paper/30 bg-paper text-ink font-body min-w-0 flex-1 border px-3 py-2 text-sm"
              />
              <button
                type="button"
                className="bg-accent font-grotesque px-4 py-2 text-[10px] uppercase tracking-[0.15em]"
              >
                Suscribite
              </button>
            </form>
          </>
        )}
        <div className="[&_a]:text-paper mt-10 flex justify-center">
          <Logo />
        </div>
        <p className="font-body text-paper/60 mt-5 text-xs">
          © {new Date().getFullYear()} Descolgado. Diseño y desarrollo propios.
        </p>
      </div>
    </footer>
  );
}

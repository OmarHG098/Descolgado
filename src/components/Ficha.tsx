import type { Ficha as FichaType } from "@/types/piece";

const DATE_FORMATTER = new Intl.DateTimeFormat("es-AR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function Ficha({
  ficha,
  className = "",
}: {
  ficha: FichaType;
  className?: string;
}) {
  return (
    <div className={["font-serif", className].filter(Boolean).join(" ")}>
      <p className="text-descolgado-ink/80">{ficha.summary}</p>
      <time dateTime={ficha.date} className="mt-1 block text-sm text-descolgado-red">
        {DATE_FORMATTER.format(new Date(ficha.date))}
      </time>
    </div>
  );
}

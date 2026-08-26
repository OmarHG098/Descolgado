import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-grotesque text-6xl font-bold tracking-tight text-ink ${className}`}
    >
      descolgado
    </Link>
  );
}

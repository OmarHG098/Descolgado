import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`font-serif text-6xl font-semibold leading-none tracking-[-0.08em] sm:text-8xl ${className}`}>
      descolgado
    </Link>
  );
}

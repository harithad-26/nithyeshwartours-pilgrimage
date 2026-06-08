import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-dvh bg-surface px-6 text-center">
      <p className="font-sans text-sm tracking-[0.1em] uppercase text-gold-dark mb-4">
        404
      </p>
      <h1 className="font-serif text-4xl text-navy mb-6">Page Not Found</h1>
      <p className="font-sans text-midnight/60 mb-10 max-w-md leading-relaxed">
        The path you seek does not exist on this journey. Let us guide you back.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-navy text-gold font-sans text-sm font-medium px-8 py-3 rounded-md transition-all duration-300 hover:bg-midnight focus-visible:outline-gold"
      >
        Return Home
      </Link>
    </main>
  );
}

import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center pt-24">
      <h1 className="font-display text-6xl font-semibold text-ink-900">404</h1>
      <p className="mt-4 text-ink-600">
        This page doesn't exist — but plenty of good seeds do.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-leaf-500 text-white px-6 py-3 font-semibold shadow-soft hover:scale-[1.03] transition-transform"
      >
        Back to Home
      </Link>
    </main>
  );
}

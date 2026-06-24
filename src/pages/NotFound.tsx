import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 py-24 text-center">
      <div className="max-w-md">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/70">404</p>
        <h1 className="mt-4 font-display text-5xl font-light text-ink">Page not found</h1>
        <p className="mt-4 text-muted">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand hover:text-ink"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
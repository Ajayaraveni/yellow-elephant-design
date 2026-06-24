type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="absolute inset-x-0 top-0 h-1 bg-brand" />
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="max-w-3xl animate-fade-up">
          {eyebrow && (
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink/70">
              <span className="h-px w-10 bg-ink/40" />
              {eyebrow}
            </div>
          )}
          <h1 className="font-display text-5xl font-light leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
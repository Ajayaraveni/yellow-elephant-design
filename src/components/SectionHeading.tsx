import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({ eyebrow, title, description, align = "center", className }: Props) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      {eyebrow && (
        <div className={cn("mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink/70", align === "center" && "justify-center")}>
          <span className="h-px w-8 bg-ink/40" />
          {eyebrow}
          <span className="h-px w-8 bg-ink/40" />
        </div>
      )}
      <h2 className="font-display text-4xl font-light leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}
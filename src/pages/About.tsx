import { Compass, Eye, Heart, Award, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Heart, title: "Craft with Care", body: "Every joint, finish and surface is treated with intention." },
  { icon: Award, title: "Quality First", body: "We never compromise on materials, workmanship or detail." },
  { icon: Users, title: "Client Partnership", body: "Your home, your story — we design with you, not for you." },
  { icon: Sparkles, title: "Timeless Aesthetic", body: "Beautiful today, relevant a decade from now." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About The Yellow Elephant Interiors"
        description="A Hyderabad-based interior design studio dedicated to creating spaces that feel as good as they look — refined, personal, and built to last."
      />

      {/* Story */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop"
              alt="Our design studio"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-sm bg-brand px-6 py-4 text-center shadow-xl sm:block">
              <p className="font-display text-3xl font-light text-ink">8+</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">Years in Hyderabad</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/70">Our Story</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              Designing homes that feel <span className="italic">unmistakably yours</span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
              <p>
                The Yellow Elephant Interiors began with a simple idea — that interior design should be deeply personal, beautifully crafted, and rooted in how people actually live.
              </p>
              <p>
                Over the years, we've designed homes, villas, apartments and workspaces across Hyderabad — each one a collaboration between our designers and the families who live in them.
              </p>
              <p>
                Our team works closely with trusted craftspeople and material partners, with a strong understanding of the Hyderabad market: its climate, lifestyle, and architectural rhythms. The result is interiors that feel cohesive, functional, and quietly luxurious.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {[{ k: "150+", v: "Projects" }, { k: "8+", v: "Years" }, { k: "100%", v: "On-Time" }].map((s) => (
                <div key={s.v}>
                  <p className="font-display text-3xl font-light text-ink">{s.k}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          {[
            { icon: Compass, label: "Our Mission", title: "To craft interiors that elevate everyday living", body: "We design considered, functional homes that reflect the people who live in them — never trend-chasing, always intentional." },
            { icon: Eye, label: "Our Vision", title: "To be Hyderabad's most trusted design studio", body: "Recognised for the quality of our craft, the integrity of our process, and the way our spaces stand the test of time." },
          ].map((c) => (
            <div key={c.label} className="rounded-sm border border-line bg-white p-10">
              <c.icon className="h-9 w-9 text-ink" strokeWidth={1.4} />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-ink/70">{c.label}</p>
              <h3 className="mt-3 font-display text-3xl font-light text-ink sm:text-4xl">{c.title}</h3>
              <p className="mt-5 leading-relaxed text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Core Values" title="The principles behind every project" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="group rounded-sm border border-line p-8 transition-all hover:-translate-y-1 hover:border-ink hover:bg-surface">
                <v.icon className="h-8 w-8 text-ink" strokeWidth={1.4} />
                <h4 className="mt-5 font-display text-xl font-light text-ink">{v.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <h3 className="font-display text-3xl font-light text-white sm:text-4xl">
            Ready to start your project?
          </h3>
          <Link to="/contact" className="inline-flex rounded-full bg-brand px-7 py-4 text-sm font-semibold text-ink transition-all hover:bg-white">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Gem, HardHat, Clock3, Instagram, Quote, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/lib/site";

const features = [
  { icon: Sparkles, title: "Personalized Designs", body: "Tailored interiors designed around your lifestyle." },
  { icon: Gem, title: "Premium Materials", body: "High-quality finishes and carefully selected materials." },
  { icon: HardHat, title: "Expert Execution", body: "Experienced professionals managing every detail." },
  { icon: Clock3, title: "On-Time Delivery", body: "Projects completed efficiently without compromising quality." },
];

const steps = [
  { n: "01", t: "Consultation", d: "We understand your vision, lifestyle and requirements." },
  { n: "02", t: "Planning & Design", d: "Detailed 3D designs, material boards and approvals." },
  { n: "03", t: "Execution", d: "Precision craftsmanship managed end-to-end on site." },
  { n: "04", t: "Final Handover", d: "Quality-checked, styled and ready for you to move in." },
];

const projects = [
  { name: "Luxury Villa Interiors", location: "Manikonda", category: "Villa", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop" },
  { name: "Modern Apartment Design", location: "Miyapur", category: "Apartment", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80&auto=format&fit=crop" },
  { name: "Contemporary Living Room", location: "Gachibowli", category: "Living", img: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=80&auto=format&fit=crop" },
  { name: "Premium Modular Kitchen", location: "Kondapur", category: "Kitchen", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&auto=format&fit=crop" },
  { name: "Elegant Bedroom Design", location: "Manikonda", category: "Bedroom", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80&auto=format&fit=crop" },
  { name: "Workspace Interior Design", location: "Hitech City", category: "Workspace", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop" },
];

const testimonials = [
  { name: "Priya Sharma", role: "Homeowner, Manikonda", text: "They transformed our apartment into a space that feels both luxurious and like home. The attention to detail is unmatched." },
  { name: "Rohan Verma", role: "Villa Owner, Miyapur", text: "Professional, on-time, and incredibly creative. Our villa interiors exceeded every expectation we had." },
  { name: "Anitha Reddy", role: "Homeowner, Gachibowli", text: "From the first consultation to the final handover, the experience was seamless. Highly recommend their team." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-24 sm:px-8 sm:pt-20 sm:pb-32 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pt-24 lg:pb-40">
          <div className="lg:col-span-7 lg:pt-10">
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink/70 animate-fade-up">
              <span className="h-px w-10 bg-ink/40" />
              Interior Design Studio · Hyderabad
            </div>
            <h1 className="font-display text-5xl font-light leading-[1.02] text-ink sm:text-6xl lg:text-7xl xl:text-[88px] animate-fade-up">
              Transforming Spaces Into{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic">Timeless</span>
                <span className="absolute inset-x-0 bottom-2 -z-0 h-3 bg-brand sm:bottom-3 sm:h-4" />
              </span>{" "}
              Experiences
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl animate-fade-up">
              We create elegant, functional and inspiring interiors that reflect your personality and elevate everyday living.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-brand hover:text-ink"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-full border border-ink/15 bg-white px-7 py-4 text-sm font-semibold text-ink transition-all hover:border-ink"
              >
                Explore Services
              </Link>
            </div>

            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-8">
              {[
                { k: "150+", v: "Spaces Designed" },
                { k: "8+", v: "Years Experience" },
                { k: "100%", v: "On-Time Delivery" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-light text-ink sm:text-4xl">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop"
                alt="Luxury interior design by The Yellow Elephant"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-44 w-44 overflow-hidden rounded-sm border-8 border-white shadow-xl sm:block">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80&auto=format&fit=crop"
                alt="Detail of premium interior"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 top-10 hidden rounded-sm bg-brand px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink shadow-lg lg:block">
              Hyderabad · Est. 2017
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Why Choose Us" title="The craft of considered interiors" description="Every project is led with the same belief — that great design is the quiet detail of how a home makes you feel." />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="group relative overflow-hidden rounded-sm border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ink hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
                <f.icon className="h-9 w-9 text-ink" strokeWidth={1.4} />
                <h3 className="mt-6 font-display text-2xl font-light text-ink">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Our Process" title="A clear, considered design journey" />
          <div className="relative mt-20">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-line lg:block" />
            <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
              {steps.map((s) => (
                <div key={s.n} className="relative">
                  <div className="relative grid h-16 w-16 place-items-center rounded-full border border-ink bg-white font-display text-xl text-ink">
                    {s.n}
                    <span className="absolute -inset-2 -z-10 rounded-full bg-brand opacity-0 transition-opacity duration-500 hover:opacity-100" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-light text-ink">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading align="left" eyebrow="Featured Projects" title="A selection of recent work" />
            <Link to="/services" className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-ink underline-offset-4 hover:underline sm:inline-flex">
              View All Services →
            </Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.name} className="group overflow-hidden rounded-sm bg-white">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 px-5 py-6">
                  <div>
                    <h3 className="font-display text-xl font-light text-ink">{p.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted">{p.location}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-ink transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Client Stories" title="Trusted by homeowners across Hyderabad" />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex h-full flex-col rounded-sm border border-line bg-surface p-8 transition-all hover:border-ink">
                <Quote className="h-7 w-7 text-brand" strokeWidth={1.6} />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink/80">“{t.text}”</blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink font-display text-base text-white">
                    {t.name.charAt(0)}
                  </span>
                  <figcaption>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </figcaption>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-ink text-ink" />
                    ))}
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-5xl rounded-sm border border-line bg-white px-6 py-16 text-center sm:px-12 sm:py-20">
          <Instagram className="mx-auto h-9 w-9 text-ink" strokeWidth={1.4} />
          <h2 className="mt-6 font-display text-4xl font-light text-ink sm:text-5xl">
            See Our Latest Interior Transformations
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            Behind-the-scenes, completed projects and design details — follow our studio for weekly inspiration.
          </p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-brand hover:text-ink"
          >
            <Instagram className="h-4 w-4" />
            Follow Us On Instagram
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <div className="absolute -right-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              <span className="h-px w-10 bg-brand/60" />
              Begin the journey
            </div>
            <h2 className="font-display text-5xl font-light leading-[1.05] text-white sm:text-6xl">
              Let's Design Your <span className="italic text-brand">Dream Space</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-lg leading-relaxed text-white/70">
              Book a complimentary consultation with our designers and let's bring your vision to life — beautifully, on time, on budget.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-ink transition-all hover:bg-white"
            >
              Schedule Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
import { Link } from "react-router-dom";
import {
  Sofa, ChefHat, Archive, Tv, Bed, Layers, Lightbulb, LayoutGrid, Hammer, Package, ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const services = [
  { icon: Sofa, title: "Residential Interiors", body: "Full home interior design tailored to your lifestyle and taste." },
  { icon: ChefHat, title: "Modular Kitchens", body: "Smart, beautiful kitchens engineered for everyday cooking." },
  { icon: Archive, title: "Wardrobes & Storage", body: "Custom wardrobes and storage solutions that maximise space." },
  { icon: Tv, title: "Living Room Design", body: "Inviting living spaces with refined materials and layouts." },
  { icon: Bed, title: "Bedroom Interiors", body: "Restful, considered bedrooms designed for comfort." },
  { icon: Layers, title: "False Ceiling Design", body: "Architectural ceilings that elevate every room." },
  { icon: Lightbulb, title: "Lighting Design", body: "Layered lighting plans that bring spaces to life." },
  { icon: LayoutGrid, title: "Space Planning", body: "Functional layouts that make every square foot count." },
  { icon: Hammer, title: "Home Renovation", body: "End-to-end renovation, managed seamlessly by our team." },
  { icon: Package, title: "Turnkey Solutions", body: "From design to handover — one team, one timeline." },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="A complete suite of interior services"
        description="Whether you're designing a single room or an entire home, we offer a curated range of services to bring your vision together — beautifully and effortlessly."
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ink hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)]">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
                <div className="grid h-14 w-14 place-items-center rounded-full bg-surface transition-colors duration-500 group-hover:bg-brand">
                  <s.icon className="h-6 w-6 text-ink" strokeWidth={1.5} />
                </div>
                <h3 className="mt-7 font-display text-2xl font-light text-ink">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.body}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <div>
            <h3 className="font-display text-3xl font-light text-ink sm:text-4xl">
              Not sure where to start?
            </h3>
            <p className="mt-2 text-muted">Book a free consultation and we'll guide you through the options.</p>
          </div>
          <Link to="/contact" className="inline-flex rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-brand hover:text-ink">
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
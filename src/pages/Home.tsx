import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Sparkles, Gem, HardHat, Clock3, Instagram, Quote, Star,
  Users, CheckCircle2, MapPin, Phone, MessageCircle, ShieldCheck, IndianRupee, LifeBuoy,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/lib/site";
import heroLiving from "@/assets/hero-living.jpg";
import svcKitchen from "@/assets/svc-kitchen.jpg";
import svcLiving from "@/assets/svc-living.jpg";
import svcBedroom from "@/assets/svc-bedroom.jpg";
import svcWardrobe from "@/assets/svc-wardrobe.jpg";
import svcCeiling from "@/assets/svc-ceiling.jpg";
import svcTurnkey from "@/assets/svc-turnkey.jpg";
import projApartment from "@/assets/proj-apartment-manikonda.jpg";
import projVilla from "@/assets/proj-villa-kokapet.jpg";
import projKitchen from "@/assets/proj-kitchen-miyapur.jpg";
import projBedroom from "@/assets/proj-bedroom-gachibowli.jpg";
import projLiving from "@/assets/proj-living-hitech.jpg";
import projWardrobe from "@/assets/proj-wardrobe-kondapur.jpg";
import galLiving1 from "@/assets/gal-living-1.jpg";
import galLiving2 from "@/assets/gal-living-2.jpg";
import galLiving3 from "@/assets/gal-living-3.jpg";
import galBedroom1 from "@/assets/gal-bedroom-1.jpg";
import galBedroom2 from "@/assets/gal-bedroom-2.jpg";
import galBedroom3 from "@/assets/gal-bedroom-3.jpg";
import galKitchen1 from "@/assets/gal-kitchen-1.jpg";
import galKitchen2 from "@/assets/gal-kitchen-2.jpg";
import galWardrobe1 from "@/assets/gal-wardrobe-1.jpg";
import galWardrobe2 from "@/assets/gal-wardrobe-2.jpg";
import galDining1 from "@/assets/gal-dining-1.jpg";
import galDining2 from "@/assets/gal-dining-2.jpg";
import galCeiling1 from "@/assets/gal-ceiling-1.jpg";
import galCeiling2 from "@/assets/gal-ceiling-2.jpg";

const trust = [
  { icon: Users, k: "100+", v: "Happy Clients" },
  { icon: CheckCircle2, k: "50+", v: "Completed Designs" },
  { icon: MapPin, k: "2", v: "Hyderabad Locations" },
  { icon: Sparkles, k: "End-to-End", v: "Interior Solutions" },
];

const showcase = [
  { img: svcKitchen, title: "Modular Kitchens", body: "Functional, beautiful kitchens engineered for Indian cooking." },
  { img: svcLiving, title: "Living Rooms", body: "Inviting layouts with TV units, paneling and layered lighting." },
  { img: svcBedroom, title: "Bedrooms", body: "Restful master and guest bedrooms tailored to your family." },
  { img: svcWardrobe, title: "Wardrobes", body: "Custom full-height wardrobes that maximise every inch." },
  { img: svcCeiling, title: "False Ceilings", body: "Cove and gypsum ceilings that lift every room." },
  { img: svcTurnkey, title: "Turnkey Interiors", body: "From design to handover — one team, one timeline." },
];

const projects = [
  { name: "Modern 3BHK Apartment", category: "Apartment", location: "Manikonda", img: projApartment },
  { name: "Luxury Villa Interior", category: "Villa", location: "Kokapet", img: projVilla },
  { name: "Premium Modular Kitchen", category: "Kitchen", location: "Miyapur", img: projKitchen },
  { name: "Elegant Master Bedroom", category: "Bedroom", location: "Gachibowli", img: projBedroom },
  { name: "Contemporary Living Room", category: "Living", location: "Hitech City", img: projLiving },
  { name: "Custom Wardrobe Design", category: "Wardrobe", location: "Kondapur", img: projWardrobe },
];

const galleryItems = [
  { cat: "Living Rooms", img: galLiving1 },
  { cat: "Living Rooms", img: galLiving2 },
  { cat: "Bedrooms", img: galBedroom1 },
  { cat: "Bedrooms", img: galBedroom2 },
  { cat: "Kitchens", img: galKitchen1 },
  { cat: "Wardrobes", img: galWardrobe1 },
  { cat: "Dining Areas", img: galDining1 },
  { cat: "False Ceilings", img: galCeiling1 },
];
const categories = ["All", "Living Rooms", "Bedrooms", "Kitchens", "Wardrobes", "Dining Areas", "False Ceilings"];

const steps = [
  { n: "01", t: "Consultation", d: "We understand your vision, lifestyle and requirements." },
  { n: "02", t: "Planning & Design", d: "Detailed 3D designs, material boards and approvals." },
  { n: "03", t: "Execution", d: "Precision craftsmanship managed end-to-end on site." },
  { n: "04", t: "Installation", d: "On-site installation by trained, in-house teams." },
  { n: "05", t: "Project Handover", d: "Quality-checked, styled and ready for you to move in." },
];

const whyUs = [
  { icon: Sparkles, title: "Personalized Designs", body: "Tailored interiors designed around how your family actually lives." },
  { icon: IndianRupee, title: "Transparent Pricing", body: "Clear quotes — no hidden surprises, no last-minute add-ons." },
  { icon: Gem, title: "Premium Materials", body: "Hand-picked branded materials with proven durability." },
  { icon: HardHat, title: "Experienced Team", body: "Designers, project managers and craftsmen — all in-house." },
  { icon: LifeBuoy, title: "Dedicated Project Support", body: "A single point of contact through your entire project." },
  { icon: Clock3, title: "Timely Delivery", body: "Projects delivered on schedule, without quality shortcuts." },
];

const serviceAreas = [
  "Manikonda", "Miyapur", "Gachibowli", "Kondapur", "Narsingi",
  "Kokapet", "Financial District", "Jubilee Hills", "Madhapur", "Hitech City",
];

const testimonials = [
  { name: "Priya Sharma", role: "3BHK Owner, Manikonda", text: "They transformed our apartment into a space that feels both luxurious and like home. The attention to detail is unmatched." },
  { name: "Rohan Verma", role: "Villa Owner, Kokapet", text: "Professional, on-time, and incredibly creative. Our villa interiors exceeded every expectation we had." },
  { name: "Anitha Reddy", role: "Homeowner, Gachibowli", text: "From the first consultation to the final handover, the experience was seamless. Highly recommend this team." },
];

export default function Home() {
  const [activeCat, setActiveCat] = useState("All");
  const filteredGallery = activeCat === "All" ? galleryItems : galleryItems.filter((g) => g.cat === activeCat);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-14 pb-20 sm:px-8 sm:pt-16 sm:pb-28 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:pt-20 lg:pb-32">
          <div className="lg:col-span-7 lg:pt-8">
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink/70 animate-fade-up">
              <span className="h-px w-10 bg-ink/40" />
              Interior Design Studio · Hyderabad
            </div>
            <h1 className="font-display text-5xl font-light leading-[1.05] text-ink sm:text-6xl lg:text-7xl xl:text-[82px] animate-fade-up">
              Premium Interior Designers in{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic">Hyderabad</span>
                <span className="absolute inset-x-0 bottom-2 -z-0 h-3 bg-brand sm:bottom-3 sm:h-4" />
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl animate-fade-up">
              Transforming apartments, villas, and living spaces across Hyderabad with thoughtful design and expert execution.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-brand hover:text-ink"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-ink/15 bg-white px-7 py-4 text-sm font-semibold text-ink transition-all hover:border-ink hover:bg-brand"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface">
              <img
                src={heroLiving}
                alt="Premium Indian apartment interior in Hyderabad by The Yellow Elephant Interiors"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 top-10 hidden rounded-sm bg-brand px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink shadow-lg lg:block">
              Hyderabad · Since 2017
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="border-y border-line bg-surface py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 sm:grid-cols-4 sm:px-8 lg:px-12">
          {trust.map((t) => (
            <div key={t.v} className="flex items-start gap-4 rounded-sm bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.18)]">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand">
                <t.icon className="h-5 w-5 text-ink" strokeWidth={1.6} />
              </span>
              <div>
                <p className="font-display text-3xl font-light leading-none text-ink">{t.k}</p>
                <p className="mt-1.5 text-xs uppercase tracking-wider text-muted">{t.v}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SHOWCASE */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="What We Design" title="Interior services for every Hyderabad home" description="From a single modular kitchen to a complete turnkey home — we deliver beautifully crafted spaces, end to end." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {showcase.map((s) => (
              <article key={s.title} className="group overflow-hidden rounded-sm bg-surface transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.18)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1280} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-light text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading align="left" eyebrow="Featured Projects" title="Recent homes we've designed across Hyderabad" />
            <Link to="/services" className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-ink underline-offset-4 hover:underline sm:inline-flex">
              View All Services →
            </Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.name} className="group overflow-hidden rounded-sm bg-white">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={1280} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink backdrop-blur">
                    {p.category}
                  </span>
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    <MapPin className="h-3 w-3 text-brand" /> {p.location}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 px-5 py-6">
                  <div>
                    <h3 className="font-display text-xl font-light text-ink">{p.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted">Hyderabad</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-ink transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY WITH FILTERS */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Portfolio" title="Browse our work by category" />
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-all ${
                  activeCat === c
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-white text-ink hover:border-ink hover:bg-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((g, i) => (
              <div key={`${g.cat}-${i}`} className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-surface">
                <img src={g.img} alt={g.cat} loading="lazy" width={1280} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {g.cat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Our Process" title="A clear, considered design journey" />
          <div className="relative mt-20">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-line lg:block" />
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-6">
              {steps.map((s) => (
                <div key={s.n} className="relative">
                  <div className="relative grid h-16 w-16 place-items-center rounded-full border border-ink bg-white font-display text-xl text-ink">
                    {s.n}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-light text-ink">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Why Choose Us" title="The Yellow Elephant difference" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((f) => (
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

      {/* SERVICE AREAS */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Coverage" title="Areas We Serve" description="Designing premium interiors across Hyderabad's most loved neighbourhoods." />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {serviceAreas.map((a) => (
              <div key={a} className="group flex items-center gap-3 rounded-sm border border-line bg-white p-4 transition-all hover:border-ink hover:bg-brand">
                <MapPin className="h-4 w-4 text-ink" strokeWidth={1.6} />
                <span className="text-sm font-medium text-ink">{a}</span>
              </div>
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
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-ink text-ink" />
                  ))}
                </div>
                <Quote className="mt-5 h-7 w-7 text-brand" strokeWidth={1.6} />
                <blockquote className="mt-3 flex-1 text-base leading-relaxed text-ink/80">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink font-display text-base text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </figcaption>
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
            Explore More Interior Inspirations
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            Behind-the-scenes, completed Hyderabad projects and design details — follow our studio for weekly inspiration.
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

      {/* FINAL YELLOW CTA */}
      <section className="relative overflow-hidden bg-brand py-20 sm:py-28">
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 text-center sm:px-8 lg:px-12">
          <ShieldCheck className="h-10 w-10 text-ink" strokeWidth={1.4} />
          <h2 className="font-display text-5xl font-light leading-[1.05] text-ink sm:text-6xl">
            Let's Design Your <span className="italic">Dream Home</span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">
            Book a complimentary consultation with our Hyderabad designers — we'll walk through your space, your style and a clear next step.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${SITE.phoneE164}`}
              className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-ink"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-ink transition-all hover:bg-ink hover:text-white"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
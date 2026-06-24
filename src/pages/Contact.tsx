import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Instagram, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";
import { EMAILJS_CONFIG } from "@/lib/emailjs";
import { SITE } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Phone can only contain digits and + - ( )"),
  email: z.string().trim().email("Please enter a valid email").max(120),
  service: z.string().trim().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Please share a few details").max(1000),
});

const services = [
  "Residential Interiors",
  "Modular Kitchens",
  "Wardrobes & Storage",
  "Living Room Design",
  "Bedroom Interiors",
  "False Ceiling Design",
  "Lighting Design",
  "Home Renovation",
  "Turnkey Solutions",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const update = (k: keyof typeof form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    const isConfigured =
      !EMAILJS_CONFIG.SERVICE_ID.startsWith("YOUR_") &&
      !EMAILJS_CONFIG.TEMPLATE_ID.startsWith("YOUR_") &&
      !EMAILJS_CONFIG.PUBLIC_KEY.startsWith("YOUR_");

    if (!isConfigured) {
      toast.error("EmailJS is not configured yet. Please add your keys in src/lib/emailjs.ts");
      return;
    }

    try {
      setLoading(true);
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          to_email: EMAILJS_CONFIG.TO_EMAIL,
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY },
      );
      toast.success("Thank you! We'll be in touch shortly.");
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please call us or try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full rounded-sm border bg-white px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get In Touch"
        description="Tell us about your space, your timelines and your vision. We'll get back to you within one business day."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-5 lg:gap-16 lg:px-12">
          {/* Details */}
          <aside className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/70">Contact Details</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ink">
              Let's start a conversation
            </h2>

            <ul className="mt-10 space-y-6">
              {[
                { icon: Phone, label: "Call us", value: SITE.phone, href: `tel:${SITE.phoneE164}` },
                { icon: MessageCircle, label: "WhatsApp", value: SITE.phone, href: SITE.whatsapp },
                { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: Instagram, label: "Instagram", value: "@theyellowelephantinteriors", href: SITE.instagram },
              ].map((c) => (
                <li key={c.label}>
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-surface transition-colors group-hover:bg-brand">
                      <c.icon className="h-5 w-5 text-ink" strokeWidth={1.5} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">{c.label}</span>
                      <span className="mt-1 block break-all text-base font-medium text-ink">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-line pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/70">Studio Locations</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {SITE.locations.map((loc) => (
                  <div key={loc} className="rounded-sm border border-line p-4">
                    <MapPin className="h-5 w-5 text-ink" strokeWidth={1.5} />
                    <p className="mt-2 text-sm font-medium text-ink">{loc.split(",")[0]}</p>
                    <p className="text-xs text-muted">Hyderabad, Telangana</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-sm border border-line bg-surface p-6 sm:p-10">
              <h3 className="font-display text-2xl font-light text-ink sm:text-3xl">Send us a message</h3>
              <p className="mt-2 text-sm text-muted">We'll reply within one business day.</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={`${inputBase} ${errors.name ? "border-red-500" : "border-line"}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={`${inputBase} ${errors.phone ? "border-red-500" : "border-line"}`}
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={`${inputBase} ${errors.email ? "border-red-500" : "border-line"}`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink">Service Required</label>
                  <select
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className={`${inputBase} ${errors.service ? "border-red-500" : "border-line"}`}
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1.5 text-xs text-red-600">{errors.service}</p>}
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={`${inputBase} ${errors.message ? "border-red-500" : "border-line"} resize-none`}
                  placeholder="Tell us about your space, timelines and budget…"
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-brand hover:text-ink disabled:opacity-60 sm:w-auto"
              >
                {loading ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/70">Find Us</p>
              <h2 className="mt-3 font-display text-4xl font-light text-ink sm:text-5xl">Visit our studios in Hyderabad</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              { name: "Manikonda Studio", q: "Manikonda, Hyderabad, Telangana" },
              { name: "Miyapur Studio", q: "Miyapur, Hyderabad, Telangana" },
            ].map((loc) => (
              <div key={loc.name} className="overflow-hidden rounded-sm border border-line bg-white">
                <div className="aspect-[16/10] w-full">
                  <iframe
                    title={loc.name}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(loc.q)}&output=embed`}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <div>
                    <h3 className="font-display text-xl font-light text-ink">{loc.name}</h3>
                    <p className="text-sm text-muted">{loc.q}</p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.q)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-ink underline-offset-4 hover:underline"
                  >
                    Directions →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
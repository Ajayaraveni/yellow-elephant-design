import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Instagram, Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-white transition-shadow duration-300",
        scrolled ? "shadow-[0_4px_24px_-12px_rgba(0,0,0,0.15)]" : "",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-2 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-3" aria-label="The Yellow Elephant Interiors">
          <img src={logo} alt="The Yellow Elephant Interiors logo" className="h-[88px] w-auto sm:h-[92px] md:h-[110px] lg:h-[118px]" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative text-sm font-medium uppercase tracking-[0.14em] text-ink/80 transition-colors hover:text-ink",
                  "after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-brand after:transition-all after:duration-300 hover:after:w-full",
                  isActive && "text-ink after:w-full",
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://www.instagram.com/theyellowelephantinteriors/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-all hover:border-ink hover:bg-brand"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="tel:+919703336535"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand hover:text-ink"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "border-b border-line py-4 text-sm font-medium uppercase tracking-[0.14em] text-ink/80 transition-colors hover:text-ink",
                    isActive && "text-ink",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/theyellowelephantinteriors/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="tel:+919703336535"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
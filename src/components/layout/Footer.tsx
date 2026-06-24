import { Link } from "react-router-dom";
import { Instagram, Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4 lg:px-12">
        <div>
          <img src={logo} alt="The Yellow Elephant Interiors" className="h-20 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Transforming spaces in Hyderabad into timeless, elegant experiences that elevate everyday living.
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ink">Quick Links</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li><Link to="/" className="transition-colors hover:text-ink">Home</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-ink">About</Link></li>
            <li><Link to="/services" className="transition-colors hover:text-ink">Services</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-ink">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ink">Services</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li>Residential Interiors</li>
            <li>Modular Kitchens</li>
            <li>Turnkey Solutions</li>
            <li>Home Renovation</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ink">Contact</h4>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
              <a href="tel:+919703336535" className="hover:text-ink">+91 97033 36535</a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
              <a href="https://wa.me/919703336535" className="hover:text-ink">WhatsApp</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
              <a href="mailto:krishnareddy0878@gmail.com" className="hover:text-ink break-all">krishnareddy0878@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
              <a href="https://www.instagram.com/theyellowelephantinteriors/" target="_blank" rel="noreferrer" className="hover:text-ink">@theyellowelephantinteriors</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink" />
              <span>Manikonda & Miyapur, Hyderabad</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-muted sm:px-8 lg:px-12">
          © {new Date().getFullYear()} The Yellow Elephant Interiors. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
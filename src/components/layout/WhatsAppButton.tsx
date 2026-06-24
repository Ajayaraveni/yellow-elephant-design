import whatsapp from "@/assets/whatsapp.png";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919703336535"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 block sm:bottom-7 sm:right-7"
    >
      <span className="relative grid h-14 w-14 place-items-center sm:h-16 sm:w-16">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <img
          src={whatsapp}
          alt=""
          className="relative h-14 w-14 rounded-full shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
        />
      </span>
    </a>
  );
}
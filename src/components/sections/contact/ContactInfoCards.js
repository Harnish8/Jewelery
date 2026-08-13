import { IconMapPin, IconPhone, IconMail, IconClock } from "@/components/Icons";
import { RevealOnScroll, Card3DTilt } from "@/components/LuxuryEffects";

const infoCards = [
  {
    icon: IconMapPin,
    title: "Visit Our Showroom",
    lines: ["Near Tower, Chokshi Bazar, Mathiya Chora, Anand - 388001, Gujarat, India", "Walk-ins welcome during business hours"],
  },
  {
    icon: IconPhone,
    title: "Call Us",
    lines: ["+91 9825238877", "+91 9723295992"],
  },
  {
    icon: IconMail,
    title: "Email Us",
    lines: ["gr_jewellers@ymail.com", "We aim to respond within 1 business day."],
  },
  {
    icon: IconClock,
    title: "Showroom  Hours",
    lines: ["Monday to Saturday 10 am : 8 pm"],
  },
];

export default function ContactInfoCards() {
  return (
    <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto -mt-8 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {infoCards.map((c, idx) => (
          <RevealOnScroll key={c.title} mode="fade-in-up" delay={idx * 100}>
            <Card3DTilt
              spotlightColor="rgba(27, 67, 65, 0.18)"
              className="bg-white p-7 rounded-3xl border border-[#EADFC9] shadow-md h-full"
            >
              <div className="w-11 h-11 rounded-full bg-[#EADFC9]/60 text-[#1B4341] flex items-center justify-center mb-5">
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1B4341]">{c.title}</h3>
              <div className="mt-3 space-y-1">
                {c.lines.map((line) => (
                  <p key={line} className="text-xs text-[#666] font-light">{line}</p>
                ))}
              </div>
            </Card3DTilt>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

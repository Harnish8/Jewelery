import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfoCards from "@/components/sections/contact/ContactInfoCards";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FaqAccordion from "@/components/sections/contact/FaqAccordion";

export const metadata = {
  title: "Contact Us | Eglanto",
  description: "Book a private consultation or reach an Eglanto advisor in Sydney, Melbourne, or Perth.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FBF8F3] text-[#1D1D1D] font-sans selection:bg-[#1B4341] selection:text-white">
      <ContactHero />
      <ContactInfoCards />
      <ContactSplit />
      <FaqAccordion />
    </div>
  );
}

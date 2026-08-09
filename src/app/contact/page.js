import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfoCards from "@/components/sections/contact/ContactInfoCards";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FaqAccordion from "@/components/sections/contact/FaqAccordion";

export const metadata = {
  title: "Contact GR Jewellers | Jewellery Experts in Anand, Gujarat",
  description: "Contact GR Jewellers in Anand for custom jewellery, wedding designs, diamonds and gemstones. Speak with our experts or visit our showroom today.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FBF8F3] text-[#1D1D1D] font-sans selection:bg-[#1B4341] selection:text-white">
      <ContactHero />
      <ContactSplit />
      <FaqAccordion />
    </div>
  );
}

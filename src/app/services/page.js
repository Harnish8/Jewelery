import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesList from "@/components/sections/services/ServicesList";
import WhyChooseUs from "@/components/sections/services/WhyChooseUs";
import ServiceProcess from "@/components/sections/services/ServiceProcess";

export const metadata = {
  title: "Services | G R Jewellers — Bespoke Jewellery & Wedding Specialist",
  description:
    "Bespoke ring designs, wedding jewellery specialist, and ethically sourced gold, silver & diamond retailer. Discover G R Jewellers luxury services.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FBF8F3] text-[#1D1D1D] font-sans selection:bg-[#1B4341] selection:text-white">
      <ServicesHero />
      <ServicesList />
      <WhyChooseUs />
      <ServiceProcess />
    </div>
  );
}

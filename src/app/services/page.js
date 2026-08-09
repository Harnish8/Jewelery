import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesList from "@/components/sections/services/ServicesList";
import WhyChooseUs from "@/components/sections/services/WhyChooseUs";
import ServiceProcess from "@/components/sections/services/ServiceProcess";

export const metadata = {
  title: "Custom & Bespoke Jewellery Services | GR Jewellers Anand",
  description:
    "Explore bespoke jewellery, custom rings and wedding jewellery at GR Jewellers in Anand. Discover personalised gold, diamond and gemstone designs.",
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

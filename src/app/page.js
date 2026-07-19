import Hero from "@/components/sections/Hero";
import StatsBanner from "@/components/sections/StatsBanner";
import JewelleryCollection from "@/components/sections/JewelleryCollection";
import Archive from "@/components/sections/Archive";
import NewArrivals from "@/components/sections/NewArrivals";
import Heritage from "@/components/sections/Heritage";
import Testimonial from "@/components/sections/Testimonial";
import InstagramGallery from "@/components/sections/InstagramGallery";
import About from "@/components/sections/About";
import ContactForm from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <div className="bg-[#FBF8F3] text-[#1D1D1D] min-h-screen font-sans selection:bg-[#1B4341] selection:text-white pb-20">
      <Hero />
      <StatsBanner />
      <JewelleryCollection />
      <Archive />
      <NewArrivals />
      <Heritage />
      <Testimonial />
      <InstagramGallery />
      <About />
      <ContactForm />
    </div>
  );
}

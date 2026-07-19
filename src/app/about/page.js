import AboutHero from "@/components/sections/about/AboutHero";
import OurStory from "@/components/sections/about/OurStory";
import Timeline from "@/components/sections/about/Timeline";
import OurValues from "@/components/sections/about/OurValues";
import OurProcess from "@/components/sections/about/OurProcess";
import Ateliers from "@/components/sections/about/Ateliers";
import AboutCta from "@/components/sections/about/AboutCta";

export const metadata = {
  title: "About Us | Eglanto",
  description: "Five decades of ethical, sustainable jewelry craftsmanship — the story, values, and ateliers behind Eglanto.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FBF8F3] text-[#1D1D1D] font-sans selection:bg-[#1B4341] selection:text-white">
      <AboutHero />
      <OurStory />
      <Timeline />
      <OurValues />
      <OurProcess />
      <Ateliers />
      <AboutCta />
    </div>
  );
}

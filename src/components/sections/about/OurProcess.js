

import { HorizontalScrollShowcase } from "@/components/LuxuryEffects";

const processSteps = [
  { id: 1, title: "Carefully Selected Materials", category: "Step 01", spec: "Premium Certified Materials", image: "/image/webp/modal3.webp" },
  { id: 2, title: "Personal Design Consultation", category: "Step 02", spec: "Custom Design Service", image: "/image/webp/set2.webp" },
  { id: 3, title: "Expert Handcrafting", category: "Step 03", spec: "Master Craftsmanship", image: "/image/webp/modal4.webp" },
  { id: 4, title: "Gemstone & Diamond Setting", category: "Step 04", spec: "Precision Stone Setting", image: "/image/webp/modal1.webp" },
  { id: 5, title: "Quality Inspection & Finishing", category: "Step 05", spec: "Quality Assured", image: "/image/webp/bracelet3.webp" },
];

export default function OurProcess() {
  return (
    <div className="border-y border-[#EADFC9] bg-[#FBF8F3]">
      <HorizontalScrollShowcase
        title="From Vision to Masterpiece"
        subtitle="SWIPE TO DISCOVER OUR CRAFTSMANSHIP"
        items={processSteps}
      />
    </div>
  );
}
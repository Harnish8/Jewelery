import { HorizontalScrollShowcase } from "@/components/LuxuryEffects";

const processSteps = [
  { id: 1, title: "Ethical Sourcing", category: "Step 01", spec: "100% Recycled Gold", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Private Design Consultation", category: "Step 02", spec: "One-on-One Sketching", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Hand Casting", category: "Step 03", spec: "Atelier Furnace Work", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Stone Setting", category: "Step 04", spec: "Conflict-Free Gems", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "Hand Finishing & Polish", category: "Step 05", spec: "Final Quality Pass", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80" },
];

export default function OurProcess() {
  return (
    <div className="border-y border-[#EADFC9] bg-[#FBF8F3]">
      <HorizontalScrollShowcase
        title="From Vault to Velvet Box"
        subtitle="SWIPE TO FOLLOW A COMMISSION THROUGH OUR ATELIER"
        items={processSteps}
      />
    </div>
  );
}

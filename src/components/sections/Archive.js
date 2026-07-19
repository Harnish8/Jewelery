import { HorizontalScrollShowcase } from "@/components/LuxuryEffects";

const eglantoHorizontalArchive = [
  { id: 21, title: "Botanica Emerald Drop Ring", category: "Ethical Gold", spec: "Sydney • Melbourne Vault", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80" },
  { id: 22, title: "L'Arbre de Vie Necklace", category: "Recycled 18k", spec: "100% Australian Gold", image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=800&q=80" },
  { id: 23, title: "Solaris Citrine Bangle", category: "Runway 2026", spec: "Argyle & Gold Heritage", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80" },
  { id: 24, title: "Fleur de Verre Earrings", category: "Hand Sculpted", spec: "Sydney Artisan Edition", image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80" },
  { id: 25, title: "Eglanto Heirloom Solitaire", category: "Bespoke", spec: "Western Australia Origin", image: "https://images.unsplash.com/photo-1620656798579-1984d9e87dfa?auto=format&fit=crop&w=800&q=80" },
];

export default function Archive() {
  return (
    <div id="archive" className="border-y border-[#EADFC9] bg-[#F5EDE1]/60">
      <HorizontalScrollShowcase
        title="Sustainable Gold Archives"
        subtitle="SWIPE HORIZONTALLY TO DISCOVER ETHICALLY SOURCED MASTERPIECES"
        items={eglantoHorizontalArchive}
      />
    </div>
  );
}

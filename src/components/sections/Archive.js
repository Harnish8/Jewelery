import { HorizontalScrollShowcase } from "@/components/LuxuryEffects";

const eglantoHorizontalArchive = [
  { id: 21, title: "Luxury Diamond Rings", category: "DIAMOND JEWELLERY", spec: "Certified Diamonds", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80" },
  { id: 22, title: "Custom Gold Jewellery", category: "GOLD JEWELLERY", spec: "Heritage Crafted", image: "/image/gr/16.png" },
  { id: 23, title: "Bridal & Wedding Collection", category: "WEDDING JEWELLERY", spec: "Made for Every Celebration", image: "/image/gr/26.png" },
  { id: 24, title: "Custom Heritage Jewellery", category: "PERSONALISED", spec: "Designed Just for You", image: "/image/gr/6.png" },
  { id: 25, title: "Colour Stone Collection", category: "GEMSTONE JEWELLERY", spec: "Natural Certified Stones", image: "/image/stone.jpg" },
];

export default function Archive() {
  return (
    <div id="archive" className="border-y border-[#EADFC9] bg-[#F5EDE1]/60">
      <HorizontalScrollShowcase
        title="Explore Timeless Jewellery Collections"
        subtitle="DISCOVER OUR SIGNATURE COLLECTIONS"
        items={eglantoHorizontalArchive}
      />
    </div>
  );
}

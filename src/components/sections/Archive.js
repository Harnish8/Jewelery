import { HorizontalScrollShowcase } from "@/components/LuxuryEffects";

const eglantoHorizontalArchive = [
  { id: 21, title: "Luxury Diamond Rings", category: "DIAMOND JEWELLERY", spec: "Certified Diamonds", image: "/image/webp/ring5.webp" },
  { id: 22, title: "Custom Gold Jewellery", category: "GOLD JEWELLERY", spec: "Heritage Crafted", image: "/image/webp/set4.webp" },
  { id: 23, title: "Bridal & Wedding Collection", category: "WEDDING JEWELLERY", spec: "Made for Every Celebration", image: "/image/webp/modal4.webp" },
  { id: 24, title: "Custom Heritage Jewellery", category: "PERSONALISED", spec: "Designed Just for You", image: "/image/webp/set5.webp" },
  { id: 25, title: "Colour Stone Collection", category: "GEMSTONE JEWELLERY", spec: "Natural Certified Stones", image: "/image/webp/earring.webp" },
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

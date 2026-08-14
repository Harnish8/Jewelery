import Link from "next/link";
import { IconInstagram, IconFacebook, IconTwitter } from "@/components/Icons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1B4341] text-white pt-20 pb-12 px-6 mt-16 border-t border-[#122D2B]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-white/15 text-sm font-light">
        <div>
          <Link href="/" className="flex items-center gap-2 text-3xl font-serif font-bold text-white mb-4">
            <span className="relative h-10 w-[62px] sm:h-12 sm:w-[74px] lg:h-14 lg:w-[86px] shrink-0">
                          <Image
                            src="/image/logo.webp"
                            alt="G R Jewellers"
                            fill
                            quality={80}
                            sizes="(max-width: 640px) 124px, (max-width: 1024px) 148px, 172px"
                            className="object-contain image-render-crisp"
                          />
                        </span>
            <span>G R Jewellers</span>
          </Link>
          <p className="text-xs text-zinc-300 leading-relaxed max-w-xs">
            Discover timeless diamond, gold and silver jewellery at GR Jewellers, a trusted jewellery store in Anand, handcrafted by a GIA Certified Jeweller.
          </p>
          {/* <div className="flex items-center gap-4 mt-6 text-zinc-300">
            <Link href="https://www.instagram.com/g.r.jewellerss/" ><IconInstagram className="w-4 h-4 cursor-pointer hover:text-white" /></Link>
            <Link href="https://www.facebook.com/GRJewellers/" ><IconFacebook className="w-4 h-4 cursor-pointer hover:text-white" /></Link>
          </div> */}
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-amber-200 mb-4 font-sans">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-zinc-300">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-amber-200 mb-4 font-sans">
            Support
          </h4>
          <ul className="space-y-2.5 text-xs text-zinc-300">
            <li><Link href="#shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link href="#sizing" className="hover:text-white transition-colors">Ring Size Guide</Link></li>
            <li><Link href="#care" className="hover:text-white transition-colors">Jewellery Care Instructions</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Customer Service</Link></li>
          </ul>
        </div> */}

        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-amber-200 mb-4 font-sans">
            Stay Connected
          </h4>
          <p className="text-xs text-zinc-300 mb-4">
            Contact us for more details.
          </p>
          {/* <div className="flex border border-white/30 rounded-full bg-black/30 overflow-hidden p-1">
            <input
              type="email"
              placeholder="Enter your email..."
              className="bg-transparent text-xs px-3 py-1.5 flex-1 outline-none text-white placeholder:text-zinc-400"
            />
            <button className="px-4 py-1.5 bg-white text-[#1B4341] rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-amber-100 transition-colors">
              Join
            </button>
          </div> */}
          <div className="flex items-center gap-4 mt-6 text-zinc-300">
            <Link href="https://www.instagram.com/g.r.jewellerss/" ><IconInstagram className="w-4 h-4 cursor-pointer hover:text-white" /></Link>
            <Link href="https://www.facebook.com/GRJewellers/" ><IconFacebook className="w-4 h-4 cursor-pointer hover:text-white" /></Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400">
        <p>Copyright © {new Date().getFullYear()} G R Jewellers. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/termsconditions" className="hover:text-white">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

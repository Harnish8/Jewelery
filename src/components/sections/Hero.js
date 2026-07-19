/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowRight, IconPlay } from "@/components/Icons";
import { RevealOnScroll, TextSplitReveal, ParallaxBox } from "@/components/LuxuryEffects";

export default function Hero() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <section id="home" className="max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content (Span 7) */}
        <div className="lg:col-span-7 pr-0 lg:pr-8">
          <RevealOnScroll mode="fade-in-up" delay={100}>
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#1B4341] bg-[#EADFC9]/60 px-4 py-2 rounded-full inline-block mb-6 shadow-sm">
              Ethical Luxury Collection 2026
            </span>
          </RevealOnScroll>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-light text-[#1B4341] leading-[1.1] tracking-tight">
            <TextSplitReveal text="Desire Meets" type="words" delay={200} /> <br />
            <span className="inline-flex items-center align-middle mx-1 px-3.5 py-1 rounded-full bg-white border border-[#EADFC9] shadow-md transform -rotate-3 hover:rotate-0 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=160&q=80"
                alt="Diamond Ring Pill"
                className="w-16 sm:w-20 h-9 sm:h-11 object-cover rounded-full"
              />
            </span>{" "}
            <TextSplitReveal text="New Style" type="words" delay={350} />
          </h1>

          <RevealOnScroll mode="fade-in-up" delay={450}>
            <p className="mt-8 text-base sm:text-lg text-[#666] font-light max-w-lg leading-relaxed">
              A celebration of modern jewelry crafted with sustainable gold and natural ethically sourced stones to illuminate your unique everyday style.
            </p>
          </RevealOnScroll>

          <RevealOnScroll mode="fade-in-up" delay={600} className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="#products"
              className="bg-[#1B4341] text-white px-10 py-4.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#122D2B] transition-all shadow-lg flex items-center gap-3 transform hover:-translate-y-0.5"
            >
              <span>Explore Creations</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setShowVideoModal(true)}
              className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#1B4341] hover:opacity-80 transition-all bg-white px-6 py-3.5 rounded-full border border-[#EADFC9] shadow-sm"
            >
              <span className="w-8 h-8 rounded-full bg-[#1B4341] text-white flex items-center justify-center">
                <IconPlay className="w-3.5 h-3.5 ml-0.5" />
              </span>
              <span>Watch Campaign Audio</span>
            </button>
          </RevealOnScroll>
        </div>

        {/* Right Arched & Staggered Showcase Collage (Span 5) with #3 Parallax Box & #5 Scale-on-scroll */}
        <div className="lg:col-span-5 relative min-h-[460px] flex items-center justify-end">
          <ParallaxBox speed={0.12} scaleOnScroll={true} className="w-full flex justify-end">
            {/* Main Arched Frame running jewel2.mp4 smoothly */}
            <div className="w-4/5 aspect-[3/4] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl bg-[#EADFC9] border-4 border-white relative">
              <video
                src="/Video/jewel2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </ParallaxBox>

          {/* Floating Top Right Rectangular Frame with #2 Clip-path wipe */}
          <RevealOnScroll mode="clip-wipe" delay={300} className="absolute top-4 right-0 w-2/5 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#EADFC9]">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
              alt="Woman touching necklace"
              className="w-full h-full object-cover"
            />
          </RevealOnScroll>

          {/* Decorative Warm Accent Curve */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#1B4341]/20 rounded-tl-full pointer-events-none" />
        </div>
      </section>

      {/* Video Modal with full audio if requested */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-scale-up">
          <div className="relative max-w-5xl w-full bg-[#1A1A1A] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="p-4 bg-[#262626] flex items-center justify-between border-b border-white/10 text-white font-sans">
              <span className="font-serif text-lg">✿ Eglanto Campaign Video (`jewel2.mp4`)</span>
              <button
                onClick={() => setShowVideoModal(false)}
                className="px-5 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-black text-xs font-bold transition-all"
              >
                Close ✕
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <video
                src="/Video/jewel2.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * 1. RevealOnScroll (#1 Fade-in-up, #2 Clip-path wipe, #4 Card stagger, #5 Scale-on-scroll, #10 Image mask)
 */
export function RevealOnScroll({
  children,
  mode = "fade-in-up",
  delay = 0,
  duration = 900,
  className = "",
  threshold = 0.15,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  // Compute style based on mode
  let baseStyle = {
    transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  };

  if (mode === "fade-in-up") {
    baseStyle = {
      ...baseStyle,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0px)" : "translateY(36px)",
    };
  } else if (mode === "scale-up") {
    baseStyle = {
      ...baseStyle,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "scale(1)" : "scale(0.92)",
    };
  } else if (mode === "clip-wipe") {
    baseStyle = {
      ...baseStyle,
      clipPath: isVisible ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
    };
  } else if (mode === "clip-wipe-up") {
    baseStyle = {
      ...baseStyle,
      clipPath: isVisible ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
    };
  }

  return (
    <div ref={ref} style={baseStyle} className={className}>
      {children}
    </div>
  );
}

/**
 * 2. TextSplitReveal (#6 Text split/reveal character or word by word, #11 Staggered lines)
 */
export function TextSplitReveal({
  text,
  type = "words",
  className = "",
  wordClassName = "",
  stagger = 40,
  delay = 100,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = type === "words" ? text.split(" ") : text.split("");

  return (
    <div ref={ref} className={`inline-flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {items.map((item, idx) => (
        <span
          key={idx}
          className={`inline-block transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${wordClassName}`}
          style={{
            transitionDelay: `${delay + idx * stagger}ms`,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0) skewY(0deg)" : "translateY(24px) skewY(6deg)",
          }}
        >
          {item}
          {type === "words" && idx < items.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </div>
  );
}

/**
 * 3. ParallaxBox (#3 Parallax movement, #5 Scale-on-scroll zoom)
 */
export function ParallaxBox({
  children,
  speed = 0.15,
  scaleOnScroll = false,
  className = "",
}) {
  const ref = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if element is near viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrolledDistance = windowHeight - rect.top;
        setOffsetY(scrolledDistance * speed);

        if (scaleOnScroll) {
          const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
          setScale(1 + progress * 0.12);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, scaleOnScroll]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={{
          transform: `translateY(${offsetY}px) scale(${scale})`,
          transition: "transform 0.1s ease-out",
        }}
        className="w-full h-full"
      >
        {children}
      </div>
    </div>
  );
}

/**
 * 4. Card3DTilt (#13 Cursor-follow / hover parallax on cards + spotlight)
 */
export function Card3DTilt({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.18)",
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-10 to +10 deg)
    const rY = ((mouseX - width / 2) / width) * 16;
    const rX = -((mouseY - height / 2) / height) * 16;

    setRotateX(rX);
    setRotateY(rY);
    setSpotlightPos({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setSpotlightPos({ x: -1000, y: -1000 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? "transform 0.08s linear" : "transform 0.5s ease-out",
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Spotlight effect overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-30"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}

/**
 * 5. HorizontalScrollShowcase (#9 Horizontal scroll section)
 */
export function HorizontalScrollShowcase({
  title = "Horizontal Haute Gallery",
  subtitle = "SWIPE OR USE ARROWS TO EXPLORE THE RUNWAY ARCHIVES",
  items,
  className = "py-20",
  cardClassName = "w-80 sm:w-96",
}) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={className}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-end justify-between mb-10">
        <div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#63675E] font-bold block mb-2">
            {subtitle}
          </span>
          <h3 className="text-3xl sm:text-5xl font-serif tracking-tight">{title}</h3>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full border border-current/30 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full border border-current/30 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal overflow slider */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth px-6 lg:px-16 pb-8"
      >
        {items.map((item, idx) => (
          <RevealOnScroll
            key={item.id}
            mode="fade-in-up"
            delay={idx * 120}
            className={`shrink-0 ${cardClassName}`}
          >
            <Card3DTilt className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-lg group">
              <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif font-medium">{item.title}</h4>
                <div className="mt-4 flex items-center justify-between pt-4 border-t border-zinc-100 gap-2">
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#63675E] bg-[#F4F1E9] px-3 py-1.5 rounded-full">
                    {item.spec || item.price || "Bespoke Archive"}
                  </span>
                  <a href="#contact" className="px-5 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-amber-600 transition-colors">
                    Inquire Vault
                  </a>
                </div>
              </div>
            </Card3DTilt>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}

/**
 * 6. SectionBgTransition (#12 Background color/section transition when scrolled in)
 */
export function SectionBgTransition({
  children,
  bgInView,
  bgOutView = "bg-transparent text-current",
  className = "",
}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out ${
        isInView ? bgInView : bgOutView
      } ${className}`}
    >
      {children}
    </div>
  );
}

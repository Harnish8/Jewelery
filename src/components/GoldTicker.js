"use client";

import { useEffect, useState } from "react";

const API_URL = "https://script.google.com/macros/s/AKfycbxH2A6uvQLg48lldgbqKhsrGL4jooe-V0iJdc-UTHdXtF2b1rat9UlEBMKN8nWqMCA/exec";

export default function GoldTicker() {
  const [text, setText] = useState(
    "Loading today's gold rate..."
  );

  useEffect(() => {
    let mounted = true;

    async function fetchRates() {
      try {
        const response = await fetch(API_URL, {
          cache: "no-store",
        });

        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();

        if (mounted) {
          setText(
            data.marquee ||
              "📞 Call us for today's latest Gold Rate."
          );
        }
      } catch (error) {
        console.error(error);

        if (mounted) {
          setText(
            "📞 Call 9825238877 for today's latest Gold Rate."
          );
        }
      }
    }

    // Initial fetch
    fetchRates();

    // Refresh every 5 minutes
    const interval = setInterval(fetchRates, 5 * 60 * 1000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-white border-b border-[#C9A646] h-10 flex items-center">
      <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center bg-[#C9A646] px-4 text-[#1B4341] font-bold text-xs uppercase tracking-wider">
        LIVE RATE
      </div>

      <div className="overflow-hidden w-full ml-[95px]">
        <div className="ticker whitespace-nowrap">
          <span className="text-[#1B4341] text-sm font-medium px-8">
            {text}
          </span>
          <span className="text-[#1B4341] text-sm font-medium px-8">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
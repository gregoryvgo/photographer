"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Έλεγχος αν ο χρήστης έχει ήδη κάνει επιλογή
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Μικρή καθυστέρηση για ομαλή εμφάνιση
      const timer = setTimeout(() => setIsVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 lg:left-auto lg:right-8 lg:max-w-md z-50 animate-fade-up">
      <div className="bg-[#0F172A] text-[#FDFBF7] p-6 rounded-2xl border border-[#E8DEC8]/30 shadow-2xl backdrop-blur-md">
        
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-calligraphy text-2xl md:text-3xl text-[#E8DEC8]">
            Πολιτική Cookies
          </h3>
          <span className="text-xl">🍪</span>
        </div>

        <p className="font-sans-clean text-xs md:text-sm text-[#FDFBF7]/80 leading-relaxed mb-6 font-light">
          Χρησιμοποιούμε cookies για να διασφαλίσουμε την καλύτερη εμπειρία περιήγησης και προβολής του portfolio μας.{" "}
          <Link
            href="/cookies"
            className="text-[#E8DEC8] underline underline-offset-2 hover:text-[#D1C2A5] transition"
          >
            Μάθετε περισσότερα
          </Link>
        </p>

        <div className="flex items-center gap-3 font-sans-clean">
          <button
            onClick={handleAccept}
            className="flex-1 bg-[#E8DEC8] hover:bg-[#D1C2A5] text-[#0F172A] py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition duration-200 active:scale-95 cursor-pointer shadow-md"
          >
            Αποδοχη
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 border border-white/20 hover:bg-white/10 text-white py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition duration-200 active:scale-95 cursor-pointer"
          >
            Απορριψη
          </button>
        </div>

      </div>
    </div>
  );
}
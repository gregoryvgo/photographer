"use client";

import { useState, useEffect, useRef, TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";

const allGalleryPhotos = [
  { src: "/images/weddingPhotos.webp", title: "Συλλογή Γάμου" },
  { src: "/images/baptismPhotos.webp", title: "Συλλογή Βάπτισης" },
  { src: "/images/wedding-1.webp", title: "Φωτογραφία Γάμου 1" },
  { src: "/images/wedding-2.webp", title: "Φωτογραφία Γάμου 2" },
  { src: "/images/wedding-3.webp", title: "Φωτογραφία Γάμου 3" },
  { src: "/images/wedding-4.webp", title: "Φωτογραφία Γάμου 4" },
  { src: "/images/wedding-5.webp", title: "Φωτογραφία Γάμου 5" },
  { src: "/images/wedding-6.webp", title: "Φωτογραφία Γάμου 6" },
  { src: "/images/wedding-7.webp", title: "Φωτογραφία Γάμου 7" },
  { src: "/images/wedding-8.webp", title: "Φωτογραφία Γάμου 8" },
  { src: "/images/wedding-9.webp", title: "Φωτογραφία Γάμου 9" },
  { src: "/images/wedding-10.webp", title: "Φωτογραφία Γάμου 10" },
  { src: "/images/wedding-11.webp", title: "Φωτογραφία Γάμου 11" },
  { src: "/images/wedding-12.webp", title: "Φωτογραφία Γάμου 12" },
  { src: "/images/baptism-1.webp", title: "Φωτογραφία Βάπτισης 1" },
  { src: "/images/baptism-2.webp", title: "Φωτογραφία Βάπτισης 2" },
  { src: "/images/baptism-3.webp", title: "Φωτογραφία Βάπτισης 3" },
  { src: "/images/baptism-4.webp", title: "Φωτογραφία Βάπτισης 4" },
  { src: "/images/baptism-5.webp", title: "Φωτογραφία Βάπτισης 5" },
  { src: "/images/baptism-6.webp", title: "Φωτογραφία Βάπτισης 6" },
  { src: "/images/baptism-7.webp", title: "Φωτογραφία Βάπτισης 7" },
  { src: "/images/baptism-8.webp", title: "Φωτογραφία Βάπτισης 8" },
  { src: "/images/baptism-9.webp", title: "Φωτογραφία Βάπτισης 9" },
  { src: "/images/baptism-10.webp", title: "Φωτογραφία Βάπτισης 10" },
];

const infinitePhotos = [...allGalleryPhotos, ...allGalleryPhotos];

export default function HomePage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const modalTouchStartX = useRef<number | null>(null);
  const modalTouchEndX = useRef<number | null>(null);

  const showNextModal = () => {
    if (modalIndex !== null) {
      setModalIndex((prev) => (prev! + 1) % allGalleryPhotos.length);
    }
  };

  const showPrevModal = () => {
    if (modalIndex !== null) {
      setModalIndex((prev) =>
        prev! === 0 ? allGalleryPhotos.length - 1 : prev! - 1
      );
    }
  };

  const closeModal = () => setModalIndex(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalIndex === null) return;
      if (e.key === "ArrowRight") showNextModal();
      if (e.key === "ArrowLeft") showPrevModal();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIndex]);

  const handleModalTouchStart = (e: TouchEvent) => {
    modalTouchStartX.current = e.targetTouches[0].clientX;
  };

  const handleModalTouchMove = (e: TouchEvent) => {
    modalTouchEndX.current = e.targetTouches[0].clientX;
  };

  const handleModalTouchEnd = () => {
    if (!modalTouchStartX.current || !modalTouchEndX.current) return;
    const distance = modalTouchStartX.current - modalTouchEndX.current;
    if (distance > 50) showNextModal();
    if (distance < -50) showPrevModal();
    modalTouchStartX.current = null;
    modalTouchEndX.current = null;
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0F172A] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center text-center px-6 py-20 overflow-hidden">
        <Image
          src="/images/hero.webp"
          alt="Artistic Lens Hero"
          fill
          priority
          className="object-cover object-center brightness-[0.45]"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto animate-drop-top text-white">
          <p className="font-sans-clean text-xs md:text-sm tracking-[0.4em] uppercase text-[#E8DEC8] font-light mb-4 drop-shadow">
            ARTISTIC LENS PHOTOGRAPHY
          </p>

          <h1 className="font-calligraphy text-5xl sm:text-7xl md:text-8xl text-[#FDFBF7] mb-6 drop-shadow-lg leading-tight">
            Δημιουργώντας Αναμνήσεις <br className="hidden sm:inline" /> που Διαρκούν
          </h1>

          <p className="font-sans-clean text-base md:text-lg text-[#FDFBF7]/90 font-light max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow">
            Απαθανατίζουμε τις πιο αυθεντικές και συναισθηματικές στιγμές του γάμου και της βάπτισης με φυσικό φως και καλλιτεχνική προσέγγιση.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/gallery"
              className="w-full sm:w-auto bg-[#E8DEC8] hover:bg-[#D1C2A5] text-[#0F172A] px-8 py-3.5 rounded-full font-sans-clean font-semibold tracking-wider text-xs md:text-sm uppercase transition duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(232,222,200,0.3)] active:scale-95"
            >
              ΔΕΙΤΕ ΤΙΣ ΣΥΛΛΟΓΕΣ
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-[#E8DEC8] hover:bg-[#E8DEC8] hover:text-[#0F172A] text-[#FDFBF7] px-8 py-3.5 rounded-full font-sans-clean font-semibold tracking-wider text-xs md:text-sm uppercase transition duration-300 backdrop-blur-xs active:scale-95"
            >
              ΕΠΙΚΟΙΝΩΝΙΑ
            </Link>
          </div>
        </div>
      </section>

      {/* 2. AUTO-SCROLLING CAROUSEL */}
      <section className="py-20 bg-[#FDFBF7] text-[#0F172A] border-t border-[#E8DEC8]/50 overflow-hidden">
        {/* Κεντραρισμένη Επικεφαλίδα */}
        <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
          <p className="font-sans-clean text-xs md:text-sm tracking-[0.35em] uppercase text-[#1E2A3A]/70 font-light mb-2">
            PORTFOLIO HIGHLIGHTS
          </p>
          <h2 className="font-calligraphy text-4xl md:text-5xl text-[#0F172A]">
            Όλες οι Στιγμές
          </h2>
        </div>

        {/* Track με εικόνες */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-infinite-scroll pause-on-hover flex gap-6 pr-6">
            {infinitePhotos.map((photo, index) => {
              const originalIndex = index % allGalleryPhotos.length;
              return (
                <div
                  key={index}
                  onClick={() => setModalIndex(originalIndex)}
                  className="w-72 sm:w-80 md:w-96 h-80 relative shrink-0 rounded-2xl overflow-hidden bg-[#E8DEC8]/20 border border-[#E8DEC8] cursor-pointer shadow-md group transition-transform duration-300 hover:scale-[1.02]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    loading="eager"
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-[#0F172A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#0F172A] text-[#FDFBF7] font-sans-clean text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg">
                      Προβολη
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LIGHTBOX MODAL */}
      {modalIndex !== null && (
        <div
          onClick={closeModal}
          onTouchStart={handleModalTouchStart}
          onTouchMove={handleModalTouchMove}
          onTouchEnd={handleModalTouchEnd}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 select-none touch-pan-y animate-in fade-in duration-200"
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-50 text-white/80 hover:text-white text-3xl font-light p-2 transition focus:outline-none cursor-pointer"
            aria-label="Κλείσιμο"
          >
            ✕
          </button>

          <div className="absolute top-6 left-6 text-[#E8DEC8] text-sm tracking-widest font-mono">
            {modalIndex + 1} / {allGalleryPhotos.length}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrevModal();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition shadow-lg focus:outline-none cursor-pointer"
            aria-label="Προηγούμενη φωτογραφία"
          >
            &#8249;
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[75vh] md:h-[85vh] flex items-center justify-center"
          >
            <Image
              src={allGalleryPhotos[modalIndex].src}
              alt={allGalleryPhotos[modalIndex].title}
              fill
              unoptimized
              className="object-contain transition-all duration-300 pointer-events-none"
              sizes="100vw"
              priority
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNextModal();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition shadow-lg focus:outline-none cursor-pointer"
            aria-label="Επόμενη φωτογραφία"
          >
            &#8250;
          </button>
        </div>
      )}

    </div>
  );
}
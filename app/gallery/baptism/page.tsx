"use client";

import { useState, useEffect, useRef, TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";

const baptismPhotos = [
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

export default function BaptismGalleryPage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const modalTouchStartX = useRef<number | null>(null);
  const modalTouchEndX = useRef<number | null>(null);

  const showNextModal = () => {
    if (modalIndex !== null) {
      setModalIndex((prev) => (prev! + 1) % baptismPhotos.length);
    }
  };

  const showPrevModal = () => {
    if (modalIndex !== null) {
      setModalIndex((prev) =>
        prev! === 0 ? baptismPhotos.length - 1 : prev! - 1
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
    <div className="max-w-7xl mx-auto px-6 py-16 overflow-hidden">
      {/* 1. Επικεφαλίδα που πέφτει από πάνω */}
      <div className="text-center mb-12 animate-drop-top">
        <h1 className="font-calligraphy text-5xl md:text-7xl text-[#0F172A] mb-3">
          Φωτογραφίες Βάπτισης
        </h1>
        <Link
          href="/gallery"
          className="font-sans-clean text-xs md:text-sm uppercase tracking-widest text-[#0F172A]/60 hover:text-[#0F172A] transition"
        >
          ← Πίσω στη Gallery
        </Link>
      </div>

      {/* 2. Grid Φωτογραφιών που έρχονται από αριστερά προς τα δεξιά */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {baptismPhotos.map((photo, index) => (
          <div
            key={index}
            onClick={() => setModalIndex(index)}
            style={{ animationDelay: `${(index % 4) * 100 + 150}ms` }}
            className="animate-slide-left-to-right group relative h-80 rounded-2xl overflow-hidden bg-[#E8DEC8]/20 border border-[#E8DEC8]/60 cursor-pointer shadow-md transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              unoptimized
              loading="eager"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-[#0F172A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-[#0F172A] text-[#FDFBF7] font-sans-clean text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                Προβολή
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Lightbox Modal */}
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
            {modalIndex + 1} / {baptismPhotos.length}
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
              src={baptismPhotos[modalIndex].src}
              alt={baptismPhotos[modalIndex].title}
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
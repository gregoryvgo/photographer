import Link from "next/link";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-center overflow-hidden">
      <div className="animate-drop-top mb-12">
        <p className="font-sans-clean text-xs md:text-sm tracking-[0.35em] uppercase text-[#1E2A3A]/70 font-light mb-2">
          PORTFOLIO
        </p>
        <h1 className="font-calligraphy text-6xl md:text-7xl text-[#0F172A] mb-4">
          Gallery
        </h1>
        <p className="font-sans-clean text-base text-slate-600 max-w-lg mx-auto">
          Επιλέξτε μία από τις κατηγορίες για να δείτε αναλυτικά τις στιγμές.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Κάρτα Γάμου */}
        <Link
          href="/gallery/wedding"
          className="group relative h-96 overflow-hidden rounded-2xl shadow-lg block animate-slide-left-to-right"
        >
          <Image
            src="/images/weddingPhotos.webp"
            alt="Συλλογή Γάμου"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <h2 className="font-calligraphy text-5xl md:text-6xl text-[#FDFBF7]">
              Γάμος
            </h2>
          </div>
        </Link>

        {/* Κάρτα Βάπτισης */}
        <Link
          href="/gallery/baptism"
          className="group relative h-96 overflow-hidden rounded-2xl shadow-lg block animate-slide-right-to-left"
        >
          <Image
            src="/images/baptismPhotos.webp"
            alt="Συλλογή Βάπτισης"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <h2 className="font-calligraphy text-5xl md:text-6xl text-[#FDFBF7]">
              Βάπτιση
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
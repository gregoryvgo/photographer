import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#D1C2A5]/30 font-sans-clean">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-logo text-3xl text-[#0F172A]">
          Photgraphy Lensium 
        </Link>
        <div className="flex gap-8 text-lg font-medium text-[#0F172A] font-sans-clean">
          <Link href="/" className="hover:text-[#D1C2A5] transition">Αρχική</Link>
          <div className="relative group">
            <Link href="/gallery" className="hover:text-[#D1C2A5] transition">
              Gallery
            </Link>
            <div className="absolute left-0 hidden group-hover:flex flex-col bg-[#FDFBF7] border border-[#D1C2A5]/20 shadow-md py-2 w-32 rounded-md">
              <Link href="/gallery/wedding" className="px-4 py-2 hover:bg-[#E8DEC8]/30 text-sm">Γάμος</Link>
              <Link href="/gallery/baptism" className="px-4 py-2 hover:bg-[#E8DEC8]/30 text-sm">Βάπτιση</Link>
            </div>
          </div>
          <Link href="/about" className="hover:text-[#D1C2A5] transition">Σχετικά</Link>
          <Link href="/contact" className="hover:text-[#D1C2A5] transition">Επικοινωνία</Link>
        </div>
      </nav>
    </header>
  );
}
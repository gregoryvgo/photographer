import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#FDFBF7] py-8 text-center text-sm border-t border-[#1E2A3A] font-sans-clean">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-logo text-3xl mb-2 text-[#E8DEC8]">
          Photgraphy Lensium
        </p>
        <p className="font-sans-clean mb-2">© {new Date().getFullYear()} Όλα τα δικαιώματα διατηρούνται.</p>
        <p className="flex justify-center gap-4 text-xs text-[#FDFBF7]/60">
          <Link href="/privacy" className="hover:text-[#E8DEC8] transition underline underline-offset-4">
            Πολιτική Απορρήτου
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-[#E8DEC8] transition underline underline-offset-4">
            Όροι Χρήσης
          </Link>
        </p>
      </div>
    </footer>
  );
}
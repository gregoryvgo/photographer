import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-[85vh] py-16 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* 1. Επικεφαλίδα */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="font-calligraphy text-5xl md:text-7xl text-[#0F172A] mb-3">
            Όροι Χρήσης
          </h1>
          <p className="font-sans-clean text-slate-600 text-sm md:text-base max-w-lg mx-auto">
            Διαβάστε προσεκτικά τους όρους και τις προϋποθέσεις χρήσης της ιστοσελίδας και των υπηρεσιών μας.
          </p>
        </div>

        {/* 2. Περιεχόμενο */}
        <div
          className="bg-white p-8 md:p-12 rounded-2xl border border-[#E8DEC8]/60 shadow-md font-sans-clean text-slate-700 leading-relaxed space-y-8 animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          {/* Εισαγωγή */}
          <div>
            <h2 className="text-lg font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
              1. Εισαγωγη
            </h2>
            <p className="text-sm">
              Η πρόσβαση και η περιήγηση στον ιστότοπο <strong>Photgraphy Lensium</strong> προϋποθέτει την πλήρη και ανεπιφύλακτη αποδοχή των παρόντων όρων χρήσης. Εάν δεν συμφωνείτε με τους όρους αυτούς, παρακαλούμε να μην χρησιμοποιήσετε την ιστοσελίδα.
            </p>
          </div>

          {/* Πνευματική Ιδιοκτησία */}
          <div>
            <h2 className="text-lg font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
              2. Πνευματικη Ιδιοκτησια (Copyright)
            </h2>
            <p className="text-sm mb-3">
              Όλο το φωτογραφικό υλικό, τα κείμενα, τα γραφικά, τα λογότυπα και η γενική διάταξη της ιστοσελίδας αποτελούν πνευματική ιδιοκτησία του <strong>Photgraphy Lensium</strong> και προστατεύονται από την ελληνική και ευρωπαϊκή νομοθεσία περί πνευματικών δικαιωμάτων.
            </p>
            <p className="text-sm text-slate-600 italic">
              * Απαγορεύεται ρητά η αντιγραφή, αναπαραγωγή, λήψη, τροποποίηση ή εμπορική εκμετάλλευση οποιασδήποτε φωτογραφίας χωρίς προηγούμενη έγγραφη άδεια.
            </p>
          </div>

          {/* Υπηρεσίες & Κρατήσεις */}
          <div>
            <h2 className="text-lg font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
              3. Υπηρεσιες & Κρατησεις
            </h2>
            <p className="text-sm">
              Οι πληροφορίες και τα δείγματα δουλειάς που παρουσιάζονται στον ιστότοπο έχουν ενημερωτικό χαρακτήρα. Για την οριστικοποίηση οποιασδήποτε κράτησης φωτογράφισης (γάμου, βάπτισης ή άλλης εκδήλωσης), απαιτείται προσωπική επικοινωνία, υπογραφή ιδιωτικού συμφωνητικού και καταβολή της συμφωνηθείσας προκαταβολής.
            </p>
          </div>

          {/* Περιορισμός Ευθύνης */}
          <div>
            <h2 className="text-lg font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
              4. Περιορισμος Ευθυνης
            </h2>
            <p className="text-sm">
              Καταβάλλουμε κάθε δυνατή προσπάθεια για τη σωστή και ασφαλή λειτουργία του ιστοτόπου. Δεν φέρουμε ευθύνη για τυχόν τεχνικά προβλήματα, προσωρινή μη διαθεσιμότητα της σελίδας ή βλάβες που μπορεί να προκληθούν από κακόβουλο λογισμικό τρίτων.
            </p>
          </div>

          {/* Τροποποίηση Όρων */}
          <div>
            <h2 className="text-lg font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
              5. Τροποποιηση Ορων
            </h2>
            <p className="text-sm">
              Διατηρούμε το δικαίωμα να τροποποιούμε τους παρόντες όρους ανά πάσα στιγμή χωρίς προηγούμενη ειδοποίηση. Οι αλλαγές τίθενται σε ισχύ αμέσως μετά τη δημοσίευσή τους στην ιστοσελίδα.
            </p>
          </div>

          {/* Footer Box */}
          <div className="pt-6 border-t border-[#E8DEC8]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Τελευταία ενημέρωση: 2026
            </p>
            <Link
              href="/contact"
              className="text-xs uppercase tracking-wider font-semibold text-[#0F172A] hover:text-[#D1C2A5] transition"
            >
              Επικοινωνήστε μαζί μας →
            </Link>
          </div>
        </div>

        {/* 3. Κουμπί Επιστροφής */}
        <div className="text-center mt-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <Link
            href="/"
            className="font-sans-clean text-xs md:text-sm uppercase tracking-widest text-[#0F172A]/60 hover:text-[#0F172A] transition"
          >
            ← Επιστροφή στην Αρχική
          </Link>
        </div>
      </div>
    </div>
  );
}
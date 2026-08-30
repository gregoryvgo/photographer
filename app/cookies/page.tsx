import Link from "next/link";

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-[85vh] py-16 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* 1. Επικεφαλίδα από κάτω */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="font-calligraphy text-5xl md:text-7xl text-[#0F172A] mb-3">
            Πολιτική Cookies
          </h1>
          <p className="font-sans-clean text-slate-600 text-sm md:text-base max-w-lg mx-auto">
            Ενημερωθείτε για τον τρόπο με τον οποίο χρησιμοποιούμε τα cookies στην ιστοσελίδα μας.
          </p>
        </div>

        {/* 2. Κυρίως Κείμενο */}
        <div
          className="bg-white p-8 md:p-12 rounded-2xl border border-[#E8DEC8]/60 shadow-md font-sans-clean text-slate-700 leading-relaxed space-y-8 animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          {/* Τι είναι τα cookies */}
          <div>
            <h2 className="text-lg font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
              1. Τι είναι τα Cookies;
            </h2>
            <p className="text-sm">
              Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας όταν επισκέπτεστε έναν ιστότοπο. Χρησιμοποιούνται ευρέως για να κάνουν τους ιστότοπους να λειτουργούν πιο αποτελεσματικά και να προσφέρουν μια εξατομικευμένη εμπειρία περιήγησης.
            </p>
          </div>

          {/* Ποια cookies χρησιμοποιούμε */}
          <div>
            <h2 className="text-lg font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
              2. Ποια Cookies Χρησιμοποιούμε;
            </h2>
            <div className="space-y-4 text-sm mt-3">
              <div className="p-4 rounded-xl bg-[#FDFBF7] border border-[#E8DEC8]/50">
                <p className="font-semibold text-[#0F172A] mb-1">Απαραίτητα Cookies</p>
                <p className="text-xs text-slate-600">
                  Είναι αναγκαία για την ομαλή λειτουργία και πλοήγηση στην ιστοσελίδα, επιτρέποντας βασικές λειτουργίες όπως η ασφάλεια και η προβολή περιεχομένου.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FDFBF7] border border-[#E8DEC8]/50">
                <p className="font-semibold text-[#0F172A] mb-1">Cookies Επιδόσεων & Στατιστικών</p>
                <p className="text-xs text-slate-600">
                  Μας βοηθούν να κατανοήσουμε πώς οι επισκέπτες αλληλεπιδρούν με τη σελίδα (π.χ. ποιες συλλογές φωτογραφιών έχουν τη μεγαλύτερη επισκεψιμότητα), ώστε να βελτιώνουμε συνεχώς την εμπειρία χρήστη.
                </p>
              </div>
            </div>
          </div>

          {/* Διαχείριση cookies */}
          <div>
            <h2 className="text-lg font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
              3. Διαχείριση & Διαγραφή Cookies
            </h2>
            <p className="text-sm">
              Μπορείτε να ρυθμίσετε το πρόγραμμα περιήγησής σας (browser) ώστε να αποδέχεται ή να απορρίπτει όλα ή ορισμένα cookies, καθώς και να διαγράψετε τα cookies που έχουν ήδη αποθηκευτεί.
            </p>
          </div>

          {/* Επικοινωνία */}
          <div className="pt-6 border-t border-[#E8DEC8]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Τελευταία ενημέρωση: 2026
            </p>
            <Link
              href="/contact"
              className="text-xs uppercase tracking-wider font-semibold text-[#0F172A] hover:text-[#D1C2A5] transition"
            >
              Έχετε απορίες; Επικοινωνήστε μαζί μας →
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
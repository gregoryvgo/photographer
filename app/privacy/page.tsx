import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-[85vh] py-16 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* 1. Επικεφαλίδα */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="font-calligraphy text-5xl md:text-7xl text-[#0F172A] mb-3">
            Πολιτική Απορρήτου
          </h1>
          <p className="font-sans-clean text-slate-600 text-sm md:text-base max-w-lg mx-auto">
            Πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα προσωπικά σας δεδομένα.
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
              1. Εισαγωγη & Υπευθυνος Επεξεργασιας
            </h2>
            <p className="text-sm">
              Στο <strong>Artistic Lens Photography</strong>, σεβόμαστε απόλυτα την ιδιωτικότητά σας και δεσμευόμαστε να προστατεύουμε τα προσωπικά δεδομένα που μοιράζεστε μαζί μας, σε πλήρη συμμόρφωση με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR - ΕΕ 2016/679).
            </p>
          </div>

          {/* Δεδομένα που συλλέγουμε */}
          <div>
            <h2 className="text-lg font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
              2. Δεδομενα που Συλλεγουμε
            </h2>
            <p className="text-sm mb-3">
              Συλλέγουμε μόνο τα απολύτως απαραίτητα στοιχεία που μας παρέχετε οικειοθελώς μέσω της φόρμας επικοινωνίας:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1.5 text-slate-600 ml-2">
              <li>Ονοματεπώνυμο</li>
              <li>Διεύθυνση Ηλεκτρονικού Ταχυδρομείου (Email)</li>
              <li>Τηλέφωνο Επικοινωνίας</li>
              <li>Πληροφορίες σχετικά με την εκδήλωσή σας (ημερομηνία, τοποθεσία, είδος μυστηρίου)</li>
            </ul>
          </div>

          {/* Σκοπός επεξεργασίας */}
          <div>
            <h2 className="text-lg font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
              3. Σκοπος Επεξεργασιας
            </h2>
            <p className="text-sm">
              Τα στοιχεία σας χρησιμοποιούνται αποκλειστικά για:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1.5 text-slate-600 ml-2 mt-2">
              <li>Την απάντηση στα αιτήματα και τις ερωτήσεις σας.</li>
              <li>Την παροχή οικονομικών προσφορών και τον προγραμματισμό φωτογραφήσεων.</li>
              <li>Την ομαλή επικοινωνία πριν, κατά τη διάρκεια και μετά την εκδήλωσή σας.</li>
            </ul>
            <p className="text-sm mt-3 text-slate-600 italic">
              * Δεν κοινοποιούμε, δεν πωλούμε και δεν παραχωρούμε τα στοιχεία σας σε τρίτους για διαφημιστικούς σκοπούς.
            </p>
          </div>

          {/* Φωτογραφικό υλικό */}
          <div>
            <h2 className="text-lg font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
              4. Πνευματικα Δικαιωματα & Δημοσιευση Portfolio
            </h2>
            <p className="text-sm">
              Η προβολή επιλεγμένων φωτογραφιών στο portfolio της ιστοσελίδας μας πραγματοποιείται πάντα κατόπιν συνεννόησης και ρητής συγκατάθεσης των πελατών μας.
            </p>
          </div>

          {/* Δικαιώματα χρήστη */}
          <div>
            <h2 className="text-lg font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
              5. Τα Δικαιωματα σας (GDPR)
            </h2>
            <p className="text-sm">
              Έχετε το δικαίωμα πρόσβασης, διόρθωσης, περιορισμού ή οριστικής διαγραφής των προσωπικών σας δεδομένων ανά πάσα στιγμή, αποστέλλοντας σχετικό αίτημα στο email επικοινωνίας μας.
            </p>
          </div>

          {/* Επικοινωνία footer box */}
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
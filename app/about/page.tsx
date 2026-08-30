import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* 1. Φωτογραφία: Μπαίνει πρώτη από τα αριστερά */}
        <div className="relative h-[480px] md:h-[580px] rounded-2xl overflow-hidden shadow-xl bg-[#E8DEC8]/20 animate-slide-left">
          <Image
            src="/images/about.webp"
            alt="Γιάννης Αλεξάνδρου - Φωτογράφος"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* 2. Σταδιακή εμφάνιση κειμένων (μετά την εικόνα) */}
        <div className="space-y-6">
          
          {/* Μικρός Υπέρτιτλος (0.3s) */}
          <p 
            className="font-sans-clean text-xs md:text-sm tracking-[0.3em] uppercase text-[#1E2A3A]/70 font-light animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            Η ΙΣΤΟΡΙΑ ΠΙΣΩ ΑΠΟ ΤΟΝ ΦΑΚΟ
          </p>

          {/* Κύριος Τίτλος (0.5s) */}
          <h1 
            className="font-calligraphy text-5xl md:text-6xl text-[#0F172A] animate-fade-up"
            style={{ animationDelay: "500ms" }}
          >
            Σχετικά με εμένα
          </h1>

          {/* 1η Παράγραφος (0.7s) */}
          <p 
            className="text-base md:text-lg leading-relaxed text-[#1E2A3A] font-light animate-fade-up"
            style={{ animationDelay: "700ms" }}
          >
            Ονομάζομαι <strong className="font-semibold text-[#0F172A]">Γιάννης Αλεξάνδρου</strong> και τα τελευταία <strong className="font-semibold text-[#0F172A]">7 χρόνια</strong> ασχολούμαι επαγγελματικά με τη φωτογράφιση γάμων και βαπτίσεων.
          </p>

          {/* 2η Παράγραφος (0.9s) */}
          <p 
            className="text-base md:text-lg leading-relaxed text-[#1E2A3A] font-light animate-fade-up"
            style={{ animationDelay: "900ms" }}
          >
            Η σχέση μου με τη φωτογραφία ξεκίνησε από την ανάγκη να παρατηρώ και να καταγράφω ιστορίες με ειλικρίνεια. Στην πορεία, αυτή η προσέγγιση καθόρισε τον τρόπο που δουλεύω: αποφεύγω τη σκηνοθεσία και τις στημένες πόζες, επιλέγοντας να λειτουργώ διακριτικά στον χώρο. Με οδηγό το φυσικό φως και την αβίαστη κίνηση, εστιάζω στις γνήσιες αντιδράσεις, στη δυναμική των ανθρώπων και στις μικρές λεπτομέρειες που συνθέτουν την ατμόσφαιρα της ημέρας.
          </p>

          {/* 3η Παράγραφος (1.1s) */}
          <p 
            className="text-base md:text-lg leading-relaxed text-[#1E2A3A] font-light animate-fade-up"
            style={{ animationDelay: "1100ms" }}
          >
            Για μένα, ένα φωτογραφικό άλμπουμ είναι ένα οικογενειακό αρχείο. Στόχος μου είναι κάθε εικόνα να παραμένει αληθινή και διαχρονική, διατηρώντας το συναίσθημα αναλλοίωτο στον χρόνο.
          </p>

          {/* Κουμπί (1.3s) */}
          <div 
            className="pt-4 animate-fade-up"
            style={{ animationDelay: "1300ms" }}
          >
            <Link
              href="/contact"
              className="inline-block bg-[#0F172A] text-[#FDFBF7] px-8 py-3.5 rounded-full font-sans-clean font-semibold tracking-wider text-sm uppercase hover:bg-[#1E2A3A] transition shadow-md duration-300"
            >
              Επικοινωνηστε μαζι μου
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
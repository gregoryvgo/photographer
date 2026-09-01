"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-16 px-6 overflow-hidden">
      <div className="max-w-4xl w-full">
        {/* 1. Επικεφαλίδα από κάτω */}
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="font-calligraphy text-5xl md:text-7xl text-[#0F172A] mb-3">
            Επικοινωνία
          </h1>
          <p className="font-sans-clean text-slate-600 text-sm md:text-base max-w-lg mx-auto">
            Είμαστε εδώ για να συζητήσουμε τις δικές σας ξεχωριστές στιγμές. Συμπληρώστε τη φόρμα ή επικοινωνήστε απευθείας μαζί μας.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* 2. Στοιχεία Επικοινωνίας (Κάρτα αριστερά) */}
          <div
            className="md:col-span-2 bg-[#0F172A] text-[#FDFBF7] p-8 rounded-2xl shadow-xl flex flex-col justify-between animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            <div>
              <h2 className="font-calligraphy text-3xl md:text-4xl text-[#E8DEC8] mb-6">
                Photgraphy Lensium
              </h2>
              <div className="space-y-6 font-sans-clean text-sm">
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#E8DEC8]/70 mb-1">
                    Τηλεφωνο
                  </p>
                  <p className="text-base text-[#FDFBF7]">+30 690 000 0000</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#E8DEC8]/70 mb-1">
                    Email
                  </p>
                  <p className="text-base text-[#FDFBF7]">info@artisticlens.gr</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#E8DEC8]/70 mb-1">
                    Τοποθεσια
                  </p>
                  <p className="text-base text-[#FDFBF7]">Αθήνα, Ελλάδα</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 font-sans-clean text-xs text-white/50">
              Διαθέσιμοι για φωτογραφήσεις σε όλη την Αθήνα.
            </div>
          </div>

          {/* 3. Φόρμα Επικοινωνίας (Δεξιά) */}
          <div
            className="md:col-span-3 bg-white p-8 rounded-2xl border border-[#E8DEC8]/60 shadow-md animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="font-calligraphy text-4xl text-[#0F172A] mb-3">
                  Ευχαριστούμε!
                </h3>
                <p className="font-sans-clean text-slate-600 text-sm">
                  Το μήνυμά σας παραλήφθηκε. Θα επικοινωνήσουμε μαζί σας σύντομα.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-sans-clean">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-600 mb-1">
                    Ονοματεπωνυμο *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="π.χ. Μαρία Παπαδοπούλου"
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E8DEC8] text-[#0F172A] text-sm focus:outline-none focus:border-[#0F172A] transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-600 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maria@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E8DEC8] text-[#0F172A] text-sm focus:outline-none focus:border-[#0F172A] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-600 mb-1">
                      Τηλεφωνο
                    </label>
                    <input
                      type="tel"
                      placeholder="690 000 0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E8DEC8] text-[#0F172A] text-sm focus:outline-none focus:border-[#0F172A] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-600 mb-1">
                    Ειδος Εκδηλωσης
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E8DEC8] text-[#0F172A] text-sm focus:outline-none focus:border-[#0F172A] transition"
                  >
                    <option value="wedding">Γάμος</option>
                    <option value="baptism">Βάπτιση</option>
                    <option value="other">Άλλο / Συνδυασμός</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-600 mb-1">
                    Μηνυμα *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ημερομηνία, τοποθεσία ή οποιαδήποτε άλλη λεπτομέρεια..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E8DEC8] text-[#0F172A] text-sm focus:outline-none focus:border-[#0F172A] transition resize-none"
                  />
                </div>

                {/* Checkbox Συγκατάθεσης Όρων Χρήσης */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="terms-consent"
                    required
                    className="mt-1 h-4 w-4 rounded border-[#E8DEC8] text-[#0F172A] focus:ring-[#0F172A] cursor-pointer accent-[#0F172A]"
                  />
                  <label htmlFor="terms-consent" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                    Έχω διαβάσει και αποδέχομαι τους{" "}
                    <Link
                      href="/terms"
                      target="_blank"
                      className="text-[#0F172A] font-semibold underline underline-offset-2 hover:text-[#D1C2A5] transition"
                    >
                      Όρους Χρήσης
                    </Link>
                    {" "}*
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0F172A] hover:bg-[#1E2A3A] text-[#FDFBF7] py-3.5 rounded-xl font-semibold uppercase tracking-wider text-xs transition duration-300 shadow-md active:scale-98 cursor-pointer"
                >
                  Αποστολη Μηνυματος
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
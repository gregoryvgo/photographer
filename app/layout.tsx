import type { Metadata } from "next";
import { Alex_Brush, Marck_Script, Bodoni_Moda, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
});

const marckScript = Marck_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-calligraphy",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-bodoni",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Photgraphy Lensium",
  description: "Φωτογραφίες γάμου και βάπτισης γεμάτες συναίσθημα.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="el"
      className={`${alexBrush.variable} ${marckScript.variable} ${bodoni.variable} ${montserrat.variable}`}
    >
      <body className="flex flex-col min-h-screen bg-[#FDFBF7] text-[#0F172A]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

// Modern Love Caps - for Main Headings and Section Headings
const modernLoveCaps = localFont({
  src: "../fonts/modernlove-caps-unspecified.ttf",
  variable: "--font-modern-love-caps",
  display: "swap",
  fallback: ["Impact", "Arial Black", "sans-serif"],
});

// Modern Love Grunge - optional variant
const modernLoveGrunge = localFont({
  src: "../fonts/modernlove-grunge.ttf",
  variable: "--font-modern-love-grunge",
  display: "swap",
  fallback: ["Impact", "Arial Black", "sans-serif"],
});

// Modern Love Rough - optional variant
const modernLoveRough = localFont({
  src: "../fonts/modernlove-rough.ttf",
  variable: "--font-modern-love-rough",
  display: "swap",
  fallback: ["Impact", "Arial Black", "sans-serif"],
});

// Dreaming Outloud Pro - for Quotations / Speech
const dreamingOutloud = localFont({
  src: "../fonts/dreaming-outloud-pro-regular.otf",
  variable: "--font-dreaming-outloud",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

// Abadi - for Formal/Legal text
// TODO: Uncomment when you add the Abadi font file to src/fonts/
// Add your Abadi font file (e.g., abadi-regular.ttf, abadi.otf, etc.) and update the path below
// Then uncomment the code below and add ${abadi.variable} to the className in the body tag
/*
const abadi = localFont({
  src: "../fonts/abadi-regular.ttf", // Update this path to match your Abadi font file name
  variable: "--font-abadi",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});
*/

export const metadata = {
  title: "Mesa Stone - A Crispy Pillow of Chewy Delight",
  description: "At Mesa Stone, we craft more than just food—we create experiences. Every bite is a journey through bold flavors and vibrant textures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${modernLoveCaps.variable} ${modernLoveGrunge.variable} ${modernLoveRough.variable} ${dreamingOutloud.variable} antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

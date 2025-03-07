import type { Metadata } from "next";
import { Geist, Geist_Mono, Sometype_Mono, Playwrite_CA } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sometypeMono = Sometype_Mono({
  variable: "--font-sometype-mono",
  subsets: ["latin"],
});

const playwriteCA = Playwrite_CA({
  variable: "--font-playwrite-ca",
});

export const metadata: Metadata = {
  title: "Pipolaskuri",
  description: "Pipon kavennus laskuri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sometypeMono.variable} ${playwriteCA.variable} font-sans antialiased`}
      >
        {children}
        <footer className="flex flex-wrap gap-6 items-center justify-center text-sm mb-3">
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/CXY4BlEI2gpv/beanie">winter hat icon by Icons8</a>
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" target="_blank" rel="noopener noreferrer" href="https://punomo.fi/sadekavennus-suunnittelu-ja-neulominen/">Punomo</a>
        </footer>
      </body>
    </html>
  );
}

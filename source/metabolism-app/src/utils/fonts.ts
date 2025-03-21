import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";

export const myFont = localFont({
  src: "../../public/fonts/DancingScript-Variable.ttf",
  variable: "--font-dancing-script",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
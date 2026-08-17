import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OSOZ MBS | Medical Billing Services",
  description:
    "OSOZ Medical Billing Services (OSOZ MBS) is a US-based healthcare revenue cycle management company dedicated to maximizing reimbursements, reducing denials, and ensuring HIPAA compliance for providers nationwide.",
  keywords: [
    "OSOZ Medical Billing Services",
    "OSOZ MBS",
    "Medical Billing Services",
    "Revenue Cycle Management",
    "Healthcare Outsourcing",
    "Medical Coding",
    "Credentialing",
    "Digital Solutions",
  ],

  authors: [{ name: "OSOZ MBS" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />
        <Toaster position="top-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
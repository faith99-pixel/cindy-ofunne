import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import { Favicon } from "@/components/Favicon";
import { LoadingProvider } from "@/components/LoadingContext";
import LayoutContent from "@/components/LayoutContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cindy Ofunne - Strategic Leader & Program Delivery Director",
  description:
    "Senior-level strategic leader and IT program management professional with 15+ years of experience in digital transformation, project portfolio management, and enterprise-scale delivery.",
  keywords: [
    "Project Manager",
    "Program Management",
    "Digital Transformation",
    "IT Program Manager",
    "Leadership",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Favicon />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <LoadingProvider>
          <PageLoader />
          <LayoutContent>
            <Navigation />
            {children}
            <Footer />
          </LayoutContent>
        </LoadingProvider>
      </body>
    </html>
  );
}

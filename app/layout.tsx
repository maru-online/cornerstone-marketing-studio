// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import localFont from "next/font/local";

// Self-hosted (POPIA — no Google Fonts CDN). Both are variable-font files
// covering the full weight range in one download each.
const fraunces = localFont({
    src: "../public/fonts/fraunces-variable.woff2",
    variable: "--font-fraunces",
    display: "swap",
    weight: "300 700",
});

const inter = localFont({
    src: "../public/fonts/inter-variable.woff2",
    variable: "--font-inter",
    display: "swap",
    weight: "300 700",
});

export const metadata: Metadata = {
    title: "Cornerstone Marketing Studio — Growing Brands, Honouring Values.",
    description:
        "Marketing, events, gifting, and signage under one strategic partner. Cornerstone Marketing Studio helps corporate teams execute campaigns, events, gifting, and brand experiences with confidence.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${fraunces.variable} ${inter.variable} bg-surface`}
        >
        <body className="min-h-screen bg-surface antialiased">
        <Navbar />
        {children}
        </body>
        </html>
    );
}

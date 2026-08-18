// app/page.tsx
"use client";

import Hero from "@/components/work/HeroLight";
import ServicesLayout from "@/components/work/ServicesLayoutLight";
import WhyChoose from "@/components/work/WhyChooseLight";
import ClosingCTA from "@/components/work/ClosingCTALight";
import FooterLight from "@/components/work/FooterLight";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Hero />
            <ServicesLayout />
            <WhyChoose />
            <ClosingCTA />
            <FooterLight />
        </main>
    );
}

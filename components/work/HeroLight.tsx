"use client";

import { motion } from "framer-motion";
import { fadeUp, tapSpring } from "@/lib/motion";
import CookieBanner from "@/components/CookieBanner";
import WatermarkMark from "@/components/decorative/WatermarkMark";

export default function HeroLight() {
    return (
        <section
            id="hero"
            className="hero relative flex min-h-screen items-center overflow-hidden bg-surface"
        >
            {/* Device 1 — Oversized watermark mark (see components/decorative/WatermarkMark.tsx) */}
            <WatermarkMark />

            <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-0">
                <motion.div className="relative max-w-2xl" {...fadeUp(0)}>
                    <p className="eyebrow">Marketing, Events, Gifting &amp; Signage</p>

                    <h1 className="display text-[2rem] leading-[1.15] tracking-[-0.02em] md:text-[2.5rem] md:leading-[1.12]">
                        One Strategic Partner. One Seamless Brand Experience.
                    </h1>

                    <p className="lead mt-6 max-w-prose text-base leading-relaxed">
                        We help businesses execute campaigns, bespoke events, gifting, and
                        signage with confidence. By managing it all under one roof, we
                        simplify delivery, strengthen brand consistency, and drive
                        measurable results.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <motion.a
                            href="/contact"
                            className="btn-primary"
                            aria-label="Book your free brand assessment"
                            {...tapSpring}
                        >
                            Book Your Free Brand Assessment
                        </motion.a>
                        <motion.a
                            href="#services"
                            className="btn-outline"
                            aria-label="See our services"
                            {...tapSpring}
                        >
                            See Our Services
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Cookie Banner */}
            <CookieBanner />
        </section>
    );
}

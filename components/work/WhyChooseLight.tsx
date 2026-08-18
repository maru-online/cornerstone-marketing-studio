"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const reasons = [
    "One partner across marketing, events, gifting, and signage — reduce complexity and eliminate the need to manage multiple suppliers.",
    "Transparent project scoping and pricing — clear expectations, detailed proposals, and no hidden surprises.",
    "A dedicated point of contact — streamlined communication from initial brief through to final delivery.",
    "End-to-end project ownership — strategy, planning, production, and execution managed under one roof.",
    "Proven experience across multiple sectors — Corporate, Financial Services, Professional Services, and the Private and Public Sector.",
];

export default function WhyChooseLight() {
    return (
        <section id="why-choose" className="section scroll-mt-20 bg-white">
            <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
                <motion.p className="section-label" {...fadeUp(0)}>
                    Why Corporate Teams Choose Cornerstone Marketing Studio
                </motion.p>

                <motion.h2
                    className="mt-4 max-w-3xl text-4xl leading-tight tracking-[-0.02em] sm:text-[2.65rem]"
                    {...fadeUp(0.05)}
                >
                    A Simpler Way to Deliver Exceptional Brand Experiences
                </motion.h2>

                <ul className="mt-16 grid gap-6 sm:grid-cols-2">
                    {reasons.map((reason, i) => (
                        <motion.li
                            key={reason.slice(0, 24)}
                            {...fadeUp(0.1 + i * 0.05)}
                            className="flex gap-4 rounded-lg border border-border bg-surface px-8 py-7"
                        >
                            <span
                                aria-hidden="true"
                                className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-sm bg-ochre"
                            />
                            <p className="leading-relaxed text-near-black/85">{reason}</p>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

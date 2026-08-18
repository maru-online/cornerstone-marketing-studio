"use client";

import { motion } from "framer-motion";
import { fadeUp, tapSpring } from "@/lib/motion";

/**
 * On-page closing CTA — a distinct block from the /contact page's form
 * (see ContactCTALight.tsx, used there). This is a headline + supporting
 * line + button + trust line, per copy v2's "Closing CTA" section.
 */
export default function ClosingCTALight() {
    return (
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
            <motion.div
                {...fadeUp(0)}
                className="mx-auto max-w-4xl rounded-lg bg-ink px-8 py-14 text-center sm:px-14"
            >
                <h2 className="font-heading text-3xl font-semibold text-text-on-dark sm:text-4xl">
                    Ready to Elevate Your Next Campaign, Event, or Brand Experience?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-on-dark/85">
                    Partner with a team that brings strategy, creativity, and execution
                    together to deliver results you can measure.
                </p>
                <motion.a
                    href="/contact"
                    className="btn-primary mt-8 inline-flex bg-accent-on-dark text-near-black border-accent-on-dark hover:bg-white hover:border-white"
                    aria-label="Book your free brand assessment"
                    {...tapSpring}
                >
                    Book Your Free Brand Assessment
                </motion.a>
                <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-text-on-dark/60">
                    Trusted by businesses that value consistency, efficiency, and impact —
                    built for organisations that need one strategic partner to deliver a
                    complete brand experience, from concept to execution.
                </p>
            </motion.div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import SiteLogo from "@/components/SiteLogo";
import { CONTACT_EMAIL } from "@/lib/contact";

export default function FooterLight() {
    return (
        <footer className="rounded-3xl bg-ink px-6 py-24 text-text-on-dark sm:px-8 sm:py-28 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    {...fadeUp(0.18, 10)}
                    className="rounded-2xl bg-ink/95 p-10 sm:p-14"
                >
                    <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
                        {/* LEFT: logo + tagline + description + CTA */}
                        <div className="min-w-0 flex-1">
                            <a
                                href="/"
                                className="inline-flex"
                                aria-label="Cornerstone Marketing Studio — Home"
                            >
                                <SiteLogo variant="light" width={150} className="w-auto" />
                            </a>

                            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.15em] text-text-on-dark/70">
                                Growing Brands, Honouring Values.
                            </p>

                            <p className="mt-4 max-w-xl text-[0.9rem] leading-relaxed text-text-on-dark/85">
                                Marketing, events, gifting, and signage — delivered by one
                                strategic partner, from concept to execution.
                            </p>

                            <div className="mt-7 flex flex-col gap-3 text-[0.8rem] leading-relaxed sm:flex-row">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full bg-accent-on-dark px-5 py-2.5 font-medium text-near-black transition hover:bg-white"
                                >
                                    Book Your Free Brand Assessment
                                </a>
                            </div>
                        </div>

                        {/* RIGHT: nav + direct contact */}
                        <div className="w-full max-w-xs shrink-0 space-y-8 text-[0.8rem] leading-relaxed">
                            <div>
                                <div className="font-semibold text-text-on-dark">Explore</div>
                                <ul className="mt-1 space-y-1 text-text-on-dark/75">
                                    <li>
                                        <a
                                            className="underline underline-offset-4 hover:text-white"
                                            href="/#services"
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="underline underline-offset-4 hover:text-white"
                                            href="/#why-choose"
                                        >
                                            Why Choose Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="underline underline-offset-4 hover:text-white"
                                            href="/contact"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Direct contact — real details still to be confirmed (see lib/contact.ts) */}
                            <div>
                                <div className="font-semibold text-text-on-dark">Let&rsquo;s talk</div>
                                {CONTACT_EMAIL ? (
                                    <div className="text-text-on-dark/75">
                                        <a
                                            className="underline underline-offset-4 hover:text-white"
                                            href={`mailto:${CONTACT_EMAIL}`}
                                        >
                                            {CONTACT_EMAIL}
                                        </a>
                                    </div>
                                ) : (
                                    <div className="text-text-on-dark/60">
                                        <a
                                            className="underline underline-offset-4 hover:text-white"
                                            href="/contact"
                                        >
                                            Get in touch via our contact form
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* POPIA notice + fine print */}
                    <div className="mt-12 border-t border-white/20 pt-8 text-[0.7rem] leading-relaxed text-text-on-dark/60">
                        <p>
                            Cornerstone Marketing Studio Pty Ltd processes your information
                            solely to respond to your enquiry, in line with the Protection of
                            Personal Information Act (POPIA). We do not share your details
                            with third parties without consent.
                        </p>
                        <p className="mt-3">
                            &copy; {new Date().getFullYear()} Cornerstone Marketing Studio
                            (Pty) Ltd.
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}

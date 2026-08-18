"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tapSpring } from "@/lib/motion";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const consent = localStorage.getItem("cornerstone-cookie-consent");
        if (!consent) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cornerstone-cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cornerstone-cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.8, 0.3, 1] }}
                    className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm rounded-xl border border-neutral-200 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] sm:bottom-6 sm:left-auto sm:right-6 sm:mx-0 sm:w-72 sm:rounded-2xl sm:p-5"
                >
                    {/* Compact layout for mobile, expanded for desktop */}
                    <div className="flex items-start gap-3 sm:flex-col sm:items-stretch sm:gap-0">
                        {/* Cookie Icon - smaller on mobile */}
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 sm:mb-3 sm:h-10 sm:w-10">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-neutral-700 sm:h-5 sm:w-5"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                                <path d="M8.5 8.5v.01" />
                                <path d="M16 15.5v.01" />
                                <path d="M12 12v.01" />
                                <path d="M11 17v.01" />
                                <path d="M7 14v.01" />
                            </svg>
                        </div>

                        {/* Content */}
                        <div className="flex-1 sm:flex-none">
                            <h3 className="text-xs font-semibold text-neutral-900 sm:text-sm">
                                We use cookies
                            </h3>
                            <p className="mt-1 text-[11px] leading-relaxed text-neutral-600 sm:mt-1.5 sm:text-xs">
                                We use cookies to enhance your experience. By continuing, you agree to our use.
                            </p>
                        </div>
                    </div>

                    {/* Actions - horizontal on mobile, full width on desktop */}
                    <div className="mt-3 flex gap-2 sm:mt-4">
                        <motion.button
                            onClick={handleAccept}
                            className="flex-1 rounded-lg bg-neutral-900 px-3 py-1.5 text-[11px] font-medium text-white transition hover:bg-neutral-800 sm:px-4 sm:py-2 sm:text-xs"
                            {...tapSpring}
                        >
                            Accept
                        </motion.button>
                        <motion.button
                            onClick={handleDecline}
                            className="flex-1 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-[11px] font-medium text-neutral-700 transition hover:bg-neutral-50 sm:px-4 sm:py-2 sm:text-xs"
                            {...tapSpring}
                        >
                            Decline
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

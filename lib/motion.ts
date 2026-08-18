// lib/motion.ts
// Soft, cinematic motion tokens for the whole site

export const easeOutCinematic = [0.25, 0.8, 0.3, 1] as const;

export const easeOutExpo = (t: number): number =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

const baseViewport = {
    once: true,
    amount: 0.2, // start animating fairly early in the viewport
} as const;

// Respect user's prefers-reduced-motion setting
export const isReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Base fade helper (no vertical movement)
export const fade = (delay = 0) => {
    const reduced = isReducedMotion();

    if (reduced) {
        // For reduced motion, don't animate; just render in place
        return {
            initial: { opacity: 1 },
            whileInView: { opacity: 1 },
            viewport: baseViewport,
            transition: { duration: 0, delay: 0 },
        };
    }

    return {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: baseViewport,
        transition: {
            duration: 0.9,
            ease: easeOutCinematic,
            delay,
        },
    };
};

// Fade + gentle upward lift
export const fadeUp = (delay = 0, y = 18) => {
    const base = fade(delay);
    const reduced = isReducedMotion();

    if (reduced) {
        // Same as fade: no vertical motion for reduced-motion users
        return {
            ...base,
            initial: { ...(base.initial as any), y: 0 },
            whileInView: { ...(base.whileInView as any), y: 0 },
        };
    }

    return {
        ...base,
        initial: { ...(base.initial as any), y },
        whileInView: { ...(base.whileInView as any), y: 0 },
    };
};

// Fade only (for use with scroll-based y transforms)
export const fadeOnly = fade;

// Tap interaction for buttons
export const tapSpring = {
    whileTap: { scale: 0.96 },
};

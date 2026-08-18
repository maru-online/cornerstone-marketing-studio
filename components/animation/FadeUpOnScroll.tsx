"use client";

import { easeOutExpo } from "@/lib/motion";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { type ComponentPropsWithoutRef, type ElementType } from "react";

type FadeUpOnScrollProps<T extends ElementType> = {
    as?: T;
    delay?: number;
    y?: number;
    once?: boolean;
    amount?: number;
} & Omit<ComponentPropsWithoutRef<T>, "ref"> &
    Omit<MotionProps, "transition" | "initial" | "whileInView" | "viewport">;

export function FadeUpOnScroll<T extends ElementType = "div">({
    as,
    delay = 0,
    y = 12,
    once = true,
    amount = 0.25,
    children,
    ...rest
}: FadeUpOnScrollProps<T>) {
    const shouldReduceMotion = useReducedMotion();
    const Component = as ?? "div";
    const MotionComponent = motion(Component as ElementType);

    return (
        <MotionComponent
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount }}
            transition={{ duration: 0.55, ease: easeOutExpo, delay: shouldReduceMotion ? 0 : delay }}
            {...rest}
        >
            {children}
        </MotionComponent>
    );
}

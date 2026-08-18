"use client";

import Image from "next/image";

type LogoVariant = "icon" | "horizontal" | "primary" | "light" | "dark";

interface SiteLogoProps {
    variant?: LogoVariant;
    width?: number;
    height?: number;
    className?: string;
}

// Natural aspect ratios of the source SVGs — used so callers can pass just
// one dimension and get a correctly proportioned box.
const ASPECT: Record<LogoVariant, number> = {
    icon: 1,
    horizontal: 600 / 110,
    primary: 480 / 250,
    light: 600 / 110,
    dark: 600 / 110,
};

export default function SiteLogo({
                                      variant = "horizontal",
                                      width = 160,
                                      height,
                                      className = "",
                                  }: SiteLogoProps) {
    const srcMap: Record<LogoVariant, string> = {
        icon: "/brand/cornerstone-mark-ink.svg",
        horizontal: "/brand/cornerstone-logo-horizontal-ink.svg",
        primary: "/brand/cornerstone-logo-primary-ink.svg",
        light: "/brand/cornerstone-logo-horizontal-white.svg",
        dark: "/brand/cornerstone-logo-horizontal-ink.svg",
    };

    const resolvedHeight = height ?? Math.round(width / ASPECT[variant]);

    return (
        <Image
            src={srcMap[variant]}
            alt="Cornerstone Marketing Studio"
            width={width}
            height={resolvedHeight}
            priority
            className={`object-contain ${className}`}
        />
    );
}

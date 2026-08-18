import { KeystoneGlyph } from "./KeystoneGlyph";

interface GhostedPanelProps {
    eyebrow?: string;
    heading: string;
    body: string;
    resultLine?: string;
}

/**
 * Device 2 — Colour-block panel with ghosted mark.
 * Spec (Brief — Decorative Logo System.md): full-bleed Ink #16233F panel,
 * keystone ghosted large in one corner. Replaces a photo slot — this IS
 * the service block (heading, body, no photo), not a background behind one.
 *
 * Ghost fill uses --color-text-on-dark at 8% opacity (not Ink-on-Ink, which
 * would be invisible, and not Ochre, per the brief's "ink/neutral only"
 * rule) — reads as texture, not as content competing with the copy. A
 * radial mask fades its inner edge so it dissolves into the panel rather
 * than reading as a flat block (same treatment as WatermarkMark).
 * Text is solid `text-on-dark` at full opacity: #F2F0EC on #16233F clears
 * WCAG AA by a wide margin (~13:1) regardless of the ghost layer beneath it.
 */
export default function GhostedPanel({
    eyebrow,
    heading,
    body,
    resultLine,
}: GhostedPanelProps) {
    return (
        <div className="relative overflow-hidden rounded-lg bg-ink px-8 py-14 sm:px-14 sm:py-20">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-[20%] -right-[20%] h-[85%] w-[85%] select-none opacity-[0.08]"
                style={{
                    maskImage:
                        "radial-gradient(circle at 60% 40%, black 25%, transparent 70%)",
                    WebkitMaskImage:
                        "radial-gradient(circle at 60% 40%, black 25%, transparent 70%)",
                }}
            >
                <svg viewBox="0 0 100 100" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <KeystoneGlyph fill="#F2F0EC" />
                </svg>
            </div>

            <div className="relative max-w-2xl">
                {eyebrow && (
                    <p className="text-sm font-semibold uppercase tracking-[0.08em] text-accent-on-dark">
                        {eyebrow}
                    </p>
                )}
                <h3 className="mt-3 font-heading text-2xl font-semibold text-text-on-dark sm:text-[1.75rem]">
                    {heading}
                </h3>
                <p className="mt-5 leading-relaxed text-text-on-dark/85">{body}</p>
                {resultLine && (
                    <p className="mt-7 text-sm font-medium text-accent-on-dark">
                        {resultLine}
                    </p>
                )}
            </div>
        </div>
    );
}

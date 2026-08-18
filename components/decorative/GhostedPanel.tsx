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
 * rule) — reads as texture, not as content competing with the copy.
 *
 * Sized/positioned so the shape's actual two-walls-meeting-at-a-corner
 * silhouette stays legible in the corner (bottom-right), with only a small
 * bleed off the panel edge — the panel's own `overflow-hidden` clips it.
 * No opacity mask: an earlier centered radial-gradient mask wasn't aligned
 * to the shape's geometry and washed the corner notch into an unreadable
 * blob rather than a keystone (same defect fixed in WatermarkMark).
 *
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
                className="pointer-events-none absolute -bottom-[6%] -right-[6%] h-[65%] w-[65%] select-none opacity-[0.08]"
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

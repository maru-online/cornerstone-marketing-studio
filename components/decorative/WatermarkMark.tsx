import { KeystoneGlyph } from "./KeystoneGlyph";

/**
 * Device 1 — Oversized watermark mark.
 * Spec (Brief — Decorative Logo System.md): keystone blown up 60–120% of
 * viewport height, bleeding off one edge, ~3–6% opacity, Ink #16233F,
 * one placement only (top-right bleed).
 *
 * Values used: 72vh, opacity 0.05 (5%), bleeding off the top-right corner.
 *
 * Sizing/position note (fixed after two rounds of "reads as a grey box, not
 * a keystone" feedback): the mark's own viewBox has an empty quadrant
 * top-right of the shape (the gap between the vertical wall and the
 * horizontal wall — see KeystoneGlyph). Anchoring the container's top-right
 * corner near the hero's top-right corner puts that natural empty space at
 * the bleed edge, so the small negative offset trims mostly empty space
 * — the actual two-walls-meeting-at-a-corner silhouette stays intact and
 * legible on-canvas, instead of being cropped away by an oversized (90vh+)
 * container bleeding off two edges. No opacity mask — a previous attempt
 * added a centered radial mask to soften hard edges, but it wasn't aligned
 * to the shape's geometry and washed out the corner notch that makes it
 * read as a keystone at all. Sharp, unmasked, correctly-cropped beats a
 * misaligned fade.
 *
 * Sits behind content — parent section must be `relative` and content must
 * have a higher stacking context (this renders `pointer-events-none`,
 * `aria-hidden`, and is not part of the a11y tree).
 */
export default function WatermarkMark() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[4vh] -top-[4vh] h-[72vh] w-[72vh] select-none opacity-[0.05] md:h-[85vh] md:w-[85vh]"
        >
            <svg viewBox="0 0 100 100" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <KeystoneGlyph fill="#16233F" />
            </svg>
        </div>
    );
}

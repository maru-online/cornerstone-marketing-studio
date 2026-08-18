import { KeystoneGlyph } from "./KeystoneGlyph";

/**
 * Device 1 — Oversized watermark mark.
 * Spec (Brief — Decorative Logo System.md): keystone blown up 60–120% of
 * viewport height, bleeding off one edge, ~3–6% opacity, Ink #16233F,
 * one placement only (top-right bleed).
 *
 * Values used: 90vh, opacity 0.05 (5%), bleeding off the top-right corner.
 * A radial mask fades the mark's inner edge to transparent so its hard
 * rectangle edges dissolve into the surface (reads as a watermark, not a
 * flat grey box) — the geometry itself stays crisp/unblurred.
 * Sits behind content — parent section must be `relative` and content must
 * have a higher stacking context (this renders `pointer-events-none`,
 * `aria-hidden`, and is not part of the a11y tree).
 */
export default function WatermarkMark() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[15vh] -top-[15vh] h-[90vh] w-[90vh] select-none opacity-[0.05] md:h-[105vh] md:w-[105vh]"
            style={{
                maskImage:
                    "radial-gradient(circle at 65% 35%, black 30%, transparent 72%)",
                WebkitMaskImage:
                    "radial-gradient(circle at 65% 35%, black 30%, transparent 72%)",
            }}
        >
            <svg viewBox="0 0 100 100" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <KeystoneGlyph fill="#16233F" />
            </svg>
        </div>
    );
}

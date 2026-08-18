import { KeystoneGlyph } from "./KeystoneGlyph";

/**
 * Device 1 — Oversized watermark mark.
 * Spec (Brief — Decorative Logo System.md): keystone blown up 60–120% of
 * viewport height, bleeding off one edge, ~3–6% opacity, Ink #16233F,
 * one placement only (top-right bleed).
 *
 * Values used: 90vh, opacity 0.05 (5%), bleeding off the top-right corner.
 * Sits behind content — parent section must be `relative` and content must
 * have a higher stacking context (this renders `pointer-events-none`,
 * `aria-hidden`, and is not part of the a11y tree).
 */
export default function WatermarkMark() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[10vh] -top-[10vh] h-[90vh] w-[90vh] select-none opacity-[0.05] md:h-[100vh] md:w-[100vh]"
        >
            <svg viewBox="0 0 100 100" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <KeystoneGlyph fill="#16233F" />
            </svg>
        </div>
    );
}

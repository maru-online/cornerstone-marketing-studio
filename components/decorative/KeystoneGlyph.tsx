// Single source of truth for the Cornerstone keystone geometry, shared by
// every decorative device. Mirrors public/brand/cornerstone-mark-ink.svg
// exactly (viewBox 0 0 100 100, three rects, no strokes/rounding) — if the
// mark construction ever changes, update it there AND here.
export function KeystoneGlyph({ fill }: { fill: string }) {
    return (
        <g id="mark">
            <rect id="keystone" x="0" y="62" width="38" height="38" fill={fill} />
            <rect id="wall-vertical" x="0" y="0" width="38" height="56" fill={fill} />
            <rect id="wall-horizontal" x="44" y="62" width="56" height="38" fill={fill} />
        </g>
    );
}

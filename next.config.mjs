// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        const isProd = process.env.NODE_ENV === "production";
        if (!isProd) return [];
        return [
            {
                source: "/:path*",
                headers: [
                    // No third-party embeds on this site (no video, no external
                    // widgets) — keep conservative, widen only when a real
                    // integration needs it (see CLAUDE.md §7 CSP lesson).
                    {
                        key: "Content-Security-Policy",
                        value: [
                            "default-src 'self'",
                            "img-src 'self' data:",
                            "font-src 'self' data:",
                            "script-src 'self' 'unsafe-inline'",
                            "style-src 'self' 'unsafe-inline'",
                            "connect-src 'self'",
                            "object-src 'none'",
                        ].join("; "),
                    },
                ],
            },
        ];
    },
};

export default nextConfig;

"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import GhostedPanel from "@/components/decorative/GhostedPanel";

type Service = {
    slug: string;
    heading: string;
    audience: string;
    body: string;
    resultLine: string;
};

const services: Service[] = [
    {
        slug: "marketing-solutions",
        heading: "Marketing Solutions — Campaigns That Connect, Engage, and Deliver Results",
        audience: "For marketing teams focused on driving visibility, engagement, and ROI.",
        body:
            "We create targeted marketing strategies and campaigns tailored to your audience and business goals, from planning to execution.",
        resultLine: "",
    },
    {
        slug: "event-management",
        heading: "Event Management — Memorable Events, Expertly Delivered",
        audience:
            "For organisations hosting launches, conferences, activations, and corporate events.",
        body:
            "We manage every detail, from planning and logistics to production and on-site delivery, ensuring a smooth, professionally executed experience.",
        resultLine: "Stress-free events that elevate your brand and deliver lasting impact.",
    },
    {
        slug: "corporate-gifting",
        heading: "Corporate Gifting — Thoughtful Gifts That Strengthen Relationships",
        audience:
            "For businesses looking to strengthen relationships with clients, employees, and stakeholders.",
        body:
            "We source and deliver premium, custom-branded gifts that reflect your brand and objectives, with every detail professionally managed.",
        resultLine:
            "Meaningful gifting experiences that reinforce relationships and enhance brand perception.",
    },
    {
        slug: "branding-signage",
        heading: "Branding & Signage — Bring Your Brand to Life in Every Environment",
        audience:
            "For businesses launching new spaces, rebranding, or creating impactful brand experiences.",
        body:
            "We design, produce, and install high-quality signage and branded environments that bring your brand to life.",
        resultLine:
            "A polished, consistent brand presence that inspires confidence and drives recognition.",
    },
];

export default function ServicesLayoutLight() {
    return (
        <section id="services" className="section bg-surface py-20">
            <div className="container mx-auto max-w-5xl px-6">
                <motion.p className="section-label" {...fadeUp(0)}>
                    Services
                </motion.p>

                <motion.h2
                    className="max-w-3xl text-4xl leading-tight tracking-[-0.02em] sm:text-[2.65rem]"
                    {...fadeUp(0.05)}
                >
                    Four capabilities. One strategic partner.
                </motion.h2>

                <div className="mt-12 grid gap-8">
                    {services.map((service, i) =>
                        service.slug === "event-management" ? (
                            <motion.div key={service.slug} {...fadeUp(0.1 + i * 0.05)}>
                                <GhostedPanel
                                    eyebrow={service.audience}
                                    heading={service.heading}
                                    body={service.body}
                                    resultLine={service.resultLine}
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                key={service.slug}
                                {...fadeUp(0.1 + i * 0.05)}
                                className="rounded-lg border border-border bg-white px-8 py-10 sm:px-10"
                            >
                                <p className="text-sm font-medium text-muted">
                                    {service.audience}
                                </p>
                                <h3 className="mt-2 font-heading text-2xl font-semibold text-ink">
                                    {service.heading}
                                </h3>
                                <p className="mt-4 leading-relaxed text-near-black/80">
                                    {service.body}
                                </p>
                                {service.resultLine && (
                                    <p className="mt-6 text-sm font-medium text-ochre-deep">
                                        {service.resultLine}
                                    </p>
                                )}
                            </motion.div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { fadeUp, tapSpring } from "@/lib/motion";
import { CONTACT_EMAIL } from "@/lib/contact";
import { useFormStatus } from "@/lib/hooks/useFormStatus";

type FormState = {
    name: string;
    company: string;
    email: string;
    phone: string;
    interest: string;
    message: string;
};

const interestOptions = [
    "Marketing",
    "Events",
    "Gifting",
    "Branding & Signage",
    "Not sure yet",
];

const initialForm: FormState = {
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
};

export default function ContactCTALight() {
    const [form, setForm] = React.useState<FormState>(initialForm);
    const { status, setStatus, error, setError } = useFormStatus();

    const updateField =
        (field: keyof FormState) =>
        (
            event: React.ChangeEvent<
                HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
            >
        ) => {
            setForm((prev) => ({ ...prev, [field]: event.target.value }));
        };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("submitting");
        setError(null);

        const trimmed = {
            name: form.name.trim(),
            company: form.company.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            interest: form.interest,
            message: form.message.trim(),
        };

        if (!trimmed.name || !trimmed.email || !trimmed.message) {
            setStatus("error");
            setError("Name, email, and a short message are required.");
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(trimmed),
            });

            if (!res.ok) {
                setStatus("error");
                setError(
                    "Something went wrong. Please try again or email us directly."
                );
                return;
            }

            setStatus("success");
            setForm(initialForm);

            if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "contact_submit", {
                    method: "site_form",
                });
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again or email us directly.");
            setStatus("error");
        }
    };

    return (
        <motion.div {...fadeUp(0.1)}>
            <form
                className="mt-0 grid gap-7 lg:grid-cols-2"
                onSubmit={handleSubmit}
                noValidate
            >
                <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-ink">
                        Name
                    </label>
                    <input
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={updateField("name")}
                        disabled={status === "submitting"}
                        className="mt-2.5 w-full rounded-md border border-border bg-white px-4 py-3.5 text-sm outline-none transition focus:border-ink disabled:opacity-50"
                        placeholder="Your full name"
                    />
                </div>

                <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-ink">
                        Company
                    </label>
                    <input
                        id="contact-company"
                        name="company"
                        autoComplete="organization"
                        type="text"
                        value={form.company}
                        onChange={updateField("company")}
                        disabled={status === "submitting"}
                        className="mt-2.5 w-full rounded-md border border-border bg-white px-4 py-3.5 text-sm outline-none transition focus:border-ink disabled:opacity-50"
                        placeholder="Your company"
                    />
                </div>

                <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-ink">
                        Email
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={updateField("email")}
                        disabled={status === "submitting"}
                        className="mt-2.5 w-full rounded-md border border-border bg-white px-4 py-3.5 text-sm outline-none transition focus:border-ink disabled:opacity-50"
                        placeholder="you@company.com"
                    />
                </div>

                <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-ink">
                        Phone
                    </label>
                    <input
                        id="contact-phone"
                        name="phone"
                        autoComplete="tel"
                        type="tel"
                        value={form.phone}
                        onChange={updateField("phone")}
                        disabled={status === "submitting"}
                        className="mt-2.5 w-full rounded-md border border-border bg-white px-4 py-3.5 text-sm outline-none transition focus:border-ink disabled:opacity-50"
                        placeholder="Optional"
                    />
                </div>

                <div className="lg:col-span-2">
                    <label htmlFor="contact-interest" className="block text-sm font-medium text-ink">
                        What are you looking for?
                    </label>
                    <select
                        id="contact-interest"
                        name="interest"
                        value={form.interest}
                        onChange={updateField("interest")}
                        disabled={status === "submitting"}
                        className="mt-2.5 w-full rounded-md border border-border bg-white px-4 py-3.5 text-sm outline-none transition focus:border-ink disabled:opacity-50"
                    >
                        <option value="">Select one</option>
                        {interestOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="lg:col-span-2">
                    <label htmlFor="contact-message" className="block text-sm font-medium text-ink">
                        Message
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={form.message}
                        onChange={updateField("message")}
                        disabled={status === "submitting"}
                        className="mt-2.5 w-full rounded-md border border-border bg-white px-4 py-3.5 text-sm outline-none transition focus:border-ink disabled:opacity-50"
                        placeholder="Tell us what you're planning"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-4 lg:col-span-2">
                    <motion.button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn-primary disabled:opacity-50"
                        {...tapSpring}
                    >
                        {status === "submitting" ? "Sending..." : "Send request"}
                    </motion.button>
                    {CONTACT_EMAIL && (
                        <p className="text-sm text-muted">
                            Or email us directly at{" "}
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="text-ink underline underline-offset-2 hover:text-ochre-deep"
                            >
                                {CONTACT_EMAIL}
                            </a>
                        </p>
                    )}
                </div>

                <div className="lg:col-span-2">
                    {status === "success" && (
                        <p className="mt-3 text-sm text-ochre-deep">
                            Thanks for reaching out — we&rsquo;ll get back to you soon.
                        </p>
                    )}
                    {status === "error" && error && (
                        <p className="mt-3 text-sm text-red-600">{error}</p>
                    )}
                </div>
            </form>
        </motion.div>
    );
}

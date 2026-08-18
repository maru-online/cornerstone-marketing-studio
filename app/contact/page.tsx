import type { Metadata } from "next";
import ContactCTALight from "@/components/work/ContactCTALight";
import FooterLight from "@/components/work/FooterLight";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from "@/lib/contact";

export const metadata: Metadata = {
    title: "Contact — Cornerstone Marketing Studio",
    description:
        "Tell us what you're planning — a campaign, an event, a gifting run, or a full rebrand — and we'll come back with a scoped assessment, not a sales pitch.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <section className="section bg-white px-6 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <h1 className="font-heading text-4xl font-semibold text-ink sm:text-[2.65rem]">
                            Let&rsquo;s talk about what you need.
                        </h1>
                        <p className="mt-5 leading-relaxed text-muted">
                            Tell us what you&rsquo;re planning — a campaign, an event, a
                            gifting run, or a full rebrand — and we&rsquo;ll come back with a
                            scoped assessment, not a sales pitch.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-16 lg:grid-cols-[2fr_1fr]">
                        <ContactCTALight />

                        <aside className="space-y-8 text-sm leading-relaxed">
                            <div>
                                <div className="font-semibold text-ink">Direct Contact</div>
                                <dl className="mt-4 space-y-3 text-muted">
                                    <div>
                                        <dt className="inline font-medium text-ink">Email: </dt>
                                        <dd className="inline">
                                            {CONTACT_EMAIL || "To be confirmed"}
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="inline font-medium text-ink">
                                            Phone / WhatsApp:{" "}
                                        </dt>
                                        <dd className="inline">
                                            {CONTACT_PHONE || "To be confirmed"}
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="inline font-medium text-ink">Address: </dt>
                                        <dd className="inline">
                                            {CONTACT_ADDRESS || "To be confirmed"}
                                        </dd>
                                    </div>
                                </dl>
                            </div>

                            <p className="border-t border-border pt-7 text-xs text-muted">
                                Cornerstone Marketing Studio Pty Ltd processes your
                                information solely to respond to your enquiry, in line with
                                the Protection of Personal Information Act (POPIA). We do not
                                share your details with third parties without consent.
                            </p>
                        </aside>
                    </div>
                </div>
            </section>

            <FooterLight />
        </main>
    );
}

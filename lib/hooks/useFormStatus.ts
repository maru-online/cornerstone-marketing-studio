import { useState } from "react";

export type FormStatus = "idle" | "submitting" | "success" | "error";

export function useFormStatus() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [error, setError] = useState<string | null>(null);

    return { status, setStatus, error, setError };
}

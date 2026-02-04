"use client";

import { useState } from "react";

type Props = {
  locale: string;
  labels: {
    name: string;
    phone: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
};

export default function ContactForm({ locale, labels }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, locale, page: window.location.pathname })
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          required
          placeholder={labels.name}
          className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm"
        />
        <input
          name="phone"
          required
          placeholder={labels.phone}
          className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm"
        />
      </div>
      <textarea
        name="message"
        required
        placeholder={labels.message}
        rows={4}
        className="rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60"
      >
        {labels.submit}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-600">{labels.success}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-rose-600">{labels.error}</p>
      )}
    </form>
  );
}

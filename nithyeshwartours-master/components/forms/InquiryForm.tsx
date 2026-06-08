"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent font-sans text-sm text-midnight border-b border-midnight/20 pb-2 outline-none focus:border-gold-dark transition-colors duration-300 placeholder:text-midnight/30";

  const labelClass =
    "font-sans text-xs font-semibold tracking-[0.08em] uppercase text-midnight/50 mb-2 block";

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Inquiry form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span aria-label="required">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Aditya Sharma"
            className={inputClass}
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span aria-label="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className={inputClass}
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="destination" className={labelClass}>
            Desired Destination
          </label>
          <select
            id="destination"
            name="destination"
            className={inputClass}
            defaultValue=""
            aria-label="Select a destination"
          >
            <option value="" disabled>
              Choose State / Yatra
            </option>
            <option value="uttar-pradesh">Uttar Pradesh</option>
            <option value="madhya-pradesh">Madhya Pradesh</option>
            <option value="odisha">Odisha</option>
            <option value="andaman">Andaman</option>
            <option value="tamil-nadu">Tamil Nadu</option>
            <option value="international">International</option>
            <option value="honeymoon">Honeymoon</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className={labelClass}>
          Your Message / Spiritual Intent
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your journey aspirations..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "success" && (
        <div
          role="alert"
          className="mb-6 p-4 bg-gold/10 border-l-2 border-gold-dark rounded-sm"
        >
          <p className="font-sans text-sm text-gold-dark font-medium">
            Your inquiry has been received. Our guides will reach out within 24
            hours.
          </p>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="mb-6 p-4 bg-red-50 border-l-2 border-red-400 rounded-sm"
        >
          <p className="font-sans text-sm text-red-700">
            Something went wrong. Please try again or call us directly.
          </p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Submit Inquiry →"}
      </Button>
    </form>
  );
}

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
      
      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        window.location.href = "/inquiry/thank-you";
      }, 2000);
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent font-sans text-sm text-midnight border-b-2 border-midnight/20 pb-3 outline-none focus:border-gold-dark transition-colors duration-300 placeholder:text-midnight/30";

  const labelClass =
    "font-sans text-xs font-semibold tracking-[0.08em] uppercase text-midnight/50 mb-3 block";

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Inquiry form">
      {/* Personal Information */}
      <div className="mb-10">
        <h3 className="font-serif text-lg text-midnight mb-6">Personal Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              Full Name <span className="text-red-500">*</span>
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
              Email Address <span className="text-red-500">*</span>
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
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+91 98765 43210"
              className={inputClass}
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="city" className={labelClass}>
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="e.g. Chennai"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Travel Details */}
      <div className="mb-10">
        <h3 className="font-serif text-lg text-midnight mb-6">Travel Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label htmlFor="destination" className={labelClass}>
              Desired Destination <span className="text-red-500">*</span>
            </label>
            <select
              id="destination"
              name="destination"
              required
              className={inputClass}
              defaultValue=""
              aria-label="Select a destination"
            >
              <option value="" disabled>Choose Destination</option>
              <option value="uttar-pradesh">Uttar Pradesh</option>
              <option value="madhya-pradesh">Madhya Pradesh</option>
              <option value="uttarakhand">Uttarakhand (Char Dham)</option>
              <option value="odisha">Odisha</option>
              <option value="andaman">Andaman Islands</option>
              <option value="tamil-nadu">Tamil Nadu</option>
              <option value="gujarat">Gujarat</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="kashmir">Kashmir</option>
              <option value="himachal">Himachal Pradesh</option>
              <option value="karnataka">Karnataka</option>
              <option value="goa">Goa</option>
              <option value="international">International</option>
              <option value="honeymoon">Honeymoon Packages</option>
            </select>
          </div>
          <div>
            <label htmlFor="travelMonth" className={labelClass}>
              Preferred Travel Month
            </label>
            <select
              id="travelMonth"
              name="travelMonth"
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>Select Month</option>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>
          <div>
            <label htmlFor="duration" className={labelClass}>
              Trip Duration
            </label>
            <select
              id="duration"
              name="duration"
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>Select Duration</option>
              <option value="3-5">3-5 Days</option>
              <option value="6-9">6-9 Days</option>
              <option value="10-14">10-14 Days</option>
              <option value="15+">15+ Days</option>
            </select>
          </div>
          <div>
            <label htmlFor="travelers" className={labelClass}>
              Number of Travelers
            </label>
            <input
              id="travelers"
              name="travelers"
              type="number"
              min="1"
              max="50"
              placeholder="e.g. 4"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Accommodation Preference */}
      <div className="mb-10">
        <label className={labelClass}>
          Accommodation Preference
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <label className="flex items-center gap-3 p-4 border-2 border-midnight/10 rounded-lg cursor-pointer hover:border-gold-dark transition-colors">
            <input type="radio" name="accommodation" value="standard" className="text-gold-dark" />
            <div>
              <p className="font-sans text-sm font-medium text-midnight">Standard</p>
              <p className="font-sans text-xs text-midnight/60">3-star hotels</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 border-2 border-midnight/10 rounded-lg cursor-pointer hover:border-gold-dark transition-colors">
            <input type="radio" name="accommodation" value="premium" className="text-gold-dark" defaultChecked />
            <div>
              <p className="font-sans text-sm font-medium text-midnight">Premium</p>
              <p className="font-sans text-xs text-midnight/60">4-star hotels</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 border-2 border-midnight/10 rounded-lg cursor-pointer hover:border-gold-dark transition-colors">
            <input type="radio" name="accommodation" value="luxury" className="text-gold-dark" />
            <div>
              <p className="font-sans text-sm font-medium text-midnight">Luxury</p>
              <p className="font-sans text-xs text-midnight/60">5-star resorts</p>
            </div>
          </label>
        </div>
      </div>

      {/* Budget Range */}
      <div className="mb-10">
        <label htmlFor="budget" className={labelClass}>
          Budget Range (Optional)
        </label>
        <select
          id="budget"
          name="budget"
          className={inputClass}
          defaultValue=""
        >
          <option value="" disabled>Select Budget</option>
          <option value="under-50k">Under ₹50,000</option>
          <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
          <option value="1lakh-2lakh">₹1,00,000 - ₹2,00,000</option>
          <option value="2lakh-5lakh">₹2,00,000 - ₹5,00,000</option>
          <option value="above-5lakh">Above ₹5,00,000</option>
        </select>
      </div>

      {/* Message */}
      <div className="mb-10">
        <label htmlFor="message" className={labelClass}>
          Your Message / Special Requests
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your journey aspirations, special requirements, dietary preferences, or any other details..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Status Messages */}
      {status === "success" && (
        <div
          role="alert"
          className="mb-6 p-5 bg-gold/10 border-l-4 border-gold-dark rounded"
        >
          <p className="font-sans text-sm text-gold-dark font-semibold mb-1">
            ✓ Inquiry Submitted Successfully!
          </p>
          <p className="font-sans text-sm text-midnight/70">
            Our travel experts will contact you within 24 hours. Redirecting to confirmation...
          </p>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="mb-6 p-5 bg-red-50 border-l-4 border-red-400 rounded"
        >
          <p className="font-sans text-sm text-red-700 font-semibold mb-1">
            Something went wrong
          </p>
          <p className="font-sans text-sm text-red-600">
            Please try again or call us at <a href="tel:+917200118411" className="underline font-medium">+91 72001 18411</a>
          </p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? "Submitting..." : "Submit Inquiry"}
      </Button>

      <p className="mt-4 text-center font-sans text-xs text-midnight/50">
        By submitting, you agree to our terms and privacy policy. We'll contact you within 24 hours.
      </p>
    </form>
  );
}

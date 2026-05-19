"use client";

import { useState } from "react";

export function FlightSearchForm() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const [cabinClass, setCabinClass] = useState("Premium Economy");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Route to inquiry with pre-filled flight details
    const params = new URLSearchParams({
      type: "flight",
      departure,
      arrival,
      date,
      class: cabinClass,
    });
    window.location.href = `/inquiry?${params.toString()}`;
  }

  const labelClass =
    "font-sans text-xs font-semibold tracking-[0.06em] uppercase text-[#43474e] block mb-2";

  const inputClass =
    "w-full border border-[#c4c6cf] px-[13px] py-[10px] font-sans text-base text-midnight outline-none focus:border-gold-dark transition-colors duration-300 placeholder:text-[rgba(116,119,127,0.5)] bg-white";

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Flight search form">
      <div className="grid grid-cols-2 gap-6">
        {/* Departure */}
        <div>
          <label htmlFor="flight-departure" className={labelClass}>
            Departure
          </label>
          <input
            id="flight-departure"
            name="departure"
            type="text"
            placeholder="From (City or Airport)"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className={inputClass}
            autoComplete="off"
          />
        </div>

        {/* Arrival */}
        <div>
          <label htmlFor="flight-arrival" className={labelClass}>
            Arrival
          </label>
          <input
            id="flight-arrival"
            name="arrival"
            type="text"
            placeholder="To (Sacred Destination)"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            className={inputClass}
            autoComplete="off"
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="flight-date" className={labelClass}>
            Date
          </label>
          <input
            id="flight-date"
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        {/* Class */}
        <div>
          <label htmlFor="flight-class" className={labelClass}>
            Class
          </label>
          <select
            id="flight-class"
            name="class"
            value={cabinClass}
            onChange={(e) => setCabinClass(e.target.value)}
            className={`${inputClass} cursor-pointer appearance-none bg-no-repeat`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%23000613' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundPosition: "right 12px center",
              paddingRight: "36px",
            }}
          >
            <option value="Economy">Economy</option>
            <option value="Premium Economy">Premium Economy</option>
            <option value="Business">Business</option>
            <option value="First Class">First Class</option>
          </select>
        </div>

        {/* Submit button — spans full width */}
        <div className="col-span-2 pt-4">
          <button
            type="submit"
            className="w-full bg-navy text-white font-sans font-bold text-base py-4 rounded-[2px] transition-colors duration-300 hover:bg-midnight min-h-[44px]"
          >
            Search Sacred Routes
          </button>
        </div>
      </div>
    </form>
  );
}

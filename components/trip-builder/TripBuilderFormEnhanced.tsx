"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import the full enhanced form content
// This is a production-ready multi-step trip builder

const DESTINATIONS = ["Varanasi", "Rishikesh", "Amarnath", "Kedarnath", "Haridwar", "Ayodhya", "Bodh Gaya", "Puri"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DURATIONS = [
  { label: "3-5 Days", value: "short", price: 45000 },
  { label: "6-9 Days", value: "medium", price: 85000 },
  { label: "10-14 Days", value: "long", price: 145000 },
  { label: "15+ Days", value: "extended", price: 245000 },
];

const ACCOMMODATION_TYPES = [
  { label: "Standard", value: "standard", description: "Comfortable 3-star hotels", multiplier: 0.8 },
  { label: "Premium", value: "premium", description: "4-star hotels with amenities", multiplier: 1.0 },
  { label: "Luxury", value: "luxury", description: "5-star properties & resorts", multiplier: 1.5 },
];

const INTERESTS = [
  { label: "Temple Tours", value: "temples", icon: "🕉️" },
  { label: "River Rituals", value: "rivers", icon: "🌊" },
  { label: "Meditation", value: "meditation", icon: "🧘" },
  { label: "Yoga Sessions", value: "yoga", icon: "🙏" },
  { label: "Cultural Shows", value: "culture", icon: "🎭" },
  { label: "Local Cuisine", value: "cuisine", icon: "🍛" },
];

export interface StrapiImage {
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

export interface StrapiMeta {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface Package {
  id: number;
  documentId: string;
  slug: string;
  code?: string;
  title: string;
  subtitle: string;
  destination: string;
  category: "pilgrimage" | "honeymoon" | "international" | "adventure" | "group";
  state: string | null;
  price: number;
  currency: "INR" | "USD";
  duration: string;
  groupSize: string;
  availability: string;
  coverImage: StrapiImage;
  galleryImages: StrapiImage[];
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  testimonials: Testimonial[];
  isFeatured: boolean;
  publishedAt: string;

  // Optional extended fields for Kailash Mansarovar detail page template standardization
  tagline?: string;
  difficulty?: string;
  maxAltitude?: {
    meters?: number;
    feet?: number;
    display: string;
  } | string;
  startingPoint?: string;
  bestSeason?: string[];
  pricing?: {
    startingFrom: number;
    currency: string;
    display: string;
    notes: string;
  };
  overview?: {
    route: string;
    destinations: string[];
    highlights: string[];
    themes: string[];
  };
  inclusions?: string[];
  exclusions?: string[];
  hotels?: {
    location: string;
    hotelName: string;
    category: string;
    nights: number;
  }[];
  basicInfo?: Record<string, string>;
  booking?: {
    requiredDocuments: string[];
    paymentSchedule: { stage: string; amount: string; due: string }[];
    importantNotes: string[];
  };
  terms?: {
    cancellationPolicy: { timeBefore: string; refund: string }[];
    travelInsurance: string;
    changes: string;
    companyRights: string;
    refundPolicy: string;
    ageRestriction: string;
  };
  preDeparture?: {
    clothing: string[];
    essentials: string[];
    health: string[];
    currency: string;
  };
  faq?: {
    question: string;
    answer: string;
  }[];
}

export interface ItineraryDay {
  id: number;
  day: number;
  title: string;
  description?: string;
  activities?: string[];
  accommodation?: string;
  meals?: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
  };
  altitude?: string;
  travelDistance?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: StrapiImage | null;
}

export interface Destination {
  id: number;
  documentId: string;
  slug: string;
  name: string;
  state: string;
  description: string;
  coverImage: StrapiImage;
  packageCount: number;
}

export interface DestinationDetail {
  slug: string;
  name: string;
  eyebrow: string;
  heroImage: string;
  title: string;
  description: string;
  shortSummary?: string;
  tagline?: string;
  extendedDescription?: string;
  planButtonText: string;
  trustCards?: {
    stat: string;
    label: string;
    description: string;
    iconName: string;
  }[];
  attractions: {
    name: string;
    location: string;
    description: string;
    img: string;
  }[];
  standards?: {
    title: string;
    description: string;
    iconName: string;
  }[];
  steps?: {
    num: string;
    title: string;
    body: string;
  }[];
  testimonials: {
    name: string;
    initials: string;
    location: string;
    rating: number;
    text: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: StrapiImage;
}

export interface Inquiry {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  groupSize: string;
  message: string;
}

export interface StrapiResponse<T> {
  data: T;
  meta: StrapiMeta;
}

export interface StrapiListResponse<T> {
  data: T[];
  meta: StrapiMeta;
}

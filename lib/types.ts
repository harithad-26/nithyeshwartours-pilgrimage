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
}

export interface ItineraryDay {
  id: number;
  day: number;
  title: string;
  description: string;
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

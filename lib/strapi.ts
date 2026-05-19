import type {
  Package,
  Destination,
  TeamMember,
  Testimonial,
  Inquiry,
  StrapiResponse,
  StrapiListResponse,
} from "./types";

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN ?? "";

async function strapiGet<T>(
  path: string,
  tags: string[],
  params: Record<string, string> = {}
): Promise<T> {
  const url = new URL(`${STRAPI_URL}/api${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
    next: { revalidate: 3600, tags },
  });

  if (!res.ok) {
    throw new Error(`Strapi ${res.status}: ${path}`);
  }

  return res.json() as Promise<T>;
}

export async function getFeaturedPackages(): Promise<Package[]> {
  try {
    const data = await strapiGet<StrapiListResponse<Package>>(
      "/packages",
      ["packages"],
      {
        "filters[isFeatured][$eq]": "true",
        "populate": "coverImage,testimonials",
        "sort": "publishedAt:desc",
        "pagination[limit]": "6",
      }
    );
    return data.data;
  } catch {
    return [];
  }
}

export async function getPackagesByDestination(destination: string): Promise<Package[]> {
  try {
    const data = await strapiGet<StrapiListResponse<Package>>(
      "/packages",
      ["packages", `packages-${destination}`],
      {
        "filters[state][$eqi]": destination,
        "populate": "coverImage",
        "sort": "publishedAt:desc",
      }
    );
    return data.data;
  } catch {
    return [];
  }
}

export async function getPackageBySlug(slug: string): Promise<Package | null> {
  try {
    const data = await strapiGet<StrapiListResponse<Package>>(
      "/packages",
      ["packages", `package-${slug}`],
      {
        "filters[slug][$eq]": slug,
        "populate": "coverImage,galleryImages,itinerary,testimonials.avatar",
      }
    );
    return data.data[0] ?? null;
  } catch {
    return null;
  }
}

export async function getAllPackageSlugs(): Promise<string[]> {
  try {
    const data = await strapiGet<StrapiListResponse<Package>>(
      "/packages",
      ["packages"],
      { "fields": "slug", "pagination[limit]": "100" }
    );
    return data.data.map((p) => p.slug);
  } catch {
    return [];
  }
}

export async function getDestinations(): Promise<Destination[]> {
  try {
    const data = await strapiGet<StrapiListResponse<Destination>>(
      "/destinations",
      ["destinations"],
      { "populate": "coverImage", "sort": "name:asc" }
    );
    return data.data;
  } catch {
    return [];
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const data = await strapiGet<StrapiListResponse<Testimonial>>(
      "/testimonials",
      ["testimonials"],
      { "populate": "avatar", "sort": "publishedAt:desc", "pagination[limit]": "12" }
    );
    return data.data;
  } catch {
    return [];
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const data = await strapiGet<StrapiListResponse<TeamMember>>(
      "/team-members",
      ["team"],
      { "populate": "avatar", "sort": "order:asc" }
    );
    return data.data;
  } catch {
    return [];
  }
}

export async function submitInquiry(inquiry: Inquiry): Promise<void> {
  const res = await fetch(`${STRAPI_URL}/api/inquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    body: JSON.stringify({ data: inquiry }),
  });
  if (!res.ok) throw new Error("Failed to submit inquiry");
}

export function getStrapiImageUrl(url: string): string {
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

// Re-export StrapiResponse for consumers that need it
export type { StrapiResponse, StrapiListResponse };

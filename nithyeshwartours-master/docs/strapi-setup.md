# Strapi v5 Setup Guide — Nithyeshwar Tours

Run Strapi separately from the Next.js app. The Next.js frontend reads from Strapi's REST API.

## 1. Install Strapi

```bash
npx create-strapi-app@latest nithyeshwartours-cms --quickstart
cd nithyeshwartours-cms
```

This runs Strapi on `http://localhost:1337`. Create an admin user on first launch.

## 2. Required Content Types

Create these in **Content-Type Builder → Create new collection type**:

### Package
| Field | Type | Notes |
|---|---|---|
| slug | UID (from title) | Required, unique |
| title | Short Text | Required |
| subtitle | Short Text | |
| destination | Short Text | e.g. "Varanasi & Sarnath" |
| category | Enumeration | pilgrimage, honeymoon, international, adventure, group |
| state | Short Text | e.g. "uttar-pradesh" — matches URL slug |
| price | Integer | In INR |
| currency | Enumeration | INR, USD |
| duration | Short Text | e.g. "4 Days / 3 Nights" |
| groupSize | Short Text | e.g. "2–8 Pilgrims" |
| availability | Short Text | e.g. "Year Round" |
| coverImage | Media (single) | Required |
| galleryImages | Media (multiple) | |
| description | Long Text | |
| highlights | JSON | Array of strings |
| isFeatured | Boolean | Default false |
| itinerary | Component (repeatable) | See Itinerary component below |
| testimonials | Relation (has many Testimonials) | |

### Itinerary (Component — create in Components tab first)
| Field | Type |
|---|---|
| day | Integer |
| title | Short Text |
| description | Long Text |

### Destination
| Field | Type |
|---|---|
| slug | UID (from name) |
| name | Short Text |
| state | Short Text |
| description | Long Text |
| coverImage | Media (single) |
| packageCount | Integer |

### Testimonial
| Field | Type |
|---|---|
| name | Short Text |
| location | Short Text |
| rating | Integer (min 1, max 5) |
| text | Long Text |
| avatar | Media (single) |

### Team Member
| Field | Type |
|---|---|
| name | Short Text |
| role | Short Text |
| bio | Long Text |
| avatar | Media (single) |
| order | Integer |

### Inquiry
| Field | Type |
|---|---|
| fullName | Short Text |
| email | Email |
| phone | Short Text |
| destination | Short Text |
| groupSize | Short Text |
| message | Long Text |
| status | Enumeration | pending, replied, closed |

## 3. API Permissions

In **Settings → Users & Permissions → Roles → Public**:

Enable `find` and `findOne` for: Package, Destination, Testimonial, Team Member  
Enable `create` for: Inquiry  
Leave Team Member write access disabled.

## 4. API Token

In **Settings → API Tokens → Create new token**:
- Name: `nithyeshwartours-frontend`
- Token type: **Custom**
- Permissions: Read on all content types + Create on Inquiry
- Copy the token → add to `.env.local`:

```
STRAPI_API_TOKEN=your_token_here
```

## 5. Webhook (on-demand ISR)

In **Settings → Webhooks → Create new**:

- **Name:** Next.js Revalidation
- **URL:** `https://your-production-domain.com/api/revalidate?secret=YOUR_REVALIDATE_SECRET`
- **Events:** ✓ Entry: publish, ✓ Entry: update, ✓ Entry: delete
- **Headers:** `Content-Type: application/json`

The webhook body automatically includes `{ "model": "package" }` etc. — the Next.js handler maps this to cache tags.

## 6. Environment Variables

Add to `d:\Sparks Projects\nithyeshwartours\.env.local` (never commit this file):

```
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token
REVALIDATE_SECRET=generate_a_random_32char_string_here
```

For production, set these as environment variables in your hosting platform (Vercel, etc.).

## 7. Sample Data to Add First

Add at least 3 packages with `isFeatured: true` so the home page renders properly. Upload cover images from the Strapi media library.

Recommended first packages:
1. "Varanasi & Sarnath: The Eternal Light" (category: pilgrimage, state: uttar-pradesh)
2. "Chardham Yatra" (category: pilgrimage, state: uttar-pradesh)
3. "Andaman Sacred Shores" (category: pilgrimage, state: andaman)

Add 3 testimonials with ratings 4–5 stars to populate the home page pilgrim stories section.

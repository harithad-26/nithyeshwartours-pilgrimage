import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const TAG_MAP: Record<string, string[]> = {
  package: ["packages"],
  destination: ["destinations"],
  testimonial: ["testimonials"],
  "team-member": ["team"],
};

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const model: string = body?.model ?? "";
    const tags = TAG_MAP[model] ?? ["packages", "destinations", "testimonials"];

    for (const tag of tags) {
      revalidateTag(tag, {});
    }

    return NextResponse.json({
      revalidated: true,
      tags,
      model,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}

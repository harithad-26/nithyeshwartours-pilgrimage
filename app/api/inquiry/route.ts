import { NextRequest, NextResponse } from "next/server";
import { submitInquiry } from "@/lib/strapi";
import type { Inquiry } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const inquiry: Inquiry = {
      fullName: String(body.fullName ?? ""),
      email: String(body.email ?? ""),
      phone: String(body.phone ?? ""),
      destination: String(body.destination ?? ""),
      groupSize: String(body.groupSize ?? ""),
      message: String(body.message ?? ""),
    };

    if (!inquiry.fullName || !inquiry.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    await submitInquiry(inquiry);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/quote-schema";
import { generateReference, saveQuote } from "@/lib/quote-store";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again.", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const reference = generateReference();
  const record = await saveQuote({
    id: crypto.randomUUID(),
    reference,
    createdAt: new Date().toISOString(),
    ...parsed.data,
  });

  console.info(
    `[quote:received] ${record.reference} — ${record.name} (${record.email}) · ${record.service}`,
  );

  return NextResponse.json({ ok: true, reference }, { status: 201 });
}

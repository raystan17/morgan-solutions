import type { QuoteValues } from "@/lib/quote-schema";

export type QuoteRecord = QuoteValues & {
  id: string;
  reference: string;
  createdAt: string;
};

/**
 * In-memory store for prototype use. Submissions last for the server process only.
 *
 * PRODUCTION INTEGRATION POINT:
 *   Replace with persistence + notification (email to morganexteriorsolution@gmail.com).
 */
const quotes: QuoteRecord[] = [];

export async function saveQuote(record: QuoteRecord): Promise<QuoteRecord> {
  quotes.push(record);
  return record;
}

export function generateReference(): string {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const rand = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `MES-${stamp}${rand}`;
}

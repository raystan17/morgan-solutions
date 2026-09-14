import { z } from "zod";

export const serviceOptions = [
  "deck-fence",
  "pressure-washing",
  "landscaping",
  "residential-commercial",
  "multiple",
] as const;

export const propertyOptions = [
  "home",
  "cottage",
  "shop",
  "commercial",
  "other",
] as const;

export const timingOptions = [
  "asap",
  "this-week",
  "this-month",
  "planning",
] as const;

export const quoteSchema = z.object({
  service: z.enum(serviceOptions),
  property: z.enum(propertyOptions),
  timing: z.enum(timingOptions),
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  location: z.string().min(2, "Enter your city or address"),
  notes: z.string().max(2000).optional().or(z.literal("")),
});

export type QuoteValues = z.infer<typeof quoteSchema>;

export const quoteStepFields: (keyof QuoteValues)[][] = [
  ["service"],
  ["property"],
  ["timing"],
  ["name", "email", "phone", "location"],
  ["notes"],
];

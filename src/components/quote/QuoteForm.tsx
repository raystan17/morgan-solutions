"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  quoteSchema,
  quoteStepFields,
  type QuoteValues,
} from "@/lib/quote-schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Option<T extends string> = { value: T; label: string; hint?: string };

const serviceOpts: Option<QuoteValues["service"]>[] = [
  { value: "deck-fence", label: "Deck & Fence", hint: "Build, rebuild, or refresh" },
  { value: "pressure-washing", label: "Pressure Washing", hint: "Homes, shops, and lots" },
  { value: "landscaping", label: "Landscaping", hint: "Yards and cleanup" },
  { value: "residential-commercial", label: "Residential & Commercial", hint: "Whole-property exterior work" },
  { value: "multiple", label: "Multiple / Not sure yet", hint: "Help me figure it out" },
];

const propertyOpts: Option<QuoteValues["property"]>[] = [
  { value: "home", label: "Home" },
  { value: "cottage", label: "Cottage / cabin" },
  { value: "shop", label: "Shop / garage" },
  { value: "commercial", label: "Commercial property" },
  { value: "other", label: "Other" },
];

const timingOpts: Option<QuoteValues["timing"]>[] = [
  { value: "asap", label: "As soon as possible" },
  { value: "this-week", label: "This week" },
  { value: "this-month", label: "This month" },
  { value: "planning", label: "Just looking for a price" },
];

const stepMeta = [
  { title: "What do you need done?", desc: "Pick the closest match — we'll refine it together." },
  { title: "What kind of property is it?", desc: "Helps us show up with the right gear." },
  { title: "When are you hoping to get it done?", desc: "We'll work around your timeline." },
  { title: "Where should we send the quote?", desc: "We'll follow up by phone or email." },
  { title: "Anything else we should know?", desc: "Size, photos, access — optional but helpful." },
] as const;

const TOTAL = stepMeta.length;

export function QuoteForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    mode: "onTouched",
  });

  const values = watch();

  async function goNext() {
    setApiError(null);
    const ok = await trigger(quoteStepFields[step], { shouldFocus: true });
    if (!ok) return;
    setStep((s) => Math.min(s + 1, TOTAL - 1));
  }

  function goBack() {
    setApiError(null);
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(data: QuoteValues) {
    setApiError(null);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setApiError(json?.error ?? "Something went wrong. Please try again.");
        return;
      }
      const ref = json?.reference as string | undefined;
      router.push(ref ? `/quote/success?ref=${encodeURIComponent(ref)}` : "/quote/success");
    } catch {
      setApiError("Network error. Please try again or call us.");
    }
  }

  const meta = stepMeta[step];

  return (
    <div>
      <div className="mb-9">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
          <span>
            Step {step + 1} of {TOTAL}
          </span>
          <span>{Math.round(((step + 1) / TOTAL) * 100)}% complete</span>
        </div>
        <div className="mt-3 flex gap-1.5" aria-hidden>
          {Array.from({ length: TOTAL }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 flex-1 rounded-full transition-colors duration-300",
                i <= step ? "bg-accent-strong" : "bg-navy-900/10",
              )}
            />
          ))}
        </div>
      </div>

      <div className="mb-7">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
          {meta.title}
        </h1>
        <p className="mt-2 text-sm text-slate-600">{meta.desc}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="min-h-[260px]">
          {step === 0 && (
            <CardGrid
              options={serviceOpts}
              selected={values.service}
              error={errors.service?.message}
              onSelect={(v) => {
                setValue("service", v, { shouldValidate: true });
              }}
            />
          )}
          {step === 1 && (
            <CardGrid
              options={propertyOpts}
              selected={values.property}
              error={errors.property?.message}
              onSelect={(v) => setValue("property", v, { shouldValidate: true })}
            />
          )}
          {step === 2 && (
            <CardGrid
              options={timingOpts}
              selected={values.timing}
              error={errors.timing?.message}
              onSelect={(v) => setValue("timing", v, { shouldValidate: true })}
            />
          )}

          {step === 3 && (
            <div className="space-y-5">
              <Field label="Your name" error={errors.name?.message} htmlFor="name">
                <input
                  id="name"
                  autoComplete="name"
                  className={inputClass(!!errors.name)}
                  {...register("name")}
                />
              </Field>
              <Field label="City or address" error={errors.location?.message} htmlFor="location">
                <input
                  id="location"
                  autoComplete="address-level2"
                  placeholder="Brandon, Rivers, Ninette…"
                  className={inputClass(!!errors.location)}
                  {...register("location")}
                />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" error={errors.email?.message} htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={inputClass(!!errors.email)}
                    {...register("email")}
                  />
                </Field>
                <Field label="Phone" error={errors.phone?.message} htmlFor="phone">
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className={inputClass(!!errors.phone)}
                    {...register("phone")}
                  />
                </Field>
              </div>
            </div>
          )}

          {step === 4 && (
            <Field label="Notes (optional)" error={errors.notes?.message} htmlFor="notes">
              <textarea
                id="notes"
                rows={6}
                placeholder="What needs doing, approximate size, access notes…"
                className={cn(inputClass(!!errors.notes), "resize-y")}
                {...register("notes")}
              />
            </Field>
          )}
        </div>

        {apiError ? (
          <p className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {apiError}
          </p>
        ) : null}

        <div className="mt-8 flex items-center justify-between gap-3">
          <Button
            type="button"
            variant="light"
            onClick={goBack}
            disabled={step === 0 || isSubmitting}
            className={cn(step === 0 && "invisible")}
          >
            Back
          </Button>
          {step < TOTAL - 1 ? (
            <Button type="button" variant="primary" onClick={goNext}>
              Continue
            </Button>
          ) : (
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Submit request"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function CardGrid<T extends string>({
  options,
  selected,
  onSelect,
  error,
}: {
  options: Option<T>[];
  selected?: T;
  onSelect: (v: T) => void;
  error?: string;
}) {
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((opt) => {
          const active = selected === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onSelect(opt.value)}
              aria-pressed={active}
              className={cn(
                "flex items-start gap-3 rounded-xl border p-4 text-left transition duration-200",
                active
                  ? "border-accent-strong bg-accent/10 ring-1 ring-accent-strong"
                  : "border-navy-900/12 bg-white hover:border-navy-900/30 hover:bg-navy-900/[0.02]",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border transition",
                  active ? "border-accent-strong bg-accent-strong text-white" : "border-navy-900/25",
                )}
              >
                {active ? (
                  <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : null}
              </span>
              <span>
                <span className="block font-medium text-navy-900">{opt.label}</span>
                {opt.hint ? (
                  <span className="mt-0.5 block text-xs text-slate-500">{opt.hint}</span>
                ) : null}
              </span>
            </button>
          );
        })}
      </div>
      {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-navy-900">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error ? <p className="mt-1.5 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-accent",
    hasError ? "border-red-400" : "border-navy-900/15",
  );
}

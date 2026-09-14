"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
}: {
  items: readonly { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-navy-900/10 overflow-hidden rounded-2xl border border-navy-900/10 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const btnId = `${baseId}-btn-${i}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-navy-900/[0.02] sm:px-6"
              >
                <span className="font-display text-base font-medium text-navy-900 sm:text-lg">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-transform duration-300",
                    isOpen && "rotate-45 border-accent-strong bg-accent text-navy-950",
                  )}
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-6 sm:px-6"
            >
              <p className="max-w-2xl text-pretty leading-relaxed text-slate-600">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

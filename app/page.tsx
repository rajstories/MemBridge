"use client";

import { useState } from "react";
import PassportOutput from "@/components/PassportOutput";
import Wizard from "@/components/Wizard";
import type { Passport } from "@/lib/passport";

export default function Home() {
  const [p, setP] = useState<Passport | null>(null);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6">
      <div className="mx-auto w-full max-w-2xl">
        <header className="mb-7">
          <h1 className="text-3xl font-semibold tracking-tight">AI Passport</h1>
          <p className="mt-1 text-sm text-slate-600">Your context, everywhere.</p>
        </header>

        {p ? (
          <section className="space-y-3">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setP(null)}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700"
              >
                Edit
              </button>
            </div>
            <PassportOutput passport={p} />
          </section>
        ) : (
          <Wizard onComplete={setP} />
        )}
      </div>
    </main>
  );
}

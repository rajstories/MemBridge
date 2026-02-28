"use client";

import { FormEvent, useState } from "react";
import type { Passport } from "@/lib/passport";

type Q = {
  id: string;
  label: string;
  placeholder: string;
};

type Props = {
  onComplete: (p: Passport) => void;
};

const qs: Q[] = [
  {
    id: "identity",
    label: "What's your name and what do you do?",
    placeholder: "Jane Doe, Product Designer",
  },
  {
    id: "location",
    label: "Where are you based?",
    placeholder: "San Francisco, CA",
  },
  {
    id: "style",
    label: "How do you like AI to respond? (tone, length, style)",
    placeholder: "Direct, concise, with practical examples",
  },
  {
    id: "stack",
    label: "What's your main tech stack or tools?",
    placeholder: "Next.js, TypeScript, Node.js, Figma",
  },
  {
    id: "projects",
    label: "What are you currently building or working on?",
    placeholder: "Internal AI assistant for support workflows",
  },
  {
    id: "goals",
    label: "What are your goals for the next 3 months?",
    placeholder: "Ship v1, onboard users, improve response quality",
  },
  {
    id: "extra",
    label: "Anything else AI should always know about you?",
    placeholder: "Prefer tradeoffs called out clearly",
  },
];

const splitIdentity = (v: string) => {
  const t = v.trim();
  if (!t) return { name: "", role: "" };
  const parts = t.split(/[,|-]/).map((x) => x.trim()).filter(Boolean);
  if (parts.length > 1) {
    return { name: parts[0], role: parts.slice(1).join(", ") };
  }
  return { name: t, role: "Not specified" };
};

export default function Wizard({ onComplete }: Props) {
  const [ix, setIx] = useState(0);
  const [ans, setAns] = useState<Record<string, string>>({});
  const q = qs[ix];
  const v = ans[q.id] ?? "";
  const done = ix === qs.length - 1;

  const setVal = (n: string) => {
    setAns((s) => ({ ...s, [q.id]: n }));
  };

  const next = () => {
    if (!v.trim()) return;
    if (!done) setIx((n) => n + 1);
  };

  const prev = () => {
    if (ix > 0) setIx((n) => n - 1);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!v.trim()) return;
    if (!done) {
      next();
      return;
    }
    const id = splitIdentity(ans.identity ?? "");
    onComplete({
      name: id.name,
      role: id.role,
      location: ans.location ?? "",
      style: ans.style ?? "",
      stack: ans.stack ?? "",
      projects: ans.projects ?? "",
      goals: ans.goals ?? "",
      extra: ans.extra ?? "",
    });
  };

  return (
    <div className="w-full rounded-lg border border-slate-200 bg-white p-5 sm:p-7">
      <div className="mb-5 text-sm text-slate-600">{`Step ${ix + 1} of ${qs.length}`}</div>
      <form onSubmit={submit} className="space-y-4">
        <label htmlFor={q.id} className="block text-base font-medium text-slate-900">
          {q.label}
        </label>
        <textarea
          id={q.id}
          value={v}
          onChange={(e) => setVal(e.target.value)}
          placeholder={q.placeholder}
          rows={4}
          className="w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-500"
        />
        <div className="flex items-center justify-between gap-3 pt-1">
          <button
            type="button"
            onClick={prev}
            disabled={ix === 0}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!v.trim()}
            className="rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {done ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { generatePromptBlock, type Passport } from "@/lib/passport";

type Props = {
  passport: Passport;
};

export default function PassportOutput({ passport }: Props) {
  const [copied, setCopied] = useState(false);
  const md = useMemo(() => generatePromptBlock(passport), [passport]);

  const copy = async () => {
    await navigator.clipboard.writeText(md);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const dl = () => {
    const b = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const u = URL.createObjectURL(b);
    const a = document.createElement("a");
    a.href = u;
    a.download = "passport.md";
    a.click();
    URL.revokeObjectURL(u);
  };

  return (
    <div className="w-full rounded-lg border border-slate-200 bg-white p-5 sm:p-7">
      <textarea
        readOnly
        value={md}
        rows={18}
        className="w-full rounded-md border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none"
      />
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={copy}
          className="rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-sm text-white"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <button
          type="button"
          onClick={dl}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-700"
        >
          Download .md
        </button>
      </div>
    </div>
  );
}

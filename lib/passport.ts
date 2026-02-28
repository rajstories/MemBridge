export type Passport = {
  name: string;
  role: string;
  location: string;
  style: string;
  stack: string;
  projects: string;
  goals: string;
  extra: string;
};

const clean = (v: string) => v.trim() || "Not specified";

export function generatePromptBlock(p: Passport): string {
  return [
    "# AI Passport",
    "",
    "## Profile",
    `- Name: ${clean(p.name)}`,
    `- Role: ${clean(p.role)}`,
    `- Location: ${clean(p.location)}`,
    "",
    "## How To Respond",
    clean(p.style),
    "",
    "## Stack",
    clean(p.stack),
    "",
    "## Current Projects",
    clean(p.projects),
    "",
    "## Goals (Next 3 Months)",
    clean(p.goals),
    "",
    "## Extra Context",
    clean(p.extra),
  ].join("\n");
}

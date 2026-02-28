const siteSelectors = {
  "chatgpt.com": [
    "textarea#prompt-textarea",
    "textarea[data-id='root']",
    "textarea"
  ],
  "claude.ai": [
    "div.ProseMirror[contenteditable='true']",
    "div[contenteditable='true'][data-placeholder]",
    "textarea"
  ],
  "gemini.google.com": [
    "div[contenteditable='true'][aria-label*='prompt' i]",
    "div.ql-editor[contenteditable='true']",
    "textarea[aria-label*='prompt' i]",
    "textarea"
  ]
};

const dispatchInputEvents = (el) => {
  el.dispatchEvent(new InputEvent("input", { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
};

const setAsFirstMessage = (el, text) => {
  if (el instanceof HTMLTextAreaElement || el instanceof HTMLInputElement) {
    const cur = (el.value || "").trim();
    el.value = cur ? `${text}\n\n${cur}` : text;
    dispatchInputEvents(el);
    return true;
  }

  if (el instanceof HTMLElement && el.isContentEditable) {
    const cur = (el.textContent || "").trim();
    el.textContent = cur ? `${text}\n\n${cur}` : text;
    dispatchInputEvents(el);
    return true;
  }

  return false;
};

const findInput = () => {
  const host = window.location.hostname;
  const selectors = siteSelectors[host] || [];

  for (const s of selectors) {
    const el = document.querySelector(s);
    if (el) return el;
  }

  return document.querySelector("textarea, div[contenteditable='true']");
};

const injectPassport = async () => {
  const data = await chrome.storage.local.get(["passport.md"]);
  const md = (data["passport.md"] || "").trim();
  if (!md) return;

  const input = findInput();
  if (!input) return;

  setAsFirstMessage(input, md);
  if (input instanceof HTMLElement) input.focus();
};

chrome.runtime.onMessage.addListener((msg) => {
  if (msg?.type === "INJECT_PASSPORT") {
    injectPassport();
  }
});

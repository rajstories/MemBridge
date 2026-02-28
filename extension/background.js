chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;

  try {
    await chrome.tabs.sendMessage(tab.id, { type: "INJECT_PASSPORT" });
  } catch (err) {
    console.warn("Unable to send inject message to tab", err);
  }
});

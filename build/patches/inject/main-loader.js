  // [tradingview-re] DevTool loader (src/main/devtool.ts, built to app/devtool/main.js).
  // Runs before the entry module so the IPC recorder wraps ipcMain first.
  try {
    require("./devtool/main.js").install();
  } catch (err) {
    console.error("[tradingview-re] DevTool failed to load", err);
  }

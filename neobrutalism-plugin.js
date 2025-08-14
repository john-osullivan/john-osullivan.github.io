// tailwind-plugin-neobrutalism.js
const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase, addComponents, addUtilities, theme }) {
  /* 1) Palette via CSS vars (light ↔ dark) */
  addBase({
    ":root": {
      "--nb-bg": "#f7f5f3",
      "--nb-surface": "#ffffff",
      "--nb-muted": "#efebe7",
      "--nb-text": "#121212",
      "--nb-text-muted": "#3a3734",
      "--nb-border": "#1e1e1e",
      "--nb-shadow": "#1e1e1e",
      "--nb-accent1": "#ff6a00", // orange
      "--nb-accent1-ink": "#1a100a",
      "--nb-accent2": "#18a957", // green
      "--nb-accent2-ink": "#0c1a12",
      "--nb-ok": "var(--nb-accent2)",
      "--nb-warn": "#ffb000",
      "--nb-err": "#e23333",
      "--nb-info": "#0077ff",
      "--nb-radii": "14px",
      "--nb-gap": "12px",
      "--nb-pad": "14px",
      "--nb-bw": "2.5px",
      "--nb-focus": "3px",
      "--nb-shadow-offset": "8px",
    },
    ".dark": {
      "--nb-bg": "#0f1113",
      "--nb-surface": "#14171a",
      "--nb-muted": "#1a1d21",
      "--nb-text": "#f2f3f5",
      "--nb-text-muted": "#c8cdd3",
      "--nb-border": "#f2f3f5",
      "--nb-shadow": "#0a0b0c",
      "--nb-accent1": "#ff7a1a",
      "--nb-accent2": "#19c06a",
    },
  });

  /* 2) Base element skin */
  addBase({
    "html, body": { height: "100%" },
    "body": {
      margin: "0",
      background: "var(--nb-bg)",
      color: "var(--nb-text)",
      fontFamily: theme("fontFamily.ui").join(","),
      fontSize: "16px",
      lineHeight: "1.5",
      WebkitFontSmoothing: "antialiased",
      textRendering: "optimizeLegibility",
    },
    "a": {
      color: "var(--nb-text)",
      textDecorationThickness: "2px",
      textUnderlineOffset: "2px",
    },
    "a:hover": { textDecorationStyle: "wavy" },
    "h1,h2,h3,h4,h5,h6": {
      margin: "1.2em 0 .5em",
      fontFamily: theme("fontFamily.display").join(","),
      lineHeight: "1.1",
    },
    "h1": { fontSize: "clamp(2rem,5vw,3rem)", letterSpacing: "-.02em" },
    "h2": { fontSize: "clamp(1.6rem,3.5vw,2.2rem)" },
    "h3": { fontSize: "1.4rem" },
    "code,kbd,samp": {
      fontFamily: theme("fontFamily.mono").join(","),
      background: "var(--nb-muted)",
      padding: "0.15em 0.35em",
      border: "var(--nb-bw) solid var(--nb-border)",
      borderRadius: "6px",
      boxShadow: "var(--nb-shadow-offset) var(--nb-shadow-offset) 0 0 var(--nb-shadow)",
    },
    "pre": {
      padding: "calc(var(--nb-pad) * 1.2)",
      overflow: "auto",
      background: "var(--nb-surface)",
      border: "var(--nb-bw) solid var(--nb-border)",
      borderRadius: "var(--nb-radii)",
      boxShadow: "var(--nb-shadow-offset) var(--nb-shadow-offset) 0 0 var(--nb-shadow)",
    },
    "blockquote": {
      margin: "1em 0",
      padding: "var(--nb-pad)",
      background: "var(--nb-surface)",
      border: "var(--nb-bw) solid var(--nb-border)",
      borderLeft: "calc(var(--nb-bw) * 2) solid var(--nb-accent1)",
      borderRadius: "var(--nb-radii)",
      boxShadow: "var(--nb-shadow-offset) var(--nb-shadow-offset) 0 0 var(--nb-shadow)",
    },
    "hr": { border: "none", height: "var(--nb-bw)", background: "var(--nb-border)", margin: "2rem 0" },
    "table": {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: "0",
      background: "var(--nb-surface)",
      border: "var(--nb-bw) solid var(--nb-border)",
      borderRadius: "var(--nb-radii)",
      boxShadow: "var(--nb-shadow-offset) var(--nb-shadow-offset) 0 0 var(--nb-shadow)",
    },
    "th, td": { padding: ".8rem .9rem", borderBottom: "var(--nb-bw) solid var(--nb-border)" },
    "th": { textAlign: "left", fontWeight: "800", fontFamily: theme("fontFamily.display").join(",") },
    "thead th": { background: "var(--nb-muted)" },
    "tbody tr:last-child td": { borderBottom: "none" },
    "fieldset": {
      border: "var(--nb-bw) dashed var(--nb-border)",
      borderRadius: "var(--nb-radii)",
      padding: "calc(var(--nb-pad)*.8) var(--nb-pad)",
    },
    "legend": { padding: "0 .4rem", fontWeight: "800", fontFamily: theme("fontFamily.display").join(",") },
    "label": { display: "inline-block", marginBottom: ".35rem", fontWeight: "600" },
    "input, select, textarea": {
      color: "inherit", font: "inherit", background: "var(--nb-surface)",
      border: "var(--nb-bw) solid var(--nb-border)",
      borderRadius: "10px", padding: ".65rem .8rem", outline: "none",
      boxShadow: "var(--nb-shadow-offset) var(--nb-shadow-offset) 0 0 var(--nb-shadow)",
    },
    "textarea": { minHeight: "6rem", resize: "vertical" },
    "input::placeholder, textarea::placeholder": { color: "var(--nb-text-muted)" },
    "input[type=checkbox], input[type=radio]": {
      width: "1.1rem", height: "1.1rem",
      accentColor: "var(--nb-accent1)",
      border: "var(--nb-bw) solid var(--nb-border)",
      boxShadow: "var(--nb-shadow-offset) var(--nb-shadow-offset) 0 0 var(--nb-shadow)",
      borderRadius: "4px",
    },
    "progress": {
      width: "100%", height: "14px", appearance: "none",
      border: "var(--nb-bw) solid var(--nb-border)", borderRadius: "999px",
      background: "var(--nb-muted)",
      boxShadow: "var(--nb-shadow-offset) var(--nb-shadow-offset) 0 0 var(--nb-shadow)",
    },
    "dialog": {
      border: "var(--nb-bw) solid var(--nb-border)", borderRadius: "var(--nb-radii)",
      padding: "calc(var(--nb-pad) * 1.2)", background: "var(--nb-surface)", color: "var(--nb-text)",
      boxShadow: "var(--nb-shadow-offset) var(--nb-shadow-offset) 0 0 var(--nb-shadow)",
    },
    ":focus-visible": { outline: "var(--nb-focus) solid var(--nb-accent1)", outlineOffset: "2px" },
    "::selection": { background: "color-mix(in srgb, var(--nb-accent1) 70%, var(--nb-bg))", color: "#fff" },
  });

  /* 3) Component classes used by React wrappers */
  addComponents({
    ".nb-shadow": { boxShadow: "var(--nb-shadow-offset) var(--nb-shadow-offset) 0 0 var(--nb-shadow)" },
    ".nb-border": { border: "var(--nb-bw) solid var(--nb-border)" },
    ".nb-card": {
      background: "var(--nb-surface)",
      border: "var(--nb-bw) solid var(--nb-border)",
      borderRadius: "var(--nb-radii)",
      padding: "calc(var(--nb-pad) * 1.2)",
      boxShadow: "var(--nb-shadow-offset) var(--nb-shadow-offset) 0 0 var(--nb-shadow)",
    },
    ".nb-badge": {
      display: "inline-block",
      padding: ".25rem .5rem",
      border: "var(--nb-bw) solid var(--nb-border)",
      borderRadius: "999px",
      background: "var(--nb-muted)",
      fontWeight: "700",
    },
    ".nb-btn": {
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: ".5rem",
      padding: ".7rem 1rem",
      background: "var(--nb-accent1)", color: "#fff",
      border: "var(--nb-bw) solid var(--nb-border)",
      borderRadius: "12px",
      fontWeight: "800",
      fontFamily: theme("fontFamily.display").join(","),
      cursor: "pointer",
      boxShadow: "var(--nb-shadow-offset) var(--nb-shadow-offset) 0 0 var(--nb-shadow)",
      transform: "translate(0,0)",
      transition: "transform 80ms linear, box-shadow 80ms linear",
    },
    ".nb-btn:hover": {
      transform: "translate(-3px,-3px)",
      boxShadow: "calc(var(--nb-shadow-offset) + 3px) calc(var(--nb-shadow-offset) + 3px) 0 0 var(--nb-shadow)",
    },
    ".nb-btn:active": {
      transform: "translate(0,0)",
      boxShadow: "var(--nb-shadow-offset) var(--nb-shadow-offset) 0 0 var(--nb-shadow)",
    },
    ".nb-btn--secondary": { background: "var(--nb-accent2)", color: "#fff" },
    ".nb-btn--ghost": { background: "var(--nb-surface)", color: "var(--nb-text)" },
    ".nb-table-zebra tbody tr:nth-child(2n) td": {
      background: "color-mix(in srgb, var(--nb-muted) 60%, transparent)",
    },
  });

  /* 4) Helper utilities */
  addUtilities({
    ".nb-ink": { color: "var(--nb-text)" },
    ".nb-ink-muted": { color: "var(--nb-text-muted)" },
    ".nb-bg": { background: "var(--nb-bg)" },
    ".nb-surface": { background: "var(--nb-surface)" },
    ".nb-muted": { background: "var(--nb-muted)" },
    ".nb-accent-1": { background: "var(--nb-accent1)" },
    ".nb-accent-2": { background: "var(--nb-accent2)" },
    ".nb-ring": {
      outline: "var(--nb-focus) solid var(--nb-accent1)",
      outlineOffset: "2px",
    },
  });
});

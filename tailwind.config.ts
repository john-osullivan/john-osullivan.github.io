import type { Config } from "tailwindcss";
import nb from "./neobrutalism-plugin";

export default {
  darkMode: ["class", "dark"], // toggle via <html class="dark">
  content: ["./src/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        ui: ["Inter", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      transitionDuration: { 40: "40ms", 80: "80ms" },
    },
  },
  plugins: [nb],
} satisfies Config;

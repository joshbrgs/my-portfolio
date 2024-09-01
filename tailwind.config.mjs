/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#fcd34d",

          secondary: "#d8b4fe",

          accent: "#99f6e4",

          neutral: "#e5e7eb",

          "base-100": "#374151",

          info: "#22d3ee",

          success: "#bef264",

          warning: "#f472b6",

          error: "#f87171",
        },
        light: {
          primary: "#fbbf24",

          secondary: "#c084fc",

          accent: "#67e8f9",

          neutral: "#4b5563",

          "base-100": "#f3f4f6",

          info: "#22d3ee",

          success: "#bef264",

          warning: "#f472b6",

          error: "#f87171",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

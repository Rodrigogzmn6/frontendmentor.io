/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark Theme Colors
        "d-main-bg": "hsl(222 26% 31%)",
        "d-keypad-bg": "hsl(223 31% 20%)",
        "d-screen-bg": "hsl(224 36% 15%)",
        "d-func-key": "hsl(225 21% 49%)",
        "d-func-sh-key": "hsl(224 28% 35%)",
        "d-eq-key": "hsl(6 63% 50%)",
        "d-eq-sh-key": "hsl(6 70% 34%)",
        "d-main-key": "hsl(30 25% 89%)",
        "d-main-sh-key": "hsl(28 15% 65%)",
        "d-dark-txt": "hsl(221 14% 31%)",
        "d-light-txt": "hsl(0 0% 100%)",
        // Light Theme Colors
        "l-main-bg": "hsl(0 0% 90%)",
        "l-keypad-bg": "hsl(0 5% 81%)",
        "l-screen-bg": "hsl(0 0% 93%)",
        "l-func-key": "hsl(185 42% 37%)",
        "l-func-sh-key": "hsl(185 58% 25%)",
        "l-eq-key": "hsl(25 98% 40%)",
        "l-eq-sh-key": "hsl(25 99% 27%)",
        "l-main-key": "hsl(45 7% 89%)",
        "l-main-sh-key": "hsl(35 11% 61%)",
        "l-dark-txt": "hsl(60 10% 19%)",
        "l-light-txt": "hsl(0 0% 100%)",
        // Accent Theme Colors
        "a-main-bg": "hsl(268 75% 9%)",
        "a-keypad-bg": "hsl(268 71% 12%)",
        "a-screen-bg": "hsl(268 71% 12%)",
        "a-func-key": "hsl(281 89% 26%)",
        "a-func-sh-key": "hsl(285 91% 52%)",
        "a-eq-key": "hsl(176 100% 44%)",
        "a-eq-sh-key": "hsl(177 92% 70%)",
        "a-main-key": "hsl(268 47% 21%)",
        "a-main-sh-key": "hsl(290 70% 36%)",
        "a-dark-txt": "hsl(221 14% 31%)",
        "a-light-txt": "hsl(0 0% 100%)",
      },
      fontFamily: {
        league: "League Spartan, sans-serif",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        font1: "var(--font1)",
        font2: "var(--font2)",
        primary: "var(--primary)",
      },
      backgroundImage: {
        'custom-svg': "url('/blurry-background.svg')",
      },
      fontFamily: {
        mono: ['Sono', 'Arial', 'sans-serif'],
        serif: ['Petrona', 'serif'],
      },

    },
  },
  plugins: [],
};

export default config;

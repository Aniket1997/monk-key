/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // If your Vite app has an `index.html`
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths to match your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#4d0191",
        "primary-light": "#9c33d7", // Lighter shade of primary color
        "accent-dark": "#3d006b", // Darker accent color
        secondary: {
          DEFAULT: "#8000ff", // Complementary purple shade
          light: "#9f33ff", // Lighter secondary
          dark: "#4b00b3", // Darker secondary
        },
        accent: {
          DEFAULT: "#ff007e", // A contrasting pinkish accent
          light: "#ff4ba3", // Lighter accent
          dark: "#c3005f", // Darker accent
        },
        background: {
          light: "#f4f0fa", // A light background shade
          dark: "#2e053b", // A dark background shade
        },
        text: {
          primary: "#ffffff", // For text on dark backgrounds
          secondary: "#4d0191", // For text on light backgrounds
          error: "#ff0000", // Red color for error messages
        },
      },
    },
  },
  plugins: [],
};

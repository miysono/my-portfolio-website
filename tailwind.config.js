/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "fade-in": "fade 0.5s linear",
        "rotate-slow": "rotate 30s linear infinite",
        "speed-fast": "speed 5s ease-in infinite",
      },

      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        rotate: {
          "0%,100%": { transform: `translateX(0px) `, scale: "0.8" },
          "50%": { transform: "translateX(400px)", scale: "1" },
        },

        speed: {
          "0%,100%": { transform: `translateX(-200%) ` },
          "50%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

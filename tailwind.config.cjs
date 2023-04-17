/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent:'#BB09C3',
      },
      fontFamily: {
        display: ["Lobster", "cursive"],
      },

      backgroundImage:{

        site:"url('./assets/site-bg.jpg')",
        portfolio : "url('./assets/frame1.png')",
        heroBg: "url('./assets/bgimage.jpg')",
      }
    },
    boxShadow: {
      'box': '0px 0px 20px -10px',
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}",
],
  
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "custom-purple" : "#915eff"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        sm: "375px",  // Small phones
        md: "668px",  // Tablets
        lg: "1024px", // iPads and similar
        xl: "1200px", // Desktops
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        'custom-gradient': 'linear-gradient(to right, #915eff, #5b84ff, #00c6ff)',

      },
      animation: {
        'ping-large': "ping-large 1s ease-in-out infinite",
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
        'up-down': 'upDown 2s ease-in-out infinite',

      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0'
          }
        },
        'move-left': {
          "0%":  {
            transform: 'translateX(0%)'
          },
          "100%": {
            transform: 'translateX(-50%)'
          }
        },
        'move-right': {
          "0%":  {
            transform: 'translateX(-0%)'
          },
          "100%": {
            transform: 'translateX(50%)'
          }
        },
        upDown: {
          '0%, 100%': { transform: 'translateY(-5px)' }, // Move up
          '50%': { transform: 'translateY(5px)' }, // Move down
        },
      }
    },
  },
  plugins: [

  ],
};
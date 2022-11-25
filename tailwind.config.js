/** @type {import('tailwindcss').Config} */
/*eslint-disable */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/src/components/img/login-background.svg')",
        "grade-gradient": "linear-gradient(90deg, #68D548 0%, #91D83E 12.5%, #C4D316 21.88%, #E8D807 32.81%, #F9C301 44.27%, #F6A90B 52.6%, #FB7F29 61.46%, #F9692F 72.92%, #F54550 80.73%, #D34BB7 88.02%, #D255CD 97.4%, #B860DA 97.41%)",        
        "login-switcher-gradient": "linear-gradient(263.9deg, #83F2D4 2.81%, #3CD9EE 23.9%, #3872FC 70.86%, #4359FF 94.82%)",
      },
      colors: {
        "dark-gray": "#262626",
        "blured-grey": "rgba(236, 236, 236, 0.1)",
        "light-gray": "#6f6e6e",
        "primary-blue": "#6596B9",
        "dark-blue": "#4F7590",
        "light-blue": "#9FBED4",
        "secondary-grey": "#9c9c9c",
        "login-blue-1": "#0185ff",
        "login-blue-2": "#076AC6",
        "widget-sunrise-border":"#D9D9D9",
        "search-shadow": "#4F4E4E7D",
        "gray-blue" : "#627d95",
        "footer-grey": "#3d4e5e",
        "disabled-grey": "#CFDAE2",
        "disabled-grey-dark": "#ADB9C2"
      },
      spacing: {
        "1px": "1px",
        "18": "4.5rem",
        "112": "28rem",
        "128": "32rem",
        "192": "48rem"
      },
      padding: {
        "full": "100%"
      },
      translate: {
        "center": "-50%"
      },
      rotate: {
        // "compass-south": "0",
        // "compass-south-west": "45deg",
        // "compass-west": "90deg",
        // "compass-north-west": "135deg",
        // "compass-north": "180deg",
        // "compass-north-east": "225deg",
        // "compass-east": "270deg",
        // "compass-south-east": "315deg"
      },
      maxWidth: {
        "xxs": "12rem",
        
      },
      fontSize: {
        "tiny": "12px",
        "1.5xl" : "22px",
        "4.5xl": "40px"
      },
      borderRadius: {
        "primary": "30px",
        "2.5xl": "1.25rem",
      },
      borderWidth: {
        "1px": "1px"
      },
      fontFamily: {
        "Mulish": ["Mulish", "sans-serif"],
        "Open-Sans": ["Open Sans", "sans-serif"],
        "Montserrat": ["Montserrat", "sans-serif"],
      },
      dropShadow: {
        "button": "2px 3px 9px rgba(101, 150, 185, 0.7)",
      },
      boxShadow: {
        'card-shadow': '0px 26.5818px 28.9983px -12.8882px rgba(0, 0, 0, 0.12)'
      },

    },
  },
  plugins: [],
};
/*eslint-enable */

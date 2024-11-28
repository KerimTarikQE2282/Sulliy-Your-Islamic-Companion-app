/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#165449",
        secondary: {
          DEFAULT: "#FF7F50",
          },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        ebgaramondThin: ["EB Garamond Thin", "serif"],
        ebgaramondLight: ["EB Garamond Light", "serif"],
        ebgaramondRegular: ["EB Garamond Regular", "serif"],
        ebgaramondMedium: ["EB Garamond Medium", "serif"],
        ebgaramondBold: ["EB Garamond Bold", "serif"],
        ebgaramondExtraBold: ["EB Garamond ExtraBold", "serif"],
        
        robotoThin: ["Roboto-Thin", "sans-serif"],
        robotoLight: ["Roboto-Light", "sans-serif"],
        robotoRegular: ["Roboto-Regular", "sans-serif"],
        robotoMedium: ["Roboto-Medium", "sans-serif"],
        robotoBold: ["Roboto-Bold", "sans-serif"],
        
        cormorantLight: ["Cormorant-Light", "serif"],
        cormorantRegular: ["Cormorant-Regular", "serif"],
        cormorantMedium: ["Cormorant-Medium", "serif"],
        cormorantBold: ["Cormorant-Bold", "serif"],
        cormorantSemiBold: ["Cormorant-SemiBold", "serif"],
        
        latoThin: ["Lato-Thin", "sans-serif"],
        latoLight: ["Lato-Light", "sans-serif"],
        latoRegular: ["Lato-Regular", "sans-serif"],
        latoBold: ["Lato-Bold", "sans-serif"],
        },
    },
  },
  plugins: [],
}
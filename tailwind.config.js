// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        HeroBlue: '#143454', // Add your custom color
        HeadingBlue: '#3068A1',
        lightBlue: 'rgba(139, 179, 219, 1)', // First gradient color
        darkBlue: 'rgba(64, 108, 151, 1)', // Second gradient color
        'white-10': 'rgba(255, 255, 255, 0.05)', // Custom white color with 10% opacity
        extraLightBlue: "#F5FAFF",
        pricingSection: "#F5FAFF",
        pricingPro: "#102840",
        customBlue: 'rgba(30, 65, 100, 0.71)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(139, 179, 219, 1), rgba(64, 108, 151, 1))',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Set Manrope as the default font
      },
      borderRadius: {
        '20': '20px',
        '40': '40px', // Custom border radius
      },
      fontWeight: {
        light: 200,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      boxShadow: {
        'custom-light': '0 5px 20px rgba(166, 166, 166, 0.11)', // Custom shadow value
      },
    
    },
  },
  plugins: [],
}

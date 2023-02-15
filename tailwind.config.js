module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '50\%': '50%', // p-80% - doesn't work
      },
      screens: {
        'mobile': {
          max: "768px",
        },
      },
    },
  },
  plugins: [],
};

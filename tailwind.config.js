// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-cust': "linear-gradient(45deg,#11998f,#38ef7d)"
      }
    },
  },
  plugins: [],
}

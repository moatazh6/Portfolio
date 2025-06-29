module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ خلي Tailwind يقرأ ملفاتك
  ],
  darkMode: "class", // ✅ علشان تقدر تستخدم dark mode بـ class
  theme: {
    extend: {
       animation: {
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

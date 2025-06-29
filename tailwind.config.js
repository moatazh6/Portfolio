module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ خلي Tailwind يقرأ ملفاتك
  ],
  darkMode: "class", // ✅ علشان تقدر تستخدم dark mode بـ class
  theme: {
    extend: {},
  },
  plugins: [],
}

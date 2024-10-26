/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        //Text styles desktop
        "h1-desktop": ["3.81rem", { lineHeight: "1.1", fontWeight: 700 }],
        "h2-desktop": ["3.06rem", { lineHeight: "1.1", fontWeight: 600 }],
        "h3-desktop": ["2.43rem", { lineHeight: "1.2", fontWeight: 600}],
        "h4-desktop": ["1.95rem", {lineHeight: "1.2", fontWeight: 600}],
        "a-desktop": ["1.25rem", { lineHeight: "1.4" }],
        "p-desktop": ["1rem", { lineHeight: "1.5" }],
        "p-small-desktop": ["0.875rem", { lineHeight: "1.6" }],
        //Text styles tablet
        "h1-tablet": ["2.98rem", { lineHeight: "1.05", fontWeight: 700 }],
        "h2-tablet": ["2.48rem", { lineHeight: "1.05", fontWeight: 600 }],
        "h3-tablet": ["2.07rem", { lineHeight: "1.15", fontWeight: 600}],
        "h4-tablet": ["1.73rem", {lineHeight: "1.15", fontWeight: 600}],
        "a-tablet": ["1.19rem", { lineHeight: "1.35" }],
        "p-tablet": ["1rem", { lineHeight: "1.45" }],
        "p-small-tablet": ["0.875rem", { lineHeight: "1.55" }],
        //Text styles mobile
        "h1-mobile": ["2.02rem", { lineHeight: "1", fontWeight: 700 }],
        "h2-mobile": ["1.8rem", { lineHeight: "1", fontWeight: 600 }],
        "h3-mobile": ["1.6rem", { lineHeight: "1.1", fontWeight: 600}],
        "h4-mobile": ["1.42rem", {lineHeight: "1.1", fontWeight: 600}],
        "a-mobile": ["1.125rem", { lineHeight: "1.3" }],
        "p-mobile": ["1rem", { lineHeight: "1.4" }],
        "p-small-mobile": ["0.875rem", { lineHeight: "1.5" }],
      },
      fontFamily: {
        heading: ["Montserrat"],
        body: ["Nunito"],
      },
      colors: {
        primary: "#D58C3F",
        secondary: "#805426",
        accent: "#472718",
        "txt-pri": "#FFFFFF",
        "txt-sec": "#D0D0D0",
        "txt-darkGray": "#1E1E1E",
        "txt-lightGray": "#6D6A68",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        //primary button
        ".btn-primary": {
          padding: "4px 16px",
          backgroundColor: theme("colors.primary"),
          color: theme("colors.white"),
          borderRadius: "20px",
          height: "auto",
          transition: "background-color 300ms ease",
          boxSizing: "border-box",
          fontWeight: "600",
          "&:hover": {
            backgroundColor: theme("colors.secondary"),
            transform: "scale(1.05)",
          },
        },
        ".flex-container": {
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px 20px",
        },
      });
    },
  ],
}


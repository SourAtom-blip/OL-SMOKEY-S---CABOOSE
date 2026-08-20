/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface": "#1a1c1a",
        "on-error-container": "#93000a",
        "inverse-surface": "#2f312f",
        "primary-fixed": "#e5e2e1",
        "outline-variant": "#c4c7c7",
        "surface-dim": "#dbdad7",
        "on-secondary": "#ffffff",
        "surface-container": "#efeeeb",
        "inverse-primary": "#c8c6c5",
        "tertiary-fixed": "#ffdcbd",
        "surface-tint": "#5f5e5e",
        "on-tertiary-fixed": "#2c1600",
        "on-error": "#ffffff",
        tertiary: "#140700",
        "tertiary-fixed-dim": "#f0bd8b",
        "on-background": "#1a1c1a",
        "on-primary": "#ffffff",
        "on-secondary-container": "#641d00",
        "on-tertiary-fixed-variant": "#623f18",
        "on-secondary-fixed-variant": "#822800",
        secondary: "#a93702",
        "on-tertiary": "#ffffff",
        "surface-bright": "#faf9f6",
        "surface-variant": "#e3e2e0",
        "on-primary-fixed-variant": "#474746",
        "error-container": "#ffdad6",
        outline: "#747878",
        "surface-container-high": "#e9e8e5",
        "on-secondary-fixed": "#380c00",
        "primary-fixed-dim": "#c8c6c5",
        "on-primary-fixed": "#1b1c1c",
        "surface-container-highest": "#e3e2e0",
        "primary-container": "#212121",
        background: "#faf9f6",
        "secondary-fixed-dim": "#ffb59c",
        "on-primary-container": "#898888",
        "surface-container-low": "#f4f3f1",
        "inverse-on-surface": "#f2f1ee",
        surface: "#faf9f6",
        "surface-container-lowest": "#ffffff",
        error: "#ba1a1a",
        "secondary-container": "#fe7440",
        primary: "#0a0a0a",
        "on-tertiary-container": "#ac7f52",
        "on-surface-variant": "#444748",
        "secondary-fixed": "#ffdbcf",
        "tertiary-container": "#341b00"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        gutter: "24px",
        "item-gap": "24px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "section-gap": "80px",
        base: "8px"
      },
      fontFamily: {
        "body-md": ["Montserrat"],
        "headline-sm": ["Domine"],
        "headline-md": ["Domine"],
        "label-bold": ["Montserrat"],
        "body-lg": ["Montserrat"],
        caption: ["Montserrat"],
        "display-lg-mobile": ["Domine"],
        "display-lg": ["Domine"]
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "headline-md": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "label-bold": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "16px", fontWeight: "500" }],
        "display-lg-mobile": ["36px", { lineHeight: "42px", fontWeight: "700" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }]
      }
    }
  },
  plugins: []
};

import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        // Brand
        primary: "#135bec",
        "primary-dark": "#0f4bc4",
        "accent-navy": "#0a101d",

        // Surfaces
        "background-light": "#ffffff",
        "background-dark": "#101622",
        "surface-muted": "#f9fafb",

        // Text
        "text-primary": "#111318",
        "text-secondary": "#616f89",

        // Borders
        "border-subtle": "#f0f2f4",
      },
      fontFamily: {
        // Make Inter the default sans font
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        glass:
          "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03), inset 0 0 0 1px rgba(255, 255, 255, 0.6)",
        "glass-hover":
          "0 10px 15px -3px rgba(19, 91, 236, 0.1), 0 4px 6px -2px rgba(19, 91, 236, 0.05), inset 0 0 0 1px rgba(19, 91, 236, 0.2)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "3rem",
        },
      },
    },
  },
};

export default config;


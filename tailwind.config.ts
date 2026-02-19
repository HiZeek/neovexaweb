import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        // Neo Teal brand
        primary: "#2B9D8A",
        "primary-light": "#3DB396",
        "primary-deep": "#1A7A73",
        "primary-accent": "#5DC9B3",

        // Functional
        success: "#2FBF9F",
        warning: "#F2B544",
        error: "#E35D6A",
        info: "#3AA7C9",

        // Surfaces & text (unchanged)
        "accent-navy": "#0a101d",
        "background-light": "#ffffff",
        "background-dark": "#101622",
        "surface-muted": "#f9fafb",
        "text-primary": "#111318",
        "text-secondary": "#616f89",
        "border-subtle": "#f0f2f4",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #3DB396 0%, #1A7A73 100%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      boxShadow: {
        glass:
          "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03), inset 0 0 0 1px rgba(255, 255, 255, 0.6)",
        "glass-hover":
          "0 10px 15px -3px rgba(43, 157, 138, 0.12), 0 4px 6px -2px rgba(43, 157, 138, 0.06), inset 0 0 0 1px rgba(43, 157, 138, 0.15)",
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

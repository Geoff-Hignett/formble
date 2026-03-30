import { semantic } from "./src/tokens/semantic";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: semantic.colors.primary,
                "primary-hover": semantic.colors.primaryHover,
                "text-primary": semantic.colors.textPrimary,
                "text-on-primary": semantic.colors.textOnPrimary,
            },
            borderRadius: {
                md: "6px",
                lg: "8px",
            },
        },
    },
    plugins: [],
};

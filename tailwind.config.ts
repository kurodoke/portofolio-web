import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        { pattern: /bg-custom-(gray|dark-gray|orange|blue|purple|yellow)/ },
        {
            pattern: /bg-custom-(gray|dark-gray|orange|blue|purple|yellow)/,
            variants: ["hover"],
        },
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "custom-gray": "#eeede9",
                "custom-dark-gray": "#e5e3db",
                "custom-orange": "#fe5c3c",
                "custom-blue": "#005fcc",
                "custom-purple": "#9657eb",
                "custom-yellow": "#f0b845",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
export default config;

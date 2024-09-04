import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                grayBackground: "#f4f4f4",
                whiteDisable: "#b6b6b6",
                blueBackground: "#0000c2",
                pinkForBlue: "#ffab91",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
export default config;

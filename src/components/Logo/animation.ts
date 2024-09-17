import { cubicBezier, Variants } from "framer-motion";

export const logoEase = cubicBezier(0.39, 0, 0.04, 0.98);

export const logoTextVariant: Variants = {
    hidden: { y: "100%" },
    visible: (i: number) => ({
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 2,
            ease: logoEase,
        },
    }),
};

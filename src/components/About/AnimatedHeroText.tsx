import { motion } from "framer-motion";
import React from "react";
import { aboutEase } from "./animation";

export default function AnimatedHeroText({
    children,
    delay,
    className,
}: {
    className: string;
    children: React.ReactNode;
    delay: number;
}): React.ReactElement {
    return (
        <div className={className}>
            <motion.span
                initial={{
                    clipPath: "inset(0% 0% 100% 0%)",
                    y: "100%",
                }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0%" }}
                transition={{
                    delay: delay,
                    duration: 1.2,
                    easings: aboutEase,
                }}
            >
                {children}
            </motion.span>
        </div>
    );
}

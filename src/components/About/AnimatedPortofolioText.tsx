import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { aboutEase } from "./animation";

export default function AnimatedPortofolioText({
    _key,
    children,
    className = "",
}: {
    _key: string;
    children: React.ReactNode;
    className?: string;
}): React.ReactElement {
    return (
        <AnimatePresence mode="wait">
            <motion.p
                className={`md:text-xs lg:text-sm xl:text-base ${className}`}
                key={_key}
                initial={{ opacity: 0, y: "3rem" }}
                animate={{ opacity: 1, y: "0" }}
                exit={{ opacity: 0, y: "-3rem", transition: { duration: 0.2 } }}
                transition={{
                    duration: 1.5,
                    ease: aboutEase,
                }}
            >
                {children}
            </motion.p>
        </AnimatePresence>
    );
}

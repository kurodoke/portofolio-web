import { AnimatePresence, motion } from "framer-motion";
import React, { SetStateAction } from "react";
import { aboutEase } from "./animation";

export default function AnimatedPortofolioFigure({
    children,
    _key,
}: {
    _key: string;
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <AnimatePresence mode="popLayout">
            <motion.figure
                key={_key}
                initial={{
                    clipPath: "inset(0% 100% 0% 0%)",
                    scale: 1.15,
                }}
                animate={{
                    clipPath: "inset(0% 0% 0% 0%)",
                    scale: 1,
                }}
                exit={{
                    clipPath: "inset(0% 100% 0% 0%)",
                    scale: 1.15,
                    transition: { duration: 0.2 },
                }}
                transition={{ duration: 1, ease: aboutEase }}
            >
                {children}
            </motion.figure>
        </AnimatePresence>
    );
}

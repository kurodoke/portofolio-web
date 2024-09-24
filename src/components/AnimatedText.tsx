import { fontText } from "@/font";
import { rootEase } from "@/util/rootEase";
import { delay, motion } from "framer-motion";
import React from "react";

/**
 *  animate text with opacity
 * @returns reactElement: div > "content"
 */
export default function AnimatedText({
    children,
    delay = 0,
    className = "",
    duration = 1.8,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    duration?: number;
}): React.ReactElement {
    return (
        <motion.div
            className={`${fontText.className} ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                delay: delay + 0.2,
                ease: rootEase,
                duration: duration,
            }}
        >
            {children}
        </motion.div>
    );
}

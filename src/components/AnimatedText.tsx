import { fontDisplay, fontDisplayItalic, fontText } from "@/font";
import { rootEase } from "@/util/rootEase";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

/**
 *  animate text with 3 type animation
 * @returns reactElement: div > "content"
 */
export default function AnimatedText({
    children,
    delay = 0,
    className = "",
    duration = 1.8,
    type = "standard",
    scroll = false,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    duration?: number;
    type: "standard" | "italic" | "bold";
    scroll?: boolean;
}): React.ReactElement {
    if (type === "standard") {
        return (
            <motion.div
                className={`${fontText.className} ${className}`}
                initial={{ opacity: 0 }}
                whileInView={scroll ? { opacity: 1 } : {}}
                exit={scroll ? { opacity: 0 } : {}}
                animate={!scroll ? { opacity: 1 } : {}}
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
    if (type === "italic") {
        return (
            <div
                className={`${fontDisplayItalic.className} ${className} flex whitespace-pre`}
            >
                {children
                    ?.toString()
                    .split("")
                    .map((word, index) => {
                        return (
                            <motion.p
                                key={"text-italic-" + word + "-" + index}
                                initial={{
                                    y: "80%",
                                }}
                                whileInView={scroll ? { y: "0%" } : {}}
                                animate={!scroll ? { y: "0%" } : {}}
                                exit={scroll ? { y: "-100%" } : {}}
                                transition={{
                                    delay: delay + index * 0.02,
                                    duration: duration,
                                    ease: rootEase,
                                }}
                            >
                                {word}
                            </motion.p>
                        );
                    })}
            </div>
        );
    }
    return (
        <div className={`${fontDisplay.className} ${className}`}>
            <motion.p
                initial={{
                    clipPath: "inset(0% 0% 100% 0%)",
                    y: "100%",
                }}
                whileInView={
                    scroll ? { clipPath: "inset(0% 0% 0% 0%)", y: "0%" } : {}
                }
                exit={
                    scroll ? { clipPath: "inset(0% 0% 100% 0%)", y: "0%" } : {}
                }
                animate={
                    !scroll ? { clipPath: "inset(0% 0% 0% 0%)", y: "0%" } : {}
                }
                transition={{
                    delay: delay,
                    duration: duration,
                    ease: rootEase,
                }}
            >
                {children}
            </motion.p>
        </div>
    );
}

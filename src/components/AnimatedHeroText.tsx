import { motion } from "framer-motion";
import React from "react";
import { aboutEase } from "./page/About/animation";
import { fontDisplay, fontDisplayItalic } from "@/font";

export default function AnimatedHeroText({
    children,
    delay,
    className = "",
    type = "bold",
}: {
    className?: string;
    children: React.ReactNode;
    delay: number;
    type: "bold" | "italic";
}): React.ReactElement {
    if (type == "bold") {
        return (
            <div className={fontDisplay.className + " " + className}>
                <motion.p
                    initial={{
                        clipPath: "inset(0% 0% 100% 0%)",
                        y: "100%",
                    }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0%" }}
                    transition={{
                        delay: delay,
                        duration: 1.5,
                        ease: aboutEase,
                    }}
                >
                    {children}
                </motion.p>
            </div>
        );
    }

    return (
        <div
            className={
                fontDisplayItalic.className +
                " flex overflow-hidden whitespace-pre" +
                className
            }
        >
            {children
                ?.toString()
                .split("")
                .map((word, index) => {
                    return (
                        <motion.p
                            key={"hero-text-italic-" + index}
                            initial={{
                                y: "100%",
                            }}
                            animate={{
                                y: "0%",
                            }}
                            transition={{
                                delay: delay + index * 0.04,
                                duration: 1.5,
                                ease: aboutEase,
                            }}
                        >
                            {word}
                        </motion.p>
                    );
                })}
        </div>
    );
}

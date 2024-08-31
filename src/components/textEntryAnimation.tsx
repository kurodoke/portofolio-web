import { fontDisplay } from "@/font";
import { cubicBezier, motion, Variants } from "framer-motion";
import React from "react";

export function TextEntryAnimation({
    className,
}: {
    className?: React.HTMLAttributes<string> | string;
}): React.ReactElement {
    const easing = cubicBezier(0.005, 0.88, 0.235, 0.985);
    const text = "Hey! Lets Make Cool Stuff Together.";

    const variants: Variants = {
        hidden: { y: "3rem" },
        visible: (i: number) => ({
            y: 0,
            transition: {
                delay: i * 0,
                duration: 2,
                ease: easing,
            },
        }),
    };

    return (
        <div
            className={`${className} ${fontDisplay.className} absolute text-xl md:text-4xl text-pinkForBlue text-center flex items-center justify-center top-0 h-screen w-screen`}
        >
            <div className="overflow-hidden flex gap-1 md:gap-2">
                {text.split(" ").map((word: string, index: number) => {
                    return (
                        <motion.div
                            custom={index}
                            key={"textentry-" + index}
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                            {word}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

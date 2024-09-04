"use client";

import {
    AnimationDefinition,
    cubicBezier,
    motion,
    Variants,
} from "framer-motion";
import React from "react";
import { LogoAnimation } from "./logoAnimation";

export function EntryAnimation({
    children,
    classname,
    onAnimationComplete,
}: {
    children?: React.ReactNode;
    classname?: React.HTMLAttributes<string> | string;
    onAnimationComplete: (definition: AnimationDefinition) => void;
}): React.ReactElement {
    const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);
    const variants: Variants = {
        visible: { height: "100vh" },
        hidden: () => ({
            height: "0",
            transition: {
                delay: 2.5,
                duration: 1,
                ease: easing,
            },
        }),
    };

    return (
        <>
            <motion.div
                initial="visible"
                animate="hidden"
                variants={variants}
                onAnimationComplete={onAnimationComplete}
                className={`${classname} overflow-hidden fixed w-screen md:w-[calc(100vw-10px)] h-screen bg-blueBackground`}
            >
                {children}
            </motion.div>
        </>
    );
}

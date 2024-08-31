"use client";

import { cubicBezier, motion, Variants } from "framer-motion";
import React from "react";
import { LogoAnimation } from "./logoAnimation";

export function EntryAnimation({
    children,
    classname,
}: {
    children?: React.ReactNode;
    classname?: React.HTMLAttributes<string> | string;
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
                className={`${classname} overflow-hidden absolute w-screen md:w-[calc(100vw-10px)] h-screen bg-blueBackground`}
            >
                {children}
            </motion.div>
        </>
    );
}

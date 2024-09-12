"use client";

import React, { useEffect } from "react";
import { cubicBezier, motion, Variants } from "framer-motion";
import useIntro from "@/app/hooks/useIntro";
import { IntroStoreProvider, useIntroStore } from "@/providers/IntroProvider";

const textShowEase = cubicBezier(0.39, 0, 0.04, 0.98);

const baseVariant: Variants = {
    hidden: { y: "100%" },
    visible: (i: number) => ({
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 2,
            ease: textShowEase,
        },
    }),
};

function CustomMotionG({
    children,
    index,
    id,
}: {
    children: React.ReactNode;
    index: number;
    id: string;
}): React.ReactElement {
    return (
        <motion.g
            id={id}
            custom={index}
            key={"logoletter-" + index}
            initial={"hidden"}
            // initial={hasPlayed ? "open" : "hidden"}
            animate={"visible"}
            variants={baseVariant}
            className={"translate-y-full"}
        >
            {children}
        </motion.g>
    );
}

function Arief({ className }: { className: string }): React.ReactElement {
    let animationIndex = 0;
    return (
        <svg viewBox="0 0 190 78" className={className}>
            <CustomMotionG id="a" index={animationIndex}>
                <path
                    id="0"
                    fillRule="evenodd"
                    className="s0"
                    fill="#000000"
                    d="m34.7 39.5v-0.2q0-3.9-1.8-6.3-0.1-0.1-0.2-0.2-0.1-0.2-0.2-0.3-0.1-0.1-0.2-0.2-0.1-0.1-0.2-0.2-2.2-2.1-6-2.5-0.3 0-0.5 0-0.2 0-0.4 0-0.2 0-0.4-0.1-0.2 0-0.4 0-0.5 0-0.9 0.1-0.4 0-0.8 0-0.4 0-0.9 0.1-0.4 0-0.8 0.1-1.8 0.3-3.3 1-0.2 0.1-0.5 0.2-0.2 0.2-0.4 0.3-0.2 0.1-0.4 0.3-0.3 0.1-0.5 0.3-0.3 0.2-0.6 0.4-0.3 0.3-0.5 0.5-0.3 0.3-0.6 0.6-0.3 0.2-0.5 0.5-0.3 0.4-0.6 0.8-0.3 0.3-0.6 0.7-0.2 0.4-0.4 0.9-0.3 0.4-0.4 0.8l-10-2.3q1.8-5 5.2-8 3.5-3.1 7.9-4.5 1.2-0.3 2.3-0.6 1.2-0.3 2.3-0.5 1.2-0.1 2.4-0.2 1.2-0.1 2.4-0.1 0.5 0 1 0 0.6 0 1.1 0.1 0.5 0 1.1 0.1 0.5 0 1 0.1 0.4 0 0.7 0.1 0.3 0 0.7 0.1 0.3 0.1 0.6 0.1 0.4 0.1 0.7 0.2 0.9 0.1 1.8 0.4 0.9 0.3 1.8 0.6 0.9 0.4 1.7 0.8 0.8 0.4 1.6 0.9 0.7 0.4 1.3 0.9 0.5 0.5 1.1 1 0.5 0.5 1 1.1 0.5 0.6 0.9 1.2 0.2 0.2 0.3 0.4 0.1 0.2 0.2 0.4 0.2 0.2 0.3 0.4 0.1 0.2 0.2 0.4 0.2 0.5 0.5 0.9 0.2 0.5 0.3 0.9 0.2 0.5 0.4 1 0.1 0.5 0.2 0.9 0.7 2.7 0.7 6v36.3h-10.4v-7.5h-0.4q-0.2 0.2-0.3 0.5-0.1 0.2-0.3 0.5-0.1 0.2-0.3 0.4-0.1 0.3-0.3 0.5-0.6 0.8-1.5 1.7 0 0.1-0.1 0.1 0 0.1-0.1 0.1 0 0.1-0.1 0.1 0 0.1-0.1 0.1-0.3 0.3-0.6 0.6-0.3 0.2-0.7 0.5-0.3 0.3-0.7 0.5-0.3 0.2-0.7 0.4-0.3 0.2-0.6 0.4-0.3 0.2-0.7 0.3-0.3 0.2-0.6 0.3-0.3 0.2-0.7 0.3-3.2 1.3-7.7 1.3-0.8 0-1.5 0-0.7 0-1.4-0.1-0.7-0.1-1.5-0.2-0.7-0.1-1.4-0.3-0.4-0.1-0.9-0.3-0.5-0.1-0.9-0.3-0.5-0.1-0.9-0.3-0.5-0.2-0.9-0.4-4.2-1.9-6.7-5.6-0.4-0.6-0.7-1.3-0.3-0.6-0.6-1.3-0.3-0.7-0.5-1.4-0.2-0.7-0.3-1.4-0.1-0.5-0.1-0.9-0.1-0.5-0.1-0.9-0.1-0.5-0.1-0.9 0-0.5 0-1 0-0.4 0-0.8 0-0.4 0.1-0.8 0-0.3 0-0.7 0.1-0.4 0.1-0.8 0.5-2.6 1.6-4.4 1.8-3 4.8-4.8 0.6-0.3 1.3-0.7 0.6-0.3 1.3-0.6 0.7-0.2 1.4-0.5 0.7-0.2 1.4-0.4 0.1-0.1 0.3-0.1 0.2-0.1 0.3-0.1 0.2-0.1 0.4-0.1 0.2-0.1 0.3-0.1 3.7-0.9 7.6-1.4 4.5-0.4 7.3-0.8 0.1 0 0.2 0 0.1 0 0.2-0.1 0.1 0 0.1 0 0.1 0 0.2 0 3-0.4 4.4-1.2 0.3-0.2 0.5-0.4 0.3-0.2 0.4-0.5 0.2-0.3 0.3-0.6 0.1-0.3 0.2-0.6 0-0.1 0-0.2 0-0.1 0-0.1 0-0.1 0-0.2 0-0.1 0-0.2zm0.1 17v-7q-0.6 0.5-2.2 1-1.6 0.5-3.7 0.8 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0-0.5 0.1-1 0.2-0.5 0.1-1 0.1-0.5 0.1-1 0.2-0.5 0.1-1 0.1-1.9 0.3-3.2 0.4 0 0 0 0 0 0-0.1 0 0 0 0 0 0 0 0 0-0.4 0.1-0.8 0.2-0.5 0.1-0.9 0.1-0.4 0.1-0.9 0.2-0.4 0.1-0.8 0.2-0.3 0.1-0.6 0.2-0.2 0.1-0.5 0.1-0.3 0.1-0.6 0.2-0.2 0.1-0.5 0.2-0.3 0.1-0.6 0.2-0.3 0.1-0.5 0.3-0.3 0.1-0.6 0.3-0.3 0.1-0.5 0.3-0.3 0.1-0.5 0.3-0.3 0.2-0.5 0.4-0.2 0.2-0.4 0.4-0.3 0.2-0.5 0.4-0.2 0.3-0.4 0.6-0.2 0.4-0.4 0.7-0.2 0.4-0.3 0.7-0.1 0.4-0.2 0.8-0.1 0.2-0.1 0.4 0 0.2-0.1 0.5 0 0.2 0 0.4 0 0.3 0 0.5 0 0.3 0 0.6 0 0.3 0.1 0.6 0 0.4 0.1 0.7 0.1 0.3 0.1 0.6 0.2 0.5 0.5 1 0.2 0.5 0.5 0.9 0.4 0.5 0.8 0.9 0.4 0.3 0.8 0.6 0.5 0.3 0.9 0.6 0.5 0.2 0.9 0.4 0.5 0.2 1 0.4 0.5 0.2 1 0.3 1.7 0.3 3.7 0.3 0.4 0.1 0.8 0 0.5 0 0.9 0 0.5-0.1 0.9-0.1 0.4-0.1 0.9-0.2 2.2-0.4 4-1.4 0.5-0.2 0.9-0.5 0.4-0.3 0.8-0.6 0.4-0.3 0.8-0.7 0.4-0.3 0.7-0.7 0.3-0.2 0.5-0.5 0.2-0.2 0.4-0.5 0.2-0.2 0.4-0.5 0.1-0.3 0.3-0.6 0.4-0.6 0.7-1.4 0.3-0.7 0.5-1.4 0.3-0.8 0.4-1.6 0.1-0.8 0.1-1.6z"
                />
            </CustomMotionG>
            <CustomMotionG id="r" index={(animationIndex += 1)}>
                <path
                    id="1"
                    className="s0"
                    fill="#000000"
                    d="m66.1 76.2h-10.6v-54.6h10.2v8.7h0.6q0.4-1 0.9-2 0.5-1 1.2-1.9 0.7-0.9 1.5-1.6 0.8-0.8 1.7-1.4 3.8-2.6 8.6-2.6 0.1 0 0.2 0 0.1 0 0.2 0 0.1 0 0.2 0 0.1 0 0.2 0 0.7 0 1.5 0.1 0.1 0 0.2 0 0 0 0.1 0 0.1 0 0.2 0 0.1 0 0.1 0 0.9 0.1 1.6 0.1v10.2q-0.1 0-0.1 0-0.1 0-0.1-0.1-0.1 0-0.1 0-0.1 0-0.1 0-0.7-0.1-1.9-0.3-0.4 0-0.8-0.1-0.4 0-0.8 0-0.5-0.1-0.9-0.1-0.4 0-0.8 0-0.5 0-1 0-0.5 0.1-1 0.1-0.5 0.1-1 0.2-0.4 0.1-0.9 0.2-0.4 0.1-0.7 0.2-0.4 0.1-0.7 0.3-0.4 0.1-0.7 0.3-0.4 0.1-0.7 0.3-3 1.6-4.7 4.3-0.3 0.6-0.6 1.2-0.2 0.6-0.4 1.2-0.2 0.6-0.4 1.2-0.1 0.6-0.2 1.3 0 0.2 0 0.4 0 0.2 0 0.3 0 0.2 0 0.4 0 0.2 0 0.4z"
                />
            </CustomMotionG>
            <CustomMotionG id="i" index={(animationIndex += 1)}>
                <path
                    id="2"
                    fillRule="evenodd"
                    className="s0"
                    fill="#000000"
                    d="m100.3 76.2h-10.6v-54.6h10.6zm-10-64.9q-0.2-0.2-0.4-0.4-0.2-0.2-0.4-0.5-0.2-0.2-0.3-0.5-0.2-0.3-0.3-0.5-0.1-0.3-0.2-0.6-0.1-0.3-0.2-0.6-0.1-0.4-0.1-0.7 0-0.3 0-0.6 0-0.6 0.1-1.2 0.1-0.6 0.3-1.2 0.3-0.5 0.6-1 0.4-0.5 0.8-1 0 0 0 0 0 0 0.1 0 0 0 0-0.1 0 0 0 0 2-1.9 4.8-1.9 2.7 0 4.7 1.9 0.2 0.2 0.4 0.5 0.2 0.2 0.4 0.5 0.2 0.2 0.4 0.5 0.1 0.3 0.3 0.6 0.1 0.3 0.2 0.6 0.1 0.3 0.1 0.6 0.1 0.3 0.1 0.6 0.1 0.3 0.1 0.6 0 0.6-0.2 1.2-0.1 0.6-0.3 1.1-0.2 0.6-0.6 1.1-0.3 0.5-0.7 0.9-0.1 0-0.1 0 0 0 0 0.1-0.1 0-0.1 0 0 0 0 0-2 1.9-4.7 1.9-2.8 0-4.8-1.9z"
                />
            </CustomMotionG>
            <CustomMotionG id="e" index={(animationIndex += 1)}>
                <path
                    id="3"
                    className="s0"
                    fill="#000000"
                    d="m157.3 48.3v3.8l-39.2-0.3-0.3-7.8 34.1 0.1-5.2-0.1c0-0.4 0.2 2 0.2 1.7q0-0.6-0.1-1.2 0-0.5-0.1-1.1 0-0.5-0.1-1.1-0.1-0.5-0.2-1.1-0.2-0.6-0.3-1.1-0.2-0.6-0.3-1.1-0.2-0.6-0.4-1.1-0.2-0.5-0.5-1-0.2-0.5-0.5-0.9-0.3-0.5-0.6-1-0.3-0.4-0.6-0.8-0.3-0.4-0.6-0.7-0.3-0.3-0.6-0.6-0.3-0.3-0.6-0.5-0.4-0.3-0.7-0.5-0.5-0.4-1-0.7-0.6-0.3-1.1-0.5-0.6-0.2-1.2-0.4-0.6-0.2-1.2-0.3-0.4-0.1-0.8-0.1-0.4-0.1-0.8-0.1-0.4-0.1-0.8-0.1-0.4 0-0.8 0-0.5 0-1 0-0.5 0-0.9 0.1-0.5 0-1 0.1-0.5 0.1-1 0.2-0.5 0.2-1 0.3-0.5 0.2-1 0.4-0.5 0.3-1 0.5-0.5 0.3-0.9 0.6-0.8 0.5-1.6 1.2-0.7 0.6-1.3 1.4-0.6 0.7-1.2 1.5-0.5 0.8-0.9 1.7-0.4 0.8-0.7 1.7-0.3 0.8-0.5 1.7-0.2 0.9-0.3 1.8-0.1 0.9-0.2 1.8 0 0.1 0 0.3 0 0.1 0 0.2 0 0.1 0 0.2 0 0.1 0 0.2v5.4q0 0.6 0 1.1 0 0.5 0.1 1.1 0 0.5 0.1 1 0 0.6 0.1 1.1 0.4 2.4 1.2 4.4 0.1 0.1 0.1 0.2 0.1 0.1 0.1 0.2 0.1 0.1 0.2 0.2 0 0.1 0.1 0.2 1.9 4 5.4 6 3.5 2.1 8.1 2.1 0.4 0 0.8-0.1 0.4 0 0.8 0 0.4 0 0.8-0.1 0.4 0 0.8-0.1 0.3-0.1 0.6-0.1 0.3-0.1 0.6-0.2 0.3 0 0.5-0.1 0.3-0.1 0.6-0.2 2.5-0.9 4.3-2.7 0.4-0.3 0.7-0.8 0.4-0.4 0.7-0.8 0.3-0.5 0.6-0.9 0.2-0.5 0.4-1 0.1-0.1 0.1-0.2 0-0.1 0.1-0.2 0-0.1 0.1-0.2 0-0.1 0-0.2l10.1 1.9q-0.3 1.1-0.7 2.1-0.4 1-1 2-0.5 1-1.2 1.9-0.6 0.9-1.4 1.7-0.6 0.7-1.3 1.3-0.7 0.6-1.4 1.1-0.7 0.6-1.5 1-0.8 0.5-1.6 0.9-0.2 0.1-0.5 0.2-0.2 0.1-0.5 0.2-0.2 0.2-0.4 0.3-0.3 0.1-0.5 0.2-0.8 0.2-1.5 0.5-0.7 0.2-1.5 0.4-0.7 0.2-1.5 0.3-0.8 0.2-1.5 0.3-0.6 0.1-1.2 0.1-0.6 0.1-1.1 0.1-0.6 0.1-1.2 0.1-0.6 0-1.2 0-0.8 0-1.7 0-0.9-0.1-1.8-0.2-0.9-0.1-1.7-0.2-0.9-0.2-1.8-0.4-0.9-0.2-1.8-0.4-0.8-0.3-1.7-0.7-0.9-0.3-1.7-0.7-0.8-0.4-1.6-0.9-1.5-0.8-2.8-1.9-1.3-1.1-2.5-2.3-1.1-1.2-2.1-2.6-0.9-1.4-1.6-3-0.5-1-0.9-2-0.5-1-0.8-2.1-0.3-1.1-0.6-2.2-0.2-1.1-0.4-2.2-0.1-0.7-0.2-1.5-0.1-0.8-0.2-1.6 0-0.8-0.1-1.6 0-0.7 0-1.5 0-1 0-2 0.1-0.9 0.2-1.9 0.1-0.9 0.2-1.9 0.2-1 0.3-1.9 0.2-0.9 0.5-1.8 0.2-0.9 0.5-1.8 0.3-0.9 0.6-1.8 0.4-0.9 0.8-1.7 0.5-1.1 1.1-2.1 0.6-0.9 1.3-1.9 0.6-0.9 1.4-1.8 0.8-0.8 1.6-1.6 0.4-0.4 0.8-0.7 0.4-0.4 0.8-0.7 0.4-0.3 0.9-0.6 0.4-0.3 0.9-0.6 1-0.7 2.2-1.2 1.1-0.6 2.3-1 1.2-0.4 2.4-0.7 1.3-0.3 2.5-0.5 0.5 0 1-0.1 0.4 0 0.9 0 0.5-0.1 1-0.1 0.4 0 0.9 0 1.2 0 2.3 0.1 1.1 0.1 2.3 0.3 1.1 0.2 2.2 0.5 1.1 0.2 2.2 0.6 4.3 1.5 7.8 4.8 3.5 3.3 5.5 8.5 0.2 0.6 0.5 1.3 0.2 0.7 0.4 1.3 0.1 0.7 0.3 1.4 0.1 0.7 0.3 1.4 0.4 2.5 0.5 5.5 0 0.2 0 0.4 0 0.2 0 0.4 0 0.3 0 0.5 0 0.2 0 0.4z"
                />
            </CustomMotionG>
            <CustomMotionG id="f" index={(animationIndex += 1)}>
                <path
                    id="f"
                    fillRule="evenodd"
                    className="s0"
                    fill="#000000"
                    d="m178.9 76.2h-10.6v-46-0.1h-8.2v-8.3h8.2v-0.1 0.1-6.5q0-4.9 2.2-8.3 0-0.1 0-0.1 0.1-0.1 0.1-0.1 0.5-0.8 1.2-1.6 0.6-0.7 1.4-1.3 0.8-0.7 1.6-1.2 0.8-0.6 1.7-1 1-0.4 1.9-0.7 1-0.3 2-0.5 1-0.2 2-0.3 1.1-0.2 2.1-0.1 2.5 0 4.4 0.3 0.2 0 0.3 0 0.1 0 0.3 0.1 0.1 0 0.3 0 0.1 0.1 0.2 0.1 1.9 0.4 2.9 0.8 0.1 0 0.1 0 0.1 0 0.2 0 0 0.1 0.1 0.1 0 0 0.1 0l-2.5 8.6q-0.8-0.2-1.9-0.5-0.1-0.1-0.2-0.1-0.2 0-0.3 0-0.1 0-0.2-0.1-0.1 0-0.2 0-0.9-0.1-2-0.1-3.8 0-5.5 1.9-0.2 0.3-0.4 0.5-0.2 0.3-0.4 0.6-0.1 0.3-0.3 0.6-0.1 0.3-0.2 0.6-0.3 0.9-0.4 2 0 0.2 0 0.4 0 0.1 0 0.3 0 0.1 0 0.3 0 0.1 0 0.3v4.9h11.8v8.5l-11.8-0.1v0.1zm0-54.5z"
                />
            </CustomMotionG>
        </svg>
    );
}

function Satrio({ className }: { className: string }) {
    let animationIndex = 5;
    return (
        <svg viewBox="0 0 241 77" className={className}>
            <CustomMotionG id="s" index={(animationIndex += 1)}>
                <path
                    id="0"
                    className="s0"
                    fill="#000000"
                    d="m43.3 34.4l-9.7 1.7q-0.1-0.5-0.3-0.9-0.2-0.5-0.4-0.9-0.3-0.4-0.6-0.8-0.2-0.4-0.5-0.8-0.2-0.2-0.4-0.4-0.2-0.2-0.4-0.4-0.2-0.2-0.4-0.5-0.2-0.2-0.4-0.3-2.5-2.3-7.5-2.3-4.4 0-7.4 2 0 0 0 0-0.1 0-0.1 0 0 0 0 0 0 0 0 0-0.2 0.1-0.4 0.3-0.3 0.2-0.5 0.4-0.2 0.1-0.4 0.3-0.2 0.2-0.3 0.4-0.4 0.4-0.6 0.9-0.3 0.4-0.5 0.9-0.1 0.4-0.2 0.9-0.1 0.5-0.1 1 0 0.3 0 0.6 0.1 0.3 0.1 0.6 0.1 0.3 0.1 0.6 0.1 0.2 0.2 0.5 0.2 0.3 0.3 0.6 0.2 0.3 0.4 0.6 0.2 0.3 0.4 0.5 0.3 0.3 0.5 0.5 0.2 0.1 0.4 0.3 0.2 0.1 0.4 0.3 0.2 0.1 0.4 0.2 0.2 0.1 0.5 0.3 1.9 0.9 4.8 1.6l8.7 2q5.2 1.1 8.5 3.2 0.4 0.3 0.7 0.5 0.4 0.2 0.7 0.5 0.4 0.3 0.7 0.6 0.3 0.2 0.6 0.5 0.8 0.8 1.5 1.8 0.7 0.9 1.1 2 0.5 1 0.8 2.1 0.2 1.1 0.3 2.3 0 0.1 0 0.3 0 0.1 0 0.3 0 0.2 0 0.3 0 0.2 0 0.3 0.1 1.2-0.1 2.4-0.2 1.1-0.6 2.2-0.3 1.1-0.9 2.2-0.5 1-1.2 2-0.5 0.7-1.1 1.3-0.6 0.7-1.2 1.2-0.7 0.6-1.4 1.1-0.7 0.5-1.4 1-0.4 0.2-0.7 0.4-0.3 0.2-0.7 0.3-0.3 0.2-0.7 0.4-0.3 0.1-0.7 0.3-0.7 0.3-1.5 0.6-0.8 0.3-1.6 0.5-0.8 0.2-1.6 0.4-0.9 0.2-1.7 0.3-0.6 0.1-1.3 0.2-0.6 0-1.3 0.1-0.6 0-1.3 0-0.6 0.1-1.3 0.1-0.8 0-1.6-0.1-0.7 0-1.5-0.1-0.8 0-1.6-0.1-0.8-0.1-1.6-0.3-3.6-0.6-6.5-2.1-0.2-0.2-0.5-0.3-0.3-0.2-0.6-0.3-0.2-0.2-0.5-0.3-0.3-0.2-0.5-0.4-1.4-0.9-2.6-2.1-1.1-1.2-2.1-2.6-0.9-1.4-1.5-3-0.6-1.6-0.9-3.2 0 0 0-0.1 0 0 0 0 0 0 0-0.1 0 0 0 0l10.2-1.6q1 4 4 6.1 0.4 0.2 0.8 0.5 0.5 0.2 0.9 0.4 0.4 0.2 0.9 0.4 0.5 0.1 1 0.2 1.4 0.4 3.2 0.5 0.1 0 0.2 0 0.2 0 0.3 0 0.1 0 0.2 0 0.1 0 0.3 0 3.9 0 6.7-1.3 0.2-0.1 0.4-0.2 0.2-0.1 0.4-0.2 0.2-0.1 0.4-0.2 0.2-0.2 0.4-0.3 0.2-0.1 0.4-0.3 0.3-0.2 0.5-0.4 0.2-0.1 0.4-0.3 0.2-0.2 0.4-0.4 0.3-0.4 0.6-0.9 0.3-0.4 0.5-0.9 0.2-0.5 0.3-1.1 0-0.5 0-1 0-5.2-7.7-7l-9.2-2q-5-1.2-8.3-3.2-0.4-0.3-0.8-0.5-0.4-0.3-0.8-0.6-0.4-0.3-0.7-0.6-0.4-0.3-0.7-0.7-0.8-0.8-1.4-1.8-0.7-0.9-1.1-2-0.5-1-0.8-2.1-0.2-1.2-0.3-2.3 0-0.2 0-0.3 0-0.2 0-0.4 0-0.1 0-0.3 0-0.2 0-0.3 0-0.7 0-1.4 0.1-0.7 0.2-1.4 0.1-0.6 0.3-1.3 0.2-0.7 0.4-1.3 0.2-0.4 0.4-0.8 0.2-0.4 0.4-0.8 0.2-0.4 0.5-0.8 0.2-0.4 0.5-0.7 0.5-0.7 1.1-1.3 0.6-0.7 1.2-1.3 0.7-0.5 1.4-1 0.7-0.5 1.4-1 0.3-0.1 0.6-0.3 0.3-0.1 0.6-0.3 0.3-0.1 0.6-0.2 0.2-0.2 0.5-0.3 0.8-0.3 1.6-0.6 0.8-0.3 1.6-0.5 0.8-0.2 1.6-0.4 0.8-0.1 1.7-0.2 0.5-0.1 1.1-0.2 0.5 0 1.1-0.1 0.5 0 1.1 0 0.6 0 1.1 0 0.7 0 1.4 0 0.6 0 1.3 0.1 0.7 0 1.4 0.1 0.7 0.1 1.3 0.2 5.2 0.8 8.5 3.4 1.3 1 2.4 2.1 1 1.1 1.9 2.4 0.8 1.3 1.5 2.8 0.6 1.4 1 2.9z"
                />
            </CustomMotionG>
            <CustomMotionG id="a" index={(animationIndex += 1)}>
                <path
                    id="1"
                    fillRule="evenodd"
                    className="s0"
                    fill="#000000"
                    d="m83.8 39v-0.3q0-3.8-1.8-6.2-0.1-0.2-0.2-0.3-0.1-0.1-0.2-0.2-0.1-0.1-0.2-0.2-0.1-0.1-0.2-0.3-2.1-2.1-6-2.4-0.2 0-0.4-0.1-0.3 0-0.5 0-0.2 0-0.4 0-0.2 0-0.4 0-0.4 0-0.9 0-0.4 0-0.8 0.1-0.4 0-0.8 0.1-0.5 0-0.9 0.1-1.8 0.3-3.3 1-0.2 0.1-0.4 0.2-0.3 0.1-0.5 0.3-0.2 0.1-0.4 0.2-0.2 0.2-0.4 0.3-0.3 0.3-0.6 0.5-0.3 0.2-0.6 0.5-0.3 0.3-0.6 0.5-0.3 0.3-0.5 0.6-0.3 0.3-0.6 0.7-0.3 0.4-0.5 0.8-0.3 0.4-0.5 0.8-0.2 0.4-0.4 0.9l-10-2.3q1.8-5 5.2-8.1 3.5-3 7.9-4.4 1.2-0.4 2.3-0.6 1.2-0.3 2.4-0.5 1.1-0.2 2.3-0.3 1.2 0 2.4 0 0.5 0 1.1 0 0.5 0 1 0 0.5 0.1 1.1 0.1 0.5 0.1 1 0.2 0.4 0 0.7 0.1 0.3 0 0.7 0.1 0.3 0 0.7 0.1 0.3 0.1 0.6 0.1 0.9 0.2 1.8 0.5 0.9 0.3 1.8 0.6 0.9 0.4 1.7 0.8 0.8 0.4 1.6 0.9 0.7 0.4 1.3 0.9 0.6 0.4 1.1 1 0.6 0.5 1 1.1 0.5 0.6 1 1.2 0.1 0.2 0.2 0.4 0.1 0.2 0.3 0.4 0.1 0.2 0.2 0.4 0.1 0.2 0.2 0.4 0.3 0.4 0.5 0.9 0.2 0.4 0.4 0.9 0.1 0.5 0.3 0.9 0.1 0.5 0.2 1 0.7 2.7 0.7 6v36.2h-10.4v-7.4h-0.4q-0.1 0.2-0.3 0.5-0.1 0.2-0.2 0.4-0.2 0.3-0.3 0.5-0.2 0.2-0.4 0.4-0.6 0.9-1.5 1.8 0 0-0.1 0.1 0 0-0.1 0.1 0 0-0.1 0.1 0 0-0.1 0.1-0.3 0.3-0.6 0.5-0.3 0.3-0.7 0.6-0.3 0.2-0.6 0.5-0.4 0.2-0.8 0.4-0.3 0.2-0.6 0.4-0.3 0.1-0.6 0.3-0.4 0.2-0.7 0.3-0.3 0.2-0.7 0.3-3.2 1.3-7.7 1.3-0.7 0-1.5 0-0.7-0.1-1.4-0.1-0.7-0.1-1.4-0.3-0.7-0.1-1.5-0.3-0.4-0.1-0.9-0.2-0.4-0.1-0.9-0.3-0.5-0.2-0.9-0.3-0.5-0.2-0.9-0.4-4.2-1.9-6.6-5.7-0.4-0.6-0.8-1.2-0.3-0.7-0.6-1.4-0.2-0.6-0.4-1.3-0.2-0.8-0.4-1.5 0-0.4-0.1-0.9-0.1-0.4-0.1-0.9 0-0.4-0.1-0.9 0-0.4 0-0.9 0-0.4 0-0.8 0-0.4 0.1-0.8 0-0.4 0.1-0.8 0-0.4 0.1-0.8 0.4-2.5 1.5-4.4 1.8-2.9 4.8-4.7 0.6-0.4 1.3-0.7 0.7-0.3 1.3-0.6 0.7-0.3 1.4-0.5 0.7-0.3 1.4-0.5 0.2 0 0.3-0.1 0.2 0 0.4-0.1 0.1 0 0.3-0.1 0.2 0 0.4 0 3.7-0.9 7.6-1.4 4.4-0.5 7.3-0.8 0.1-0.1 0.1-0.1 0.1 0 0.2 0 0.1 0 0.2 0 0 0 0.1 0 3.1-0.4 4.4-1.3 0.3-0.1 0.5-0.4 0.3-0.2 0.5-0.4 0.1-0.3 0.2-0.6 0.1-0.3 0.2-0.6 0-0.1 0-0.2 0-0.1 0-0.2 0-0.1 0-0.2 0 0 0-0.1zm0.1 17v-7.1q-0.6 0.6-2.2 1.1-1.6 0.4-3.7 0.8 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0-0.5 0.1-1 0.1-0.5 0.1-1 0.2-0.5 0.1-1 0.2-0.5 0-1 0.1-1.9 0.3-3.2 0.4 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0-0.5 0.1-0.9 0.1-0.5 0.1-0.9 0.2-0.4 0.1-0.9 0.2-0.4 0.1-0.8 0.2-0.3 0.1-0.6 0.1-0.2 0.1-0.5 0.2-0.3 0.1-0.5 0.2-0.3 0.1-0.6 0.2-0.3 0.1-0.5 0.2-0.3 0.1-0.6 0.2-0.3 0.2-0.6 0.3-0.3 0.2-0.5 0.3-0.3 0.2-0.5 0.4-0.3 0.2-0.5 0.4-0.2 0.1-0.4 0.4-0.2 0.2-0.4 0.4-0.3 0.3-0.5 0.6-0.2 0.3-0.4 0.7-0.2 0.3-0.3 0.7-0.1 0.4-0.2 0.7 0 0.3-0.1 0.5 0 0.2 0 0.4-0.1 0.3-0.1 0.5 0 0.2 0 0.5 0 0.3 0 0.6 0.1 0.3 0.1 0.6 0 0.3 0.1 0.6 0.1 0.3 0.2 0.6 0.1 0.6 0.4 1.1 0.2 0.5 0.6 0.9 0.3 0.4 0.7 0.8 0.4 0.4 0.9 0.7 0.4 0.3 0.8 0.5 0.5 0.3 1 0.5 0.4 0.2 0.9 0.4 0.5 0.1 1 0.2 1.7 0.4 3.7 0.4 0.4 0 0.9 0 0.4 0 0.8-0.1 0.5 0 0.9-0.1 0.5 0 0.9-0.1 2.2-0.4 4-1.4 0.5-0.3 0.9-0.5 0.4-0.3 0.9-0.6 0.4-0.3 0.7-0.7 0.4-0.3 0.8-0.7 0.2-0.2 0.4-0.5 0.2-0.2 0.4-0.5 0.2-0.3 0.4-0.5 0.2-0.3 0.3-0.6 0.4-0.7 0.7-1.4 0.4-0.7 0.6-1.5 0.2-0.7 0.3-1.5 0.1-0.8 0.1-1.6z"
                />
            </CustomMotionG>
            <CustomMotionG id="t" index={(animationIndex += 1)}>
                <path
                    id="2"
                    fillRule="evenodd"
                    className="s0"
                    fill="#000000"
                    d="m108.2 61.8v-32.2h-7.9v-8.5l7.9-0.1v-12.9h10.6v12.9h11.2v8.6h-11.2v30q0 0.3 0 0.5 0 0.3 0 0.5 0 0.2 0.1 0.5 0 0.2 0 0.5 0.3 2.3 1.5 3.5 0.2 0.2 0.4 0.4 0.2 0.2 0.4 0.4 0.3 0.1 0.5 0.2 0.3 0.2 0.5 0.3 0.8 0.2 1.8 0.4 0.2 0 0.3 0 0.2 0 0.4 0 0.2 0 0.3 0 0.2 0 0.4 0 0.8 0 1.8-0.1 0.2 0 0.5 0 0.2 0 0.4-0.1 0.3 0 0.5-0.1 0.3 0 0.5 0l2 8.7q-1.6 0.6-3.5 0.9-0.5 0-1 0.1-0.4 0.1-0.9 0.1-0.5 0-1 0.1-0.4 0-0.9 0-7.1 0-11.3-4-0.9-0.8-1.6-1.7-0.7-1-1.2-2-0.5-1.1-0.9-2.2-0.3-1.1-0.4-2.3-0.1-0.3-0.1-0.6 0-0.3-0.1-0.6 0-0.3 0-0.6 0-0.3 0-0.6z"
                />
            </CustomMotionG>
            <CustomMotionG id="r" index={(animationIndex += 1)}>
                <path
                    id="3"
                    className="s0"
                    fill="#000000"
                    d="m148.1 75.6h-10.5v-54.6h10.2v8.8h0.6q0.3-1.1 0.9-2.1 0.5-0.9 1.2-1.8 0.6-0.9 1.4-1.7 0.9-0.8 1.8-1.4 3.8-2.5 8.6-2.5 0.1 0 0.2 0 0.1 0 0.1 0 0.1 0 0.2 0 0.1 0 0.2 0 0.7 0 1.6 0 0.1 0 0.1 0 0.1 0.1 0.2 0.1 0.1 0 0.2 0 0 0 0.1 0 0.9 0 1.5 0.1v10.2q0 0 0-0.1-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0-0.7-0.2-1.9-0.3-0.4-0.1-0.8-0.1-0.5 0-0.9-0.1-0.4 0-0.8 0-0.4 0-0.8 0-0.5 0-1 0-0.5 0-1 0.1-0.5 0.1-1 0.2-0.5 0-0.9 0.2-0.4 0.1-0.8 0.2-0.3 0.1-0.7 0.2-0.3 0.2-0.7 0.3-0.3 0.2-0.6 0.4-3 1.6-4.7 4.3-0.3 0.6-0.6 1.1-0.2 0.6-0.4 1.2-0.2 0.6-0.4 1.3-0.1 0.6-0.2 1.2 0 0.2 0 0.4 0 0.2 0 0.4 0 0.2-0.1 0.4 0 0.2 0 0.4z"
                />
            </CustomMotionG>
            <CustomMotionG id="i" index={(animationIndex += 1)}>
                <path
                    id="4"
                    fillRule="evenodd"
                    className="s0"
                    fill="#000000"
                    d="m182.4 75.6h-10.6v-54.6h10.6zm-10-64.8q-0.2-0.2-0.4-0.4-0.2-0.3-0.4-0.5-0.2-0.3-0.3-0.5-0.2-0.3-0.3-0.6-0.2-0.3-0.3-0.6-0.1-0.3-0.1-0.6-0.1-0.3-0.1-0.6 0-0.3 0-0.6 0-0.7 0.1-1.2 0.1-0.6 0.3-1.2 0.3-0.6 0.6-1.1 0.3-0.5 0.8-0.9 0 0 0 0 0-0.1 0-0.1 0.1 0 0.1 0 0 0 0 0 2-1.9 4.7-1.9 2.8 0 4.8 1.9 0.2 0.2 0.4 0.4 0.2 0.3 0.4 0.5 0.2 0.3 0.4 0.6 0.1 0.3 0.3 0.6 0.1 0.2 0.2 0.5 0.1 0.3 0.1 0.6 0.1 0.3 0.1 0.6 0 0.3 0 0.7 0 0.6-0.1 1.1-0.1 0.6-0.3 1.2-0.3 0.5-0.6 1-0.3 0.5-0.8 0.9 0 0 0 0.1 0 0 0 0-0.1 0-0.1 0.1 0 0 0 0-2 1.9-4.8 1.9-2.7 0-4.7-1.9z"
                />
            </CustomMotionG>
            <CustomMotionG id="o" index={(animationIndex += 1)}>
                <path
                    id="5"
                    fillRule="evenodd"
                    className="s0"
                    fill="#000000"
                    d="m208.2 75.9q-0.8-0.2-1.6-0.5-0.8-0.3-1.6-0.6-0.7-0.3-1.5-0.7-0.8-0.4-1.5-0.9-1.4-0.8-2.7-1.9-1.3-1.1-2.4-2.3-1.1-1.2-2-2.6-1-1.4-1.7-2.9 0 0 0 0 0-0.1 0-0.1 0 0 0 0-0.1 0-0.1 0-0.5-1.1-0.9-2.1-0.4-1.1-0.8-2.2-0.3-1.1-0.5-2.2-0.3-1.1-0.5-2.3-0.1-0.7-0.2-1.5 0-0.7-0.1-1.5-0.1-0.7-0.1-1.5 0-0.7 0-1.5 0-0.9 0-1.9 0.1-0.9 0.2-1.8 0-1 0.2-1.9 0.1-0.9 0.3-1.9 0.2-0.9 0.4-1.9 0.3-0.9 0.6-1.8 0.3-1 0.6-1.9 0.4-0.9 0.8-1.7 0.6-1.1 1.2-2.1 0.6-1.1 1.4-2 0.7-1 1.5-1.9 0.8-0.9 1.7-1.7 0.4-0.3 0.8-0.6 0.3-0.3 0.7-0.6 0.4-0.2 0.8-0.5 0.4-0.3 0.8-0.5 1.1-0.7 2.2-1.2 1.2-0.5 2.4-1 1.2-0.4 2.4-0.7 1.2-0.2 2.5-0.4 0.5-0.1 1-0.1 0.5 0 1-0.1 0.4 0 0.9 0 0.5 0 1 0 0.9 0 1.8 0 0.9 0.1 1.8 0.2 0.8 0.1 1.7 0.2 0.9 0.2 1.7 0.4 0.9 0.2 1.7 0.5 0.8 0.2 1.6 0.6 0.9 0.3 1.6 0.7 0.8 0.4 1.6 0.9 1.3 0.8 2.6 1.9 1.2 1 2.3 2.2 1.1 1.2 2 2.5 1 1.3 1.7 2.8 0 0 0.1 0.1 0 0.1 0 0.1 0.1 0.1 0.1 0.1 0 0.1 0 0.2 0.5 1 1 2 0.4 1.1 0.7 2.1 0.4 1.1 0.6 2.2 0.3 1.1 0.4 2.2 0.2 0.8 0.2 1.6 0.1 0.8 0.2 1.6 0.1 0.8 0.1 1.5 0 0.8 0 1.6 0 1 0 1.9-0.1 0.9-0.1 1.9-0.1 0.9-0.3 1.8-0.1 0.9-0.3 1.9-0.2 0.9-0.4 1.8-0.3 1-0.6 1.9-0.3 0.9-0.7 1.8-0.3 0.9-0.8 1.8-0.5 1-1.1 2.1-0.6 1-1.3 1.9-0.8 1-1.6 1.8-0.8 0.9-1.7 1.7-0.3 0.3-0.7 0.6-0.4 0.4-0.8 0.6-0.4 0.3-0.8 0.6-0.4 0.3-0.8 0.5-1.1 0.7-2.2 1.2-1.1 0.5-2.3 0.9-1.2 0.5-2.4 0.7-1.2 0.3-2.4 0.5-0.5 0.1-1 0.1-0.5 0.1-1.1 0.1-0.5 0-1 0-0.5 0.1-1.1 0.1-0.9 0-1.8-0.1-0.9 0-1.8-0.1-0.9-0.2-1.8-0.3-0.9-0.2-1.8-0.4zm7.2-8.1q0.5 0 1 0 0.5 0 0.9-0.1 0.5 0 1-0.1 0.4-0.1 0.9-0.2 0.6-0.2 1.2-0.4 0.6-0.2 1.2-0.5 0.6-0.2 1.1-0.6 0.5-0.3 1-0.7 0.7-0.6 1.3-1.2 0.6-0.6 1.1-1.3 0.6-0.7 1-1.4 0.5-0.8 0.8-1.5 0.1-0.2 0.2-0.4 0.1-0.2 0.2-0.4 0.1-0.2 0.1-0.4 0.1-0.2 0.2-0.4 0.3-0.9 0.5-1.7 0.3-0.9 0.5-1.8 0.2-0.9 0.3-1.7 0.1-0.9 0.2-1.8 0-0.3 0-0.7 0-0.3 0.1-0.6 0-0.3 0-0.6 0-0.3 0-0.7 0-0.7-0.1-1.5 0-0.7-0.1-1.5 0-0.7-0.1-1.4-0.1-0.8-0.3-1.5-0.1-0.5-0.2-1-0.1-0.4-0.2-0.9-0.2-0.5-0.3-0.9-0.1-0.5-0.3-0.9-0.2-0.6-0.5-1.2-0.2-0.5-0.5-1-0.2-0.6-0.6-1.1-0.3-0.5-0.6-1-0.3-0.4-0.6-0.7-0.3-0.4-0.7-0.8-0.3-0.3-0.6-0.6-0.4-0.4-0.8-0.7-0.5-0.4-1.1-0.8-0.7-0.4-1.3-0.7-0.7-0.3-1.4-0.5-0.7-0.2-1.4-0.3-0.3-0.1-0.7-0.1-0.4-0.1-0.8-0.1-0.4-0.1-0.8-0.1-0.4 0-0.8 0-0.4 0-0.9 0-0.5 0-1 0.1-0.4 0.1-0.9 0.1-0.5 0.1-0.9 0.2-0.6 0.2-1.2 0.4-0.6 0.2-1.2 0.5-0.6 0.3-1.1 0.6-0.5 0.3-1 0.7-0.6 0.6-1.2 1.2-0.6 0.6-1.1 1.2-0.5 0.7-1 1.4-0.4 0.7-0.8 1.4-0.1 0.3-0.2 0.5-0.1 0.2-0.2 0.4-0.1 0.3-0.2 0.5-0.1 0.2-0.2 0.5-0.3 0.8-0.5 1.6-0.2 0.8-0.4 1.7-0.2 0.8-0.3 1.7-0.2 0.8-0.2 1.7-0.1 0.4-0.1 0.7 0 0.4 0 0.8-0.1 0.3-0.1 0.7 0 0.4 0 0.7 0 0.8 0.1 1.6 0 0.8 0.1 1.5 0.1 0.8 0.2 1.6 0.1 0.7 0.3 1.5 0.1 0.4 0.2 0.8 0.1 0.5 0.2 0.9 0.1 0.4 0.3 0.8 0.1 0.5 0.2 0.9 0.2 0.5 0.5 1.1 0.2 0.6 0.5 1.1 0.3 0.5 0.6 1 0.3 0.6 0.7 1 0.3 0.4 0.6 0.8 0.3 0.4 0.6 0.7 0.3 0.3 0.7 0.7 0.3 0.3 0.7 0.6 0.6 0.4 1.2 0.8 0.6 0.4 1.3 0.7 0.7 0.3 1.4 0.5 0.7 0.2 1.4 0.4 0.3 0 0.7 0.1 0.4 0 0.8 0.1 0.3 0 0.7 0 0.4 0 0.7 0z"
                />
            </CustomMotionG>
        </svg>
    );
}

export default function Logo(): React.ReactElement {
    //scale from 100%
    const ariefSize = "44.597701149%";
    const satrioSize = "55.402298851%";

    //scale the long one to 100%
    const ariefFullSize = "80.50%";
    const satrioFullSize = "100%";

    const { isHasPlayed, setIsHasPlayed } = useIntroStore((state) => state);

    return (
        <section className="w-[calc(100vw-var(--scrollbar-width))] fixed top-0 left-0">
            {isHasPlayed}
            <div className="relative w-full">
                <motion.div
                    className="absolute flex items-end bg-[#fe5c3c] border border-y-2 w-full border-black origin-top overflow-hidden"
                    initial={isHasPlayed ? "hidden" : "visible"}
                    whileInView={"hidden"}
                    variants={{
                        visible: {
                            height: "100vh",
                            y: "0",
                        },
                        hidden: {
                            y: "-1rem",
                            height: "0vh",
                        },
                    }}
                    transition={{
                        ease: textShowEase,
                        delay: 2.6,
                        duration: 2.8,
                    }}
                    onAnimationComplete={setIsHasPlayed}
                ></motion.div>
                <div className="relative w-[calc(100%-2.5rem)] md:w-full left-5 top-5 md:left-10 md:top-10">
                    <motion.div
                        className="absolute pointer-events-none cursor-none origin-top-left w-full [--scale-to:0.15] md:[--scale-to:0.1]"
                        initial={isHasPlayed ? "visible" : "hidden"}
                        whileInView={"visible"}
                        variants={{
                            hidden: { scale: 1 },
                            visible: {
                                scale: "var(--scale-to)",
                            },
                        }}
                        transition={{
                            ease: textShowEase,
                            delay: 2.6,
                            duration: 1.4,
                        }}
                    >
                        <div className="w-full">
                            <Arief className="w-[80.50%] md:w-[44.597701149%] h-auto" />
                            <Satrio className="w-full md:w-[55.402298851%] h-auto" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

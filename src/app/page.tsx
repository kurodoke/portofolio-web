"use client";

import { useIntroStore } from "@/providers/IntroProvider";
import { cubicBezier, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

//animation things
const animationEase = cubicBezier(0.005, 0.88, 0.235, 0.985);
//---

function HeroSpan({
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
                    easings: animationEase,
                }}
            >
                {children}
            </motion.span>
        </div>
    );
}

function getDelay(baseDelay: number, index: number): number {
    return baseDelay + index * 0.2;
}

export default function About(): React.ReactElement {
    const { isHasPlayed } = useIntroStore((state) => state);

    const baseDelay = isHasPlayed ? 0 : 3;
    let indexAnimation = 0;

    return (
        <main>
            <section className="hero grid text-[8.765vw] md:text-[5.57vw] grid-cols-12">
                <HeroSpan
                    delay={getDelay(baseDelay, indexAnimation++)}
                    className="flex justify-end col-start-5 col-end-13 md:col-start-6 md:col-end-11"
                >
                    Arief Satrio is a
                </HeroSpan>
                <HeroSpan
                    delay={getDelay(baseDelay, indexAnimation++)}
                    className="flex justify-start col-start-1 col-end-12 md:col-start-3"
                >
                    Fullstack Developer
                </HeroSpan>
                <HeroSpan
                    delay={getDelay(baseDelay, indexAnimation++)}
                    className="flex justify-center col-start-1 md:col-start-3 -col-end-1 md:col-end-11"
                >
                    and Graphic Designer
                </HeroSpan>
                <HeroSpan
                    delay={getDelay(baseDelay, indexAnimation++)}
                    className="flex justify-end col-start-5 col-end-13 md:col-start-6 md:col-end-11"
                >
                    from Indonesia
                </HeroSpan>
                <HeroSpan
                    delay={getDelay(baseDelay, indexAnimation++)}
                    className="flex justify-start col-start-1 col-end-12 md:col-start-3"
                >
                    based in Bengkulu
                </HeroSpan>
            </section>
        </main>
    );
}

import {
    AnimationProps,
    cubicBezier,
    motion,
    useAnimation,
    Variants,
} from "framer-motion";
import React, { useEffect } from "react";

// i mean italic
import { ReactComponent as LogoLetterA } from "@/assets/svg/Logo/Logo-A-1.svg";
import { ReactComponent as LogoLetterR } from "@/assets/svg/Logo/Logo-r-1.svg";
import { ReactComponent as LogoLetterI } from "@/assets/svg/Logo/Logo-i-1.svg";
import { ReactComponent as LogoLetterE } from "@/assets/svg/Logo/Logo-e-1.svg";
import { ReactComponent as LogoLetterF } from "@/assets/svg/Logo/Logo-f-1.svg";
import { ReactComponent as LogoLetterSi } from "@/assets/svg/Logo/Logo-S-2.svg";
import { ReactComponent as LogoLetterAi } from "@/assets/svg/Logo/Logo-a-2.svg";
import { ReactComponent as LogoLetterTi } from "@/assets/svg/Logo/Logo-t-2.svg";
import { ReactComponent as LogoLetterRi } from "@/assets/svg/Logo/Logo-r-2.svg";
import { ReactComponent as LogoLetterIi } from "@/assets/svg/Logo/Logo-i-2.svg";
import { ReactComponent as LogoLetterOi } from "@/assets/svg/Logo/Logo-o-2.svg";
import { time } from "console";
import { useAnimationStore } from "@/providers/IntroProvider";

export function LogoAnimation({ fill }: { fill: string }): React.ReactElement {
    const { hasPlayed, setHasPlayed } = useAnimationStore((state) => state);

    const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);
    const controls = useAnimation();

    const letterVariants: Variants = {
        hidden: { y: "var(--y-from, 1.6rem)", height: "var(--y-from, 1.6rem)" }, // Initial state
        visible: (i: number) => ({
            y: 0,
            transition: {
                delay: i * 0.05, // Delay animation per letter
                duration: 1,
                ease: easing,
            },
        }),
        open: (i: number) => ({
            y: 0,
            height: "var(--y-to, 1.2rem)",
            transition: {
                delay: i * 0.05, // Delay animation per letter
                duration: 1,
                ease: easing,
            },
        }),
    };

    useEffect(() => {
        if (!hasPlayed) {
            // Start the visible animation
            controls.start("visible").then(() => {
                // After the visible animation completes, trigger the open animation
                const timer = setTimeout(() => {
                    controls.mount();
                    controls.start("open");
                }, 1000); // Adjust this timeout according to your animation timing
                return () => {
                    if (timer) clearTimeout(timer);
                };
            });
        }
    }, [controls]);

    return (
        <div className="flex overflow-hidden mt-5 md:mt-10 w-11/12 ms-auto">
            <div className="flex">
                {[
                    <LogoLetterA fill={`${fill}`} height={"100%"} />,
                    <LogoLetterR fill={`${fill}`} height={"100%"} />,
                    <LogoLetterI fill={`${fill}`} height={"100%"} />,
                    <LogoLetterE fill={`${fill}`} height={"100%"} />,
                    <LogoLetterF fill={`${fill}`} height={"100%"} />,
                    <LogoLetterSi fill={`${fill}`} height={"100%"} />,
                    <LogoLetterAi fill={`${fill}`} height={"100%"} />,
                    <LogoLetterTi fill={`${fill}`} height={"100%"} />,
                    <LogoLetterRi fill={`${fill}`} height={"100%"} />,
                    <LogoLetterIi fill={`${fill}`} height={"100%"} />,
                    <LogoLetterOi fill={`${fill}`} height={"100%"} />,
                ].map((letter, index) => {
                    return (
                        <motion.div
                            custom={index}
                            key={"logoletter-" + index}
                            initial={hasPlayed ? "open" : "hidden"}
                            animate={controls}
                            variants={letterVariants}
                            className="md:[--y-from:2.6rem] md:[--y-to:1.8rem]"
                        >
                            {letter}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

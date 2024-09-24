import { useIntroStore } from "@/providers/IntroProvider";
import React from "react";
import { aboutEase } from "./animation";
import { getDelay } from "@/util/getDelay";
import AnimatedHeroText from "../../AnimatedHeroText";
import { fontDisplay } from "@/font";
import { motion } from "framer-motion";
import imagePosterAnd from "@/assets/images/and-poster.jpg";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";

export default function Hero(): React.ReactElement {
    const { isHasPlayed } = useIntroStore();

    const baseDelay = isHasPlayed ? 0 : 3.9;
    let indexAnimation = 0;

    return (
        <section
            className={`${fontDisplay.className} leading-tight md:leading-none hero p-5 md:p-10 text-[8.765vw] md:text-[5.42vw]`}
        >
            <div className="grid grid-cols-6 md:grid-cols-12 gap-y-2 md:gap-x-10 md:gap-y-5">
                <AnimatedText
                    className="col-span-6 flex md:hidden items-end underline text-end"
                    delay={baseDelay}
                >
                    Arief Satrio is a
                </AnimatedText>
                <div className="col-span-6 md:col-span-12">
                    <AnimatedHeroText
                        delay={getDelay(baseDelay, indexAnimation++)}
                        type="italic"
                    >
                        Passionate
                    </AnimatedHeroText>
                    <AnimatedHeroText
                        delay={getDelay(baseDelay, indexAnimation++)}
                        type="bold"
                    >
                        Fullstack Developer
                    </AnimatedHeroText>
                </div>
                <AnimatedText
                    className="hidden md:flex col-span-6 text-base"
                    delay={baseDelay}
                    duration={2.3}
                >
                    Arief Satrio is a ⤴
                </AnimatedText>
                <div className="col-span-6">
                    <div className="flex flex-col md:flex-row gap-2 md:mb-2">
                        <motion.div
                            initial={{ clipPath: "inset(50% 50% 50% 50%)" }}
                            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                            transition={{
                                delay: baseDelay,
                                duration: 1.5,
                                ease: aboutEase,
                            }}
                        >
                            <Image
                                className="w-auto md:h-[10.84vw] border-2 border-black"
                                src={imagePosterAnd}
                                alt="and-poster"
                                priority={true}
                            />
                        </motion.div>
                        <div className="flex md:block gap-2">
                            <AnimatedHeroText
                                delay={getDelay(baseDelay, indexAnimation++)}
                                type="bold"
                            >
                                Graphic
                            </AnimatedHeroText>
                            <AnimatedHeroText
                                delay={getDelay(baseDelay, indexAnimation++)}
                                type="bold"
                            >
                                Designer
                            </AnimatedHeroText>
                        </div>
                    </div>
                    <AnimatedHeroText
                        delay={getDelay(baseDelay, indexAnimation++)}
                        type="italic"
                    >
                        from Indonesia
                    </AnimatedHeroText>
                    <AnimatedHeroText
                        delay={getDelay(baseDelay, indexAnimation++)}
                        type="italic"
                    >
                        based in Bengkulu
                    </AnimatedHeroText>
                </div>
            </div>
        </section>
    );
}

import { useIntroStore } from "@/providers/IntroProvider";
import React from "react";
import { getDelay } from "./animation";
import AnimatedHeroText from "./AnimatedHeroText";

export default function Hero(): React.ReactElement {
    const { isHasPlayed } = useIntroStore((state) => state);

    const baseDelay = isHasPlayed ? 0 : 3;
    let indexAnimation = 0;

    return (
        <section className="hero p-5 md:p-10 text-[8.765vw] md:text-[5.55vw]">
            <div className="grid grid-cols-12">
                <AnimatedHeroText
                    delay={getDelay(baseDelay, indexAnimation++)}
                    className="flex justify-end col-start-5 col-end-13 md:col-start-7 md:col-end-12 lg:col-start-6 lg:col-end-11"
                >
                    Arief Satrio is a
                </AnimatedHeroText>
                <AnimatedHeroText
                    delay={getDelay(baseDelay, indexAnimation++)}
                    className="flex justify-start col-start-1 col-end-12 md:col-start-2 lg:col-start-3"
                >
                    Fullstack Developer
                </AnimatedHeroText>
                <AnimatedHeroText
                    delay={getDelay(baseDelay, indexAnimation++)}
                    className="flex justify-start col-start-1 md:col-start-3 lg:col-start-4 -col-end-1 md:col-end-11"
                >
                    and Graphic Designer
                </AnimatedHeroText>
                <AnimatedHeroText
                    delay={getDelay(baseDelay, indexAnimation++)}
                    className="flex justify-end col-start-5 col-end-13 md:col-start-7 md:col-end-12 lg:col-start-6 lg:col-end-11"
                >
                    from Indonesia
                </AnimatedHeroText>
                <AnimatedHeroText
                    delay={getDelay(baseDelay, indexAnimation++)}
                    className="flex justify-start col-start-1 col-end-12 md:col-start-2 lg:col-start-3"
                >
                    based in Bengkulu
                </AnimatedHeroText>
            </div>
        </section>
    );
}

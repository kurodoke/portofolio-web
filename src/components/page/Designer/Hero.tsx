import AnimatedHeroText from "@/components/AnimatedHeroText";
import { fontDisplay, fontDisplayItalic, fontText } from "@/font";
import React from "react";
import { useIntroStore } from "@/providers/IntroProvider";
import { getDelay } from "@/util/getDelay";
import AnimatedText from "@/components/AnimatedText";

export default function Hero(): React.ReactElement {
    const { isHasPlayed } = useIntroStore();

    const baseDelay = isHasPlayed ? 0 : 3.9;
    let indexAnimation = 0;

    return (
        <section
            className={`${fontDisplay.className} leading-tight md:leading-none hero p-5 md:p-10 text-[12.765vw] md:text-7xl lg:text-8xl`}
        >
            <div className="title flex flex-col">
                <AnimatedHeroText
                    delay={getDelay(baseDelay, indexAnimation++)}
                    type="bold"
                >
                    Designer Work
                </AnimatedHeroText>
                <AnimatedHeroText
                    delay={getDelay(baseDelay, indexAnimation++)}
                    type="italic"
                >
                    collections
                </AnimatedHeroText>
            </div>
            <AnimatedText className="text-base" delay={baseDelay}>
                personal and commission work collected over the past years
            </AnimatedText>
        </section>
    );
}

import { DeveloperProjectInterface } from "@/app/api/projects/project";
import AnimatedHeroText from "@/components/AnimatedHeroText";
import AnimatedText from "@/components/AnimatedText";
import { fontDisplay } from "@/font";
import { useIntroStore } from "@/providers/IntroProvider";
import { getDelay } from "@/util/getDelay";
import React from "react";

export default function Hero({
    data,
}: {
    data: DeveloperProjectInterface;
}): React.ReactElement {
    const { isHasPlayed } = useIntroStore();

    const baseDelay = isHasPlayed ? 0 : 3.9;
    let indexAnimation = 0;

    return (
        <section className="p-5 md:p-10 grid grid-cols-6 md:grid-cols-12 md:gap-x-10 gap-y-2 md:gap-y-5">
            <AnimatedHeroText
                delay={getDelay(baseDelay, indexAnimation++)}
                type="bold"
                className={`${fontDisplay.className} col-span-6 md:col-start-2 md:col-span-10 text-5xl md:text-7xl leading-none`}
            >
                {data.title}
            </AnimatedHeroText>

            <AnimatedText
                delay={getDelay(baseDelay, indexAnimation++)}
                type="standard"
                className="col-span-6 md:col-start-2 text-base md:text-xl leading-none"
            >
                {data.subtitle}
            </AnimatedText>
        </section>
    );
}

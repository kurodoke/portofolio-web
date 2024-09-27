import AnimatedHeroText from "@/components/AnimatedHeroText";
import AnimatedText from "@/components/AnimatedText";
import { useIntroStore } from "@/providers/IntroProvider";
import { getDelay } from "@/util/getDelay";
import React from "react";

export default function Hero(): React.ReactElement {
    const { isHasPlayed } = useIntroStore();

    const baseDelay = isHasPlayed ? 0 : 3.9;
    let indexAnimation = 0;

    return (
        <section className="p-5 md:p-10">
            <div className="grid grid-cols-6 md:grid-cols-12 md:gap-x-10 gap-y-2 md:gap-y-5">
                <AnimatedText
                    type="bold"
                    className="col-span-6 md:col-span-3"
                    delay={getDelay(baseDelay, indexAnimation++)}
                >
                    [The Synthesis]
                </AnimatedText>
                <div className="col-span-6 md:col-span-9 text-[9.832vw] md:text-[4.252vw] leading-none flex flex-col gap-1 md:gap-2">
                    <AnimatedHeroText
                        type="bold"
                        className=""
                        delay={getDelay(baseDelay, indexAnimation++)}
                    >
                        As a Synthesizer of Technology,
                    </AnimatedHeroText>
                    <div className="flex gap-x-2 flex-wrap md:flex-nowrap">
                        {" "}
                        <AnimatedHeroText
                            type="bold"
                            className=""
                            delay={getDelay(baseDelay, indexAnimation++)}
                        >
                            Arief Blends
                        </AnimatedHeroText>{" "}
                        <AnimatedHeroText
                            type="italic"
                            className=""
                            delay={getDelay(baseDelay, indexAnimation++)}
                        >
                            creativity
                        </AnimatedHeroText>{" "}
                        <AnimatedHeroText
                            type="bold"
                            className=""
                            delay={getDelay(baseDelay, indexAnimation++)}
                        >
                            with
                        </AnimatedHeroText>{" "}
                        <AnimatedHeroText
                            type="italic"
                            className=""
                            delay={getDelay(baseDelay, indexAnimation++)}
                        >
                            logic
                        </AnimatedHeroText>
                    </div>
                    <AnimatedHeroText
                        type="bold"
                        className=""
                        delay={getDelay(baseDelay, indexAnimation++)}
                    >
                        Across a Portfolio of Projects.
                    </AnimatedHeroText>{" "}
                </div>
            </div>
        </section>
    );
}

import { DeveloperProjectInterface } from "@/app/api/projects/project";
import AnimatedText from "@/components/AnimatedText";
import { useIntroStore } from "@/providers/IntroProvider";
import { getDelay } from "@/util/getDelay";
import React from "react";

export default function Detail({
    data,
}: {
    data: DeveloperProjectInterface;
}): React.ReactElement {
    const { isHasPlayed } = useIntroStore();

    const baseDelay = isHasPlayed ? 0 : 3.9;
    let indexAnimation = 0;

    return (
        <section className="p-5 md:p-10 md:!pt-0 grid grid-cols-6 md:grid-cols-12 md:gap-x-10 gap-y-10 md:gap-y-5 text-base">
            <div className="col-span-6 md:col-start-2 flex flex-col gap-2">
                <AnimatedText
                    delay={getDelay(baseDelay, indexAnimation++)}
                    type="standard"
                    className="text-sm opacity-80"
                >
                    [Project Info]
                </AnimatedText>
                <div className="mt-2 md:mt-5 flex flex-col gap-2">
                    <AnimatedText
                        delay={getDelay(baseDelay, indexAnimation++)}
                        type="standard"
                    >
                        {data.description}
                    </AnimatedText>
                    <AnimatedText
                        delay={getDelay(baseDelay, indexAnimation++)}
                        type="standard"
                    >
                        {data.role}
                    </AnimatedText>
                    {data.public && (
                        <AnimatedText
                            type="standard"
                            delay={getDelay(baseDelay, indexAnimation)}
                        >
                            This project has been publicly deployed.{" "}
                            <a
                                target="_blank"
                                href={data.public}
                                rel="noopener noreferrer"
                            >
                                <span className="underline text-base">
                                    click here.
                                </span>
                            </a>
                        </AnimatedText>
                    )}
                </div>
            </div>

            {data.tech && (
                <div className="col-span-6 md:col-span-4">
                    <AnimatedText
                        delay={getDelay(baseDelay, indexAnimation++)}
                        type="standard"
                        className="text-sm"
                    >
                        Tech Used
                    </AnimatedText>
                    <div className="mt-2 md:mt-5">
                        <ul>
                            {data.tech.map((item, index) => {
                                return (
                                    <li key={"data-item" + index}>
                                        <AnimatedText
                                            delay={getDelay(
                                                baseDelay,
                                                indexAnimation++
                                            )}
                                            type="standard"
                                            className="text-sm underline"
                                        >
                                            {item}
                                        </AnimatedText>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}

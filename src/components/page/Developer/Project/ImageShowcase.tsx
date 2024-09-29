import { DeveloperProjectInterface } from "@/app/api/projects/project";
import useStorage from "@/app/hooks/useStorage";
import AnimatedHeroText from "@/components/AnimatedHeroText";
import AnimatedImage from "@/components/AnimatedImage";
import { useIntroStore } from "@/providers/IntroProvider";
import { getDelay } from "@/util/getDelay";
import React, { useState } from "react";

export default function ImageShowcase({
    data,
}: {
    data: DeveloperProjectInterface;
}): React.ReactElement {
    const { isHasPlayed } = useIntroStore();
    const [isShow, setIsShow] = useState<boolean>(false);

    const baseDelay = isHasPlayed ? 0 : 3.9;
    let indexAnimation = 0;

    const storage = useStorage() + "image/";

    if (isShow) {
        if (!data.image) {
            return (
                <section className="p-5 md:p-10 md:!pt-0 text-base">
                    This project does not showcase any images.
                </section>
            );
        }
        return (
            <section className="p-5 md:p-10 mb-5 md:mb-10 text-base bg-custom-purple border-y-2 border-black">
                <div className="grid grid-cols-6 md:grid-cols-12 md:gap-x-10 gap-y-2 md:gap-y-5">
                    <AnimatedHeroText
                        type="bold"
                        delay={getDelay(baseDelay, indexAnimation++)}
                        className="col-span-6 md:col-span-10 md:col-start-2 text-2xl md:text-4xl"
                    >
                        Project Showcase
                    </AnimatedHeroText>
                    <ul className="grid grid-cols-6 md:grid-cols-10 col-span-6 md:col-span-10 md:col-start-2 md:gap-x-5 gap-y-5 md:gap-y-5">
                        {data.image.map((item, index) => {
                            return (
                                <li
                                    className={`${
                                        index == 0
                                            ? "md:col-span-10"
                                            : "md:col-span-5"
                                    } col-span-6`}
                                    key={"image-" + data.id}
                                >
                                    <AnimatedImage
                                        key={data.title + "-" + item}
                                        delay={getDelay(
                                            baseDelay,
                                            indexAnimation++
                                        )}
                                        src={storage + item}
                                        alt={data.title + "-" + item}
                                        width={2480}
                                        height={3508}
                                        loading="eager"
                                        className="w-full h-auto"
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        );
    }
    return (
        <section className="p-5 md:p-10 md:!py-0 text-base text-center">
            <button
                onClick={() => {
                    setIsShow(true);
                }}
                className="underline"
            >
                (See Project Showcase)
            </button>
        </section>
    );
}

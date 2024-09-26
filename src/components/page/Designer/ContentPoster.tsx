import useStorage from "@/app/hooks/useStorage";
import AnimatedImage from "@/components/AnimatedImage";
import { useIntroStore } from "@/providers/IntroProvider";
import { getDelay } from "@/util/getDelay";
import React from "react";
import { posterItems } from "./posterItems";

export default function ContentPoster(): React.ReactElement {
    const storage = useStorage() + "image/";
    const { isHasPlayed } = useIntroStore();

    const baseDelay = isHasPlayed ? 0 : 3.9;
    let indexAnimation = 0;

    return (
        <section className="p-5 md:p-10 !pt-0">
            <ul className="grid grid-cols-6 md:grid-cols-12 gap-x-5 gap-y-5 md:gap-y-10 md:gap-x-10">
                {posterItems.map((image, index) => {
                    return (
                        <li
                            className="col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-4"
                            key={image + "-" + index}
                        >
                            <h5 className="text-xl">{image.name}</h5>
                            <AnimatedImage
                                src={storage + image.file}
                                alt={image.name}
                                loading="eager"
                                width={2480}
                                height={3508}
                                delay={getDelay(baseDelay, indexAnimation)}
                            ></AnimatedImage>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

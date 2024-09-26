import useStorage from "@/app/hooks/useStorage";
import AnimatedImage from "@/components/AnimatedImage";
import { useIntroStore } from "@/providers/IntroProvider";
import { getDelay } from "@/util/getDelay";
import React from "react";
import { posterItems } from "./posterItems";
import { AnimatePresence, motion } from "framer-motion";
import { rootEase } from "@/util/rootEase";
import { fontDisplay, fontDisplayItalic } from "@/font";
import AnimatedHeroText from "@/components/AnimatedHeroText";
import AnimatedText from "@/components/AnimatedText";

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
            <AnimatePresence>
                <div className="overflow-hidden m-5">
                    <AnimatedText
                        scroll={true}
                        type="italic"
                        duration={1.5}
                        className="justify-center text-lg md:text-xl leading-none"
                    >
                        You see the End...
                    </AnimatedText>
                </div>
            </AnimatePresence>
        </section>
    );
}

import React from "react";
import { mographItems } from "./mographItems";
import YouTubeEmbed from "./YoutubeEmbed";
import { useIntroStore } from "@/providers/IntroProvider";
import { getDelay } from "@/util/getDelay";
import EndContent from "./EndContent";

export default function ContentMoGraph(): React.ReactElement {
    const { isHasPlayed } = useIntroStore();

    const baseDelay = isHasPlayed ? 0 : 3.9;
    let indexAnimation = 0;

    return (
        <section className="p-5 md:p-10 !pt-0">
            <ul className="grid grid-cols-6 md:grid-cols-12 gap-x-5 gap-y-5 md:gap-y-10 md:gap-x-10">
                {mographItems.map((item, index) => {
                    return (
                        <li
                            className="col-span-6 md:col-span-6"
                            key={item + "-" + index}
                        >
                            <YouTubeEmbed
                                delay={getDelay(baseDelay, indexAnimation++)}
                                src={item}
                            />
                        </li>
                    );
                })}
            </ul>
            <EndContent />
        </section>
    );
}

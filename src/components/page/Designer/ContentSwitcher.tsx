import AnimatedText from "@/components/AnimatedText";
import { fontDisplay } from "@/font";
import { useIntroStore } from "@/providers/IntroProvider";
import { getDelay } from "@/util/getDelay";
import React, { SetStateAction } from "react";

export type ContentSwitcherState = "poster" | "mv" | "mograph";

export default function ContentSwitcher({
    state,
    setState,
}: {
    state: ContentSwitcherState;
    setState: React.Dispatch<SetStateAction<ContentSwitcherState>>;
}): React.ReactElement {
    const { isHasPlayed } = useIntroStore();

    const baseDelay = isHasPlayed ? 0 : 3.9;
    let indexAnimation = 0;

    return (
        <section className="p-5 md:p-10 !pt-0">
            <div className="flex gap-5">
                <AnimatedText
                    type="standard"
                    delay={getDelay(baseDelay, indexAnimation, 0.2)}
                >
                    <button
                        className={`${
                            state === "poster" ? "is-active" : ""
                        } animated-underline relative leading-none`}
                        onClick={() => {
                            setState("poster");
                        }}
                    >
                        Poster
                    </button>
                </AnimatedText>

                <AnimatedText
                    type="standard"
                    delay={getDelay(baseDelay, indexAnimation, 0.2)}
                >
                    <button
                        className={`${
                            state === "mv" ? "is-active" : ""
                        } animated-underline relative leading-none`}
                        onClick={() => {
                            setState("mv");
                        }}
                    >
                        Music Video
                    </button>
                </AnimatedText>

                <AnimatedText
                    type="standard"
                    delay={getDelay(baseDelay, indexAnimation, 0.2)}
                >
                    <button
                        className={`${
                            state === "mograph" ? "is-active" : ""
                        } animated-underline relative leading-none`}
                        onClick={() => {
                            setState("mograph");
                        }}
                    >
                        Motion Graphic
                    </button>
                </AnimatedText>
            </div>
        </section>
    );
}

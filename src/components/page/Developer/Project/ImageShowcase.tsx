import { DeveloperProjectInterface } from "@/app/api/projects/project";
import useStorage from "@/app/hooks/useStorage";
import AnimatedHeroText from "@/components/AnimatedHeroText";
import AnimatedImage from "@/components/AnimatedImage";
import { useIntroStore } from "@/providers/IntroProvider";
import { getDelay } from "@/util/getDelay";
import { rootEase } from "@/util/rootEase";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function ImageShowcase({
    data,
}: {
    data: DeveloperProjectInterface;
}): React.ReactElement {
    const { isHasPlayed } = useIntroStore();
    const [isShow, setIsShow] = useState<boolean>(false);

    const [fullScreen, setFullscreen] = useState<string>();

    const baseDelay = isHasPlayed ? 0 : 3.9;
    let indexAnimation = 0;

    const storage = useStorage('project');

    if (isShow) {
        if (!data.image) {
            return (
                <section className="p-5 md:p-10 md:!py-0 text-base grid grid-cols-6 md:grid-cols-12 md:gap-x-10 gap-y-2 md:gap-y-5">
                    <AnimatedHeroText
                        type="bold"
                        delay={getDelay(baseDelay, indexAnimation++)}
                        className="col-span-6 md:col-span-10 md:col-start-2 text-base text-center"
                    >
                        This project does not showcase any images.
                    </AnimatedHeroText>
                </section>
            );
        }
        return (
            <section className="p-5 md:p-10 mb-5 md:mb-10 text-base bg-custom-purple border-y-2 border-black">
                <AnimatePresence>
                    {fullScreen && (
                        <motion.div
                            className="hidden md:block fixed inset-0 w-full h-screen bg-[rgba(0,0,0,0.7)] z-[10010] cursor-pointer"
                            onClick={() => {
                                setFullscreen(undefined);
                            }}
                            initial={{
                                opacity: "rgba(0,0,0,0)",
                            }}
                            animate={{
                                backgroundColor: "rgba(0,0,0,0.7)",
                            }}
                            exit={{
                                backgroundColor: "rgba(0,0,0,0)",
                                transition: { duration: 0.4, ease: rootEase },
                            }}
                            transition={{ duration: 1, ease: rootEase }}
                        >
                            <motion.div
                                className="h-full flex justify-center items-center"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {
                                        duration: 0.4,
                                        ease: rootEase,
                                    },
                                }}
                                transition={{ duration: 1, ease: rootEase }}
                            >
                                <Image
                                    width={2480}
                                    height={3508}
                                    src={storage + fullScreen}
                                    alt="fullscreen-image"
                                    className="h-full w-auto p-5"
                                ></Image>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="grid grid-cols-6 md:grid-cols-12 md:gap-x-10 gap-y-2 md:gap-y-5">
                    <AnimatedHeroText
                        type="bold"
                        delay={getDelay(baseDelay, indexAnimation++)}
                        className="col-span-6 md:col-span-10 md:col-start-2 text-2xl md:text-4xl"
                    >
                        Project Showcase
                    </AnimatedHeroText>
                    <div className="col-span-6 md:col-span-10 md:col-start-2 md:gap-x-5 gap-y-5 md:gap-y-5">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 1: 1, 768: 2 }}
                        >
                            <Masonry gutter="1.25rem">
                                {data.image.map((item, index) => {
                                    return (
                                        <div
                                            key={
                                                "image-" + data.id + "-" + index
                                            }
                                            className="md:cursor-pointer"
                                            onClick={() => {
                                                if (
                                                    window.matchMedia(
                                                        "(min-width: 768px)"
                                                    ).matches
                                                ) {
                                                    setFullscreen(item.file);
                                                }
                                            }}
                                        >
                                            <AnimatedImage
                                                key={
                                                    data.title + "-" + item.file
                                                }
                                                delay={getDelay(
                                                    baseDelay,
                                                    indexAnimation++
                                                )}
                                                src={storage + item.file}
                                                alt={
                                                    data.title + "-" + item.file
                                                }
                                                width={2480}
                                                height={3508}
                                                loading="eager"
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    );
                                })}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
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

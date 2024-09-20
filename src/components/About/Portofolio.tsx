import { fontDisplay } from "@/font";
import Image from "next/image";
import React, { useState } from "react";

import imagePosterCoffeeAddict from "@/assets/images/coffee-addict.jpg";
import imagePosterVisuallyBright from "@/assets/images/visually-bright.jpg";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedPortofolioFigure from "./AnimatedPortofolioFigure";
import AnimatedPortofolioButton from "./AnimatedPortofolioButton";
import { aboutEase } from "./animation";
import AnimatedPortofolioText from "./AnimatedPortofolioText";
import Link from "next/link";

type SelectedPortofolio = "fullstack" | "designer";

export default function Portofolio(): React.ReactElement {
    const [selectedPortofolio, setSelectedPortofolio] =
        useState<SelectedPortofolio>("fullstack");

    return (
        <section className="p-5 md:p-10">
            <div className="grid grid-cols-6 gap-y-5 md:gap-x-10 md:grid-cols-12 text-base md:text-xl">
                <div className="col-span-6 md:col-span-12 text-2xl md:text-xl">
                    .0B
                </div>
                <div className="col-span-6 flex flex-col justify-between">
                    <div className="flex flex-col gap-2 text-xl">
                        <h5>See his Portofolio</h5>
                        <ul
                            className={`text-6xl md:text-[5.436vw] leading-none ${fontDisplay.className} flex flex-col gap-2 lg:gap-5`}
                        >
                            <li>
                                <AnimatedPortofolioButton
                                    onClick={() => {
                                        if (selectedPortofolio !== "fullstack")
                                            setSelectedPortofolio("fullstack");
                                    }}
                                >
                                    <h1 className="flex">
                                        Fullstack
                                        <div className="ms-4 text-2xl">.01</div>
                                    </h1>
                                    <h1>Developer</h1>
                                </AnimatedPortofolioButton>
                            </li>
                            <li>
                                <AnimatedPortofolioButton
                                    onClick={() => {
                                        if (selectedPortofolio !== "designer")
                                            setSelectedPortofolio("designer");
                                    }}
                                >
                                    <h1 className="flex">
                                        Graphic
                                        <div className="ms-4 text-2xl">.02</div>
                                    </h1>
                                    <h1>Designer</h1>
                                </AnimatedPortofolioButton>
                            </li>
                        </ul>
                    </div>
                    <div className="md:grid hidden justify-self-end overflow-hidden grid-cols-6 gap-x-10">
                        {selectedPortofolio == "fullstack" ? (
                            <AnimatedPortofolioText
                                _key="text-fullstack"
                                className="col-span-6 lg:col-span-4"
                            >
                                The excellence of coffee is that it fuels Arief
                                to build amazing projects as a full-stack
                                developer. It drastically drives his creativity.{" "}
                                <Link href={"/developer"} className="underline">
                                    See his project here
                                </Link>
                            </AnimatedPortofolioText>
                        ) : (
                            <AnimatedPortofolioText
                                _key="text-designer"
                                className="col-span-6 lg:col-span-4"
                            >
                                Visual confusion is part of Arief's process as a
                                graphic designer. It happens when he's designing
                                something, but he tackles it and turns it into
                                an interesting design.{" "}
                                <Link href={"/designer"} className="underline">
                                    See his design here
                                </Link>
                            </AnimatedPortofolioText>
                        )}
                    </div>
                </div>
                <div className="col-span-6 border-2 border-black relative overflow-hidden">
                    {selectedPortofolio == "fullstack" ? (
                        <AnimatedPortofolioFigure _key="poster-coffee-addict">
                            <Image
                                priority={true}
                                src={imagePosterCoffeeAddict}
                                alt="poster-coffee-addict"
                            />
                        </AnimatedPortofolioFigure>
                    ) : (
                        <AnimatedPortofolioFigure _key="poster-visually-bright">
                            <Image
                                priority={true}
                                src={imagePosterVisuallyBright}
                                alt="poster-visually-bright"
                            />
                        </AnimatedPortofolioFigure>
                    )}
                </div>
                <div className="col-span-6">
                    <div className="grid md:hidden overflow-hidden grid-cols-6 gap-y-5">
                        {selectedPortofolio == "fullstack" ? (
                            <AnimatedPortofolioText
                                _key="text-fullstack"
                                className="col-span-6 lg:col-span-4"
                            >
                                The excellence of coffee is that it fuels Arief
                                to build amazing projects as a full-stack
                                developer. It drastically drives his creativity.{" "}
                                <Link href={"/developer"} className="underline">
                                    See his project here
                                </Link>
                            </AnimatedPortofolioText>
                        ) : (
                            <AnimatedPortofolioText
                                _key="text-designer"
                                className="col-span-6 lg:col-span-4"
                            >
                                Visual confusion is part of Arief's process as a
                                graphic designer. It happens when he's designing
                                something, but he tackles it and turns it into
                                an interesting design.{" "}
                                <Link href={"/designer"} className="underline">
                                    See his design here
                                </Link>
                            </AnimatedPortofolioText>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

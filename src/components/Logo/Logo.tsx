import { motion } from "framer-motion";
import { useIntroStore } from "@/providers/IntroProvider";
import Arief from "./Letter/Arief";
import Satrio from "./Letter/Satrio";
import { logoEase } from "./animation";

export default function Logo(): React.ReactElement {
    const { isHasPlayed, setIsHasPlayed } = useIntroStore((state) => state);

    return (
        <section className="w-[calc(100vw-var(--scrollbar-width))] fixed top-0 left-0 z-[9998]">
            <div className="relative w-full">
                <motion.div
                    className={`absolute flex items-end bg-custom-orange border border-y-2 w-full border-black origin-top overflow-hidden ${
                        isHasPlayed ? "hidden" : ""
                    }`}
                    initial={isHasPlayed ? "hidden" : "visible"}
                    whileInView={"hidden"}
                    variants={{
                        visible: {
                            height: "100vh",
                            y: "0",
                        },
                        hidden: {
                            y: "-1rem",
                            height: "0vh",
                        },
                    }}
                    transition={{
                        ease: logoEase,
                        delay: 2.6,
                        duration: 2.8,
                    }}
                    onAnimationComplete={() => {
                        setIsHasPlayed(true);
                    }}
                ></motion.div>
                <div className="relative w-[calc(100%-2.5rem)] md:w-full ">
                    <div
                        className={`absolute pointer-events-none cursor-none inset-5 ww-[calc(100%-2.5rem)] md:w-[calc(100%-5rem)] h-[calc(100vh-2.5rem)] md:h-[calc(100vh-5rem)] md:inset-10 origin-top-left  ${
                            isHasPlayed ? "!h-auto" : ""
                        }`}
                    >
                        <motion.div
                            className="flex flex-col"
                            initial={isHasPlayed ? "visible" : "hidden"}
                            whileInView={"visible"}
                            variants={{
                                hidden: { height: "100%", width: "100%" },
                                visible: {
                                    height: "2.5rem",
                                    width: "3.86rem",
                                },
                            }}
                            transition={{
                                ease: logoEase,
                                delay: 2.6,
                                duration: 1.4,
                            }}
                        >
                            <Arief className="" />
                            <Satrio className="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

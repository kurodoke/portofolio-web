import { motion } from "framer-motion";
import { useIntroStore } from "@/providers/IntroProvider";
import Arief from "./Letter/Arief";
import Satrio from "./Letter/Satrio";
import { logoAnimation } from "./animation";

export default function Logo(): React.ReactElement {
    const { isHasPlayed, setIsHasPlayed } = useIntroStore((state) => state);
    return (
        <section className="w-[calc(100vw-var(--scrollbar-width))] fixed top-0 left-0 z-[9998]">
            <div className="relative w-full">
                <motion.div
                    className="absolute flex items-end bg-custom-orange border border-y-2 w-full border-black origin-top overflow-hidden"
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
                        ease: logoAnimation,
                        delay: 2.6,
                        duration: 2.8,
                    }}
                    onAnimationComplete={setIsHasPlayed}
                ></motion.div>
                <div className="relative w-[calc(100%-2.5rem)] md:w-full left-5 top-5 md:left-10 md:top-10">
                    <motion.div
                        className="absolute pointer-events-none cursor-none origin-top-left w-full [--scale-to:0.15] md:[--scale-to:0.1]"
                        initial={isHasPlayed ? "visible" : "hidden"}
                        whileInView={"visible"}
                        variants={{
                            hidden: { scale: 1 },
                            visible: {
                                scale: "var(--scale-to)",
                            },
                        }}
                        transition={{
                            ease: logoAnimation,
                            delay: 2.6,
                            duration: 1.4,
                        }}
                    >
                        <div className="w-full">
                            <Arief className="w-[80.50%] md:w-[44.597701149%] h-auto" />
                            <Satrio className="w-full md:w-[55.402298851%] h-auto" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

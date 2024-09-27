import { rootEase } from "@/util/rootEase";
import { motion, useAnimation, Variants } from "framer-motion";
import React, { useEffect, useState } from "react";

const variants: Variants = {
    hidden: { clipPath: "inset(50% 50% 50% 50%)" },
    visible: { clipPath: "inset(0% 0% 0% 0%)" },
    exit: {
        clipPath: "inset(0% 0% 100% 0%)",
        transition: { duration: 0.7, ease: rootEase },
    },
};

export default function YouTubeEmbed({
    src,
    delay,
}: {
    src: string;
    delay: number;
}): React.ReactElement {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const controls = useAnimation();

    useEffect(() => {
        if (isLoaded) controls.start("visible");
    }, [isLoaded]);

    return (
        <>
            {!isLoaded && <p>Loading...</p>}
            <motion.div
                className="border-2 border-black relative overflow-hidden w-full pt-[56.25%]"
                initial={"hidden"}
                animate={controls}
                variants={variants}
                exit={"exit"}
                transition={{ delay: delay, ease: rootEase, duration: 1.3 }}
            >
                <iframe
                    className="inset-0 absolute w-full h-full"
                    src={src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    onLoad={() => {
                        setIsLoaded(true);
                    }}
                ></iframe>
            </motion.div>
        </>
    );
}

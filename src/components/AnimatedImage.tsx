import { rootEase } from "@/util/rootEase";
import { motion, useAnimation, Variants } from "framer-motion";
import Image, { ImageProps } from "next/image";
import React, { useEffect, useState } from "react";

const variants: Variants = {
    hidden: { clipPath: "inset(50% 50% 50% 50%)" },
    visible: { clipPath: "inset(0% 0% 0% 0%)" },
    exit: {
        clipPath: "inset(0% 0% 100% 0%)",
        transition: { duration: 0.7, ease: rootEase },
    },
};

export default function AnimatedImage({
    delay,
    ...props
}: { delay: number } & React.HTMLAttributes<HTMLImageElement> &
    ImageProps): React.ReactElement {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const controls = useAnimation();

    useEffect(() => {
        if (isLoaded) controls.start("visible");
    }, [isLoaded]);

    return (
        <motion.div
            className="border-2 border-black"
            initial={"hidden"}
            animate={controls}
            variants={variants}
            exit={"exit"}
            transition={{ delay: delay, ease: rootEase, duration: 1.3 }}
        >
            <Image {...props} onLoad={() => setIsLoaded(true)} />
        </motion.div>
    );
}

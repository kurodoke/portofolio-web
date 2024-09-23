import { motion, useAnimation } from "framer-motion";
import { logoTextVariant } from "./animation";
import { useEffect } from "react";
import { usePageStore } from "@/providers/pageProvider";

export default function AnimatedLogoLetter({
    children,
    index,
    id,
}: {
    children: React.ReactNode;
    index: number;
    id: string;
}): React.ReactElement {
    const controls = useAnimation();
    const { isChange } = usePageStore();

    useEffect(() => {
        if (isChange) controls.start("exit");
        else controls.start("visible");
    }, [isChange]);

    return (
        <motion.g
            id={id}
            custom={index}
            key={"logoletter-" + index}
            initial={"hidden"}
            animate={controls}
            variants={logoTextVariant}
            className={"translate-y-full"}
        >
            {children}
        </motion.g>
    );
}

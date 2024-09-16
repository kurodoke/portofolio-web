import { motion } from "framer-motion";
import { logoTextVariant } from "./animation";

export default function AnimatedLogoLetter({
    children,
    index,
    id,
}: {
    children: React.ReactNode;
    index: number;
    id: string;
}): React.ReactElement {
    return (
        <motion.g
            id={id}
            custom={index}
            key={"logoletter-" + index}
            initial={"hidden"}
            animate={"visible"}
            variants={logoTextVariant}
            className={"translate-y-full"}
        >
            {children}
        </motion.g>
    );
}

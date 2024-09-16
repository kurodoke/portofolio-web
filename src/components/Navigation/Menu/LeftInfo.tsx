import { motion } from "framer-motion";
import { navigationAnimation } from "../animation";

export default function LeftInfo({
    className,
    children,
    animate = true,
}: {
    className: string;
    children: string;
    animate?: boolean;
}) {
    const animationProps = animate
        ? {
              initial: { clipPath: "inset(0% 0% 0% 100%)", scale: 1.15 },
              animate: { clipPath: "inset(0% 0% 0% 0%)", scale: 1 },
              exit: { clipPath: "inset(0% 0% 0% 100%)", scale: 1.15 },
              transition: { duration: 1.3, ease: navigationAnimation },
          }
        : {};

    return (
        <motion.div
            className={`${className} flex items-center text-end justify-center text-2xl font-bold origin-center p-10`}
            {...animationProps}
        >
            <p className="w-full">{children}</p>
        </motion.div>
    );
}

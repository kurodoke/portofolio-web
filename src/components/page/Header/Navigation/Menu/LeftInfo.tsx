import { AnimationProps, motion } from "framer-motion";
import { navigationEase } from "../animation";

export default function LeftInfo({
    className,
    children,
    animate = true,
    _key,
}: {
    className: string;
    children: string;
    animate?: boolean;
    _key: string;
}) {
    const animationProps: AnimationProps = animate
        ? {
              initial: { clipPath: "inset(0% 0% 0% 100%)", scale: 1.15 },
              animate: { clipPath: "inset(0% 0% 0% 0%)", scale: 1 },
              exit: {
                  clipPath: "inset(0% 0% 0% 100%)",
                  scale: 1.15,
                  transition: { duration: 0.2 },
              },
              transition: { duration: 1, ease: navigationEase },
          }
        : {};

    return (
        <motion.div
            className={`${className} flex items-center text-end justify-center text-base origin-center p-10`}
            {...animationProps}
            key={_key}
        >
            <p className="w-full">{children}</p>
        </motion.div>
    );
}

import { useMobileSidebarStore } from "@/providers/mobileSidebarProvider";
import {
    cubicBezier,
    motion,
    useAnimate,
    useAnimation,
    Variants,
} from "framer-motion";
import React, { useEffect } from "react";

export function MobileSidebar(): React.ReactElement {
    const easing = cubicBezier(0.005, 0.88, 0.235, 0.985);
    const { isOpen, setIsOpen } = useMobileSidebarStore((state) => state);

    const variants: Variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 100,
            transition: { duration: 0.5, easings: easing },
        },
    };

    const controls = useAnimation();

    useEffect(() => {
        if (isOpen) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isOpen]);

    return (
        <motion.div
            initial={"hidden"}
            variants={variants}
            animate={controls}
            className="fixed w-screen h-screen bg-black"
        ></motion.div>
    );
}

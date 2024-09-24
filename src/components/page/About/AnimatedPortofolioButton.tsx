import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { aboutEase } from "./animation";

export default function AnimatedPortofolioButton({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}): React.ReactElement {
    const [isSelected, setIsSelected] = useState<boolean>(false);

    return (
        <button
            className="block text-start flex-grow"
            onClick={onClick}
            onMouseEnter={() => setIsSelected(true)}
            onMouseLeave={() => setIsSelected(false)}
        >
            {children}
            <div className="h-1 relative w-full">
                <AnimatePresence>
                    {isSelected && (
                        <motion.hr
                            className="h-1 bg-black absolute inset-0"
                            initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                            exit={{ clipPath: "inset(0% 0% 0% 100%)" }}
                            transition={{ duration: 1, ease: aboutEase }}
                        />
                    )}
                </AnimatePresence>
            </div>
        </button>
    );
}

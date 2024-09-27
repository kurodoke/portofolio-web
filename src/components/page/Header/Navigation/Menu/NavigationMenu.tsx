import { useNavigationStore } from "@/providers/navigationProvider";
import { AnimatePresence, motion } from "framer-motion";
import { navigationEase } from "../animation";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { usePageStore } from "@/providers/pageProvider";
import { useEffect } from "react";

export default function NavigationMenu(): React.ReactElement {
    const { isNavOpen, setIsNavOpen } = useNavigationStore();
    const { isChange } = usePageStore();

    useEffect(() => {
        if (!isChange) setIsNavOpen(false);
    }, [isChange]);

    return (
        <AnimatePresence>
            {isNavOpen && !isChange && (
                <motion.nav
                    className="absolute left-0 top-0 w-full h-screen bg-custom-dark-gray"
                    initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{
                        clipPath: "inset(0% 0% 0% 100%)",
                        transition: { duration: 0.5, ease: navigationEase },
                    }}
                    transition={{ duration: 1, ease: navigationEase }}
                >
                    <div className="h-full flex">
                        <LeftSide />
                        <RightSide />
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}

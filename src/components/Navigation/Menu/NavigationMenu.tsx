import { useNavigationStore } from "@/providers/navigationProvider";
import { AnimatePresence, motion } from "framer-motion";
import { navigationEase } from "../animation";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function NavigationMenu(): React.ReactElement {
    const { isNavOpen } = useNavigationStore();
    return (
        <AnimatePresence>
            {isNavOpen && (
                <motion.nav
                    className="absolute left-0 top-0 w-full h-screen bg-custom-dark-gray"
                    initial={{ clipPath: "inset(0% 0% 0% 100%)" }}
                    animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ clipPath: "inset(0% 0% 0% 100%)" }}
                    transition={{ duration: 0.8, ease: navigationEase }}
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

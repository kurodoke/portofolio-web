import { AnimatePresence } from "framer-motion";
import React from "react";
import { NavigationLinkInterface, navItems } from "../navItems";
import LeftInfo from "./LeftInfo";
import { useNavigationStore } from "@/providers/navigationProvider";
import { usePathname } from "next/navigation";

export default function LeftSide(): React.ReactElement {
    const { isHovered, whichItemHovered } = useNavigationStore();

    const currentPathname = usePathname();

    const selectedNav: NavigationLinkInterface = navItems.filter((item) => {
        return item.path === currentPathname;
    })[0];

    return (
        <div className="left-side relative flex-1 hidden md:block overflow-hidden">
            <AnimatePresence>
                {isHovered &&
                    whichItemHovered !== null &&
                    whichItemHovered !== selectedNav && (
                        <LeftInfo
                            className={`absolute w-full h-full ${whichItemHovered.color}`}
                            _key={whichItemHovered.name + "-left"}
                        >
                            {whichItemHovered.text}
                        </LeftInfo>
                    )}
            </AnimatePresence>
            <LeftInfo
                animate={false}
                className={`h-full ${
                    selectedNav ? selectedNav.color : "bg-custom-dark-gray"
                }`}
                _key={selectedNav ? selectedNav.name + "-left" : "unk-left"}
            >
                {selectedNav ? selectedNav.text : ""}
            </LeftInfo>
        </div>
    );
}

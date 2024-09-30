import { NavigationLinkInterface } from "@/components/page/Header/Navigation/navItems";
import { createStore } from "zustand";

export interface NavigationState {
    isHovered: boolean;
    isNavOpen: boolean;
    whichItemHovered: NavigationLinkInterface | null;
}

export interface NavigationActions {
    setIsHovered: (state: boolean) => void;
    setIsNavOpen: (state: boolean) => void;
    setWhichItemHovered: (state: NavigationLinkInterface | null) => void;
}

export type NavigationStore = NavigationState & NavigationActions;

const defaultInitState: NavigationState = {
    isHovered: false,
    isNavOpen: false,
    whichItemHovered: null,
};

export const createNavigationStore = (
    initState: NavigationState = defaultInitState
) => {
    return createStore<NavigationStore>()((set) => ({
        ...initState,
        setIsHovered: (state) => {
            set({ isHovered: state });
        },
        setIsNavOpen: (state) => {
            set({ isNavOpen: state });
        },
        setWhichItemHovered: (state) => {
            set({ whichItemHovered: state });
        },
    }));
};

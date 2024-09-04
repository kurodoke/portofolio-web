import { create, createStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Define the store
export interface MobileSidebar {
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
}

export const createMobileSidebar = (initState: boolean = false) => {
    return createStore<MobileSidebar>()((set) => ({
        isOpen: initState,
        setIsOpen: (state: boolean) => set({ isOpen: state }),
    }));
};

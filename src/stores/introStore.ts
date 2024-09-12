import { create, createStore } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

// Define the store
export interface IntroStore {
    isHasPlayed: boolean;
    setIsHasPlayed: () => void;
}

export const createIntroStore = (initState: boolean = false) => {
    return createStore<IntroStore>()(
        devtools(
            persist<IntroStore>(
                (set) => ({
                    isHasPlayed: initState,
                    setIsHasPlayed: () => set({ isHasPlayed: true }),
                }),
                {
                    name: "Intro-played", // Key for sessionStorage or localStorage
                    storage: createJSONStorage(() => sessionStorage), // Use sessionStorage
                }
            )
        )
    );
};

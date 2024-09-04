import { create, createStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Define the store
export interface AnimationStore {
    hasPlayed: boolean;
    setHasPlayed: () => void;
}

export const createAnimationStore = (initState: boolean = false) => {
    return createStore<AnimationStore>()(
        persist<AnimationStore>(
            (set) => ({
                hasPlayed: initState,
                setHasPlayed: () => set({ hasPlayed: true }),
            }),
            {
                name: "entry-animation-played", // Key for sessionStorage or localStorage
                storage: createJSONStorage(() => sessionStorage), // Use sessionStorage
            }
        )
    );
};

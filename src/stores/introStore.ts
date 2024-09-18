import { createStore } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

// Define the store
export interface IntroStore {
    isHasPlayed: boolean;
    setIsHasPlayed: (state: boolean) => void;
}

export const createIntroStore = () => {
    return createStore<IntroStore>()(
        devtools(
            persist<IntroStore>(
                (set) => ({
                    isHasPlayed: false,
                    setIsHasPlayed: (state) => set({ isHasPlayed: state }),
                }),
                {
                    name: "intro-played",
                    storage: createJSONStorage(() => sessionStorage),
                }
            )
        )
    );
};

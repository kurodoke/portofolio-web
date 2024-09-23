import { createStore } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface PageStore {
    isChange: boolean;
    pathPage: string;
    setIsChange: (state: boolean) => void;
    setPathPage: (state: string) => void;
}

export const createPageStore = (
    initialState: Omit<PageStore, "setIsChange" | "setPathPage"> = {
        isChange: false,
        pathPage: "/",
    }
) => {
    return createStore<PageStore>()(
        devtools(
            persist(
                (set) => ({
                    ...initialState,
                    setIsChange: (state: boolean) => set({ isChange: state }),
                    setPathPage: (state: string) => set({ pathPage: state }),
                }),
                {
                    name: "page-change",
                    storage: createJSONStorage(() => sessionStorage),
                }
            )
        )
    );
};

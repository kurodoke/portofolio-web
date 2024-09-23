"use client";

import React, {
    type ReactNode,
    createContext,
    useRef,
    useContext,
} from "react";
import { useStore } from "zustand";

import { IntroStore, createIntroStore } from "@/stores/introStore";

export type IntroStoreApi = ReturnType<typeof createIntroStore>;

export const IntroStoreContext = createContext<IntroStoreApi | undefined>(
    undefined
);

export interface IntroStoreProviderProps {
    children: ReactNode;
}

//provider element
export function IntroStoreProvider({ children }: IntroStoreProviderProps) {
    const storeRef = useRef<IntroStoreApi>();
    if (!storeRef.current) {
        storeRef.current = createIntroStore();
    }

    return (
        <IntroStoreContext.Provider value={storeRef.current}>
            {children}
        </IntroStoreContext.Provider>
    );
}

//hook store
export const useIntroStore = (): IntroStore => {
    const introStoreContext = useContext(IntroStoreContext);

    if (!introStoreContext) {
        throw new Error(`useIntroStore must be used within IntroStoreProvider`);
    }

    return useStore(introStoreContext, (state) => state);
};

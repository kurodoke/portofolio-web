"use client";

import {
    createNavigationStore,
    NavigationStore,
} from "@/stores/navigationStore";
import React, { createContext, ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";

type NavigationApi = ReturnType<typeof createNavigationStore>;

const NavigationContext = createContext<NavigationApi | undefined>(undefined);

export function NavigationProvider({
    children,
}: {
    children: ReactNode;
}): React.ReactElement {
    const storeRef = useRef<NavigationApi>();
    if (!storeRef.current) {
        storeRef.current = createNavigationStore();
    }

    return (
        <NavigationContext.Provider value={storeRef.current}>
            {children}
        </NavigationContext.Provider>
    );
}

export const useNavigationStore = (): NavigationStore => {
    const context = useContext(NavigationContext);

    if (!context)
        throw new Error(
            `useNavigationStore must be used within NavigationProvider`
        );

    return useStore(context, (store) => store);
};

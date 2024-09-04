"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
    MobileSidebar,
    createMobileSidebar,
} from "@/stores/mobileSidebarStore";

export type MobileSidebarApi = ReturnType<typeof createMobileSidebar>;

export const MobileSidebarContext = createContext<MobileSidebarApi | undefined>(
    undefined
);

export interface MobileSidebarProviderProps {
    children: ReactNode;
}

export const MobileSidebarProvider = ({
    children,
}: MobileSidebarProviderProps) => {
    const storeRef = useRef<MobileSidebarApi>();
    if (!storeRef.current) {
        storeRef.current = createMobileSidebar();
    }

    return (
        <MobileSidebarContext.Provider value={storeRef.current}>
            {children}
        </MobileSidebarContext.Provider>
    );
};

export const useMobileSidebarStore = <T,>(
    selector: (store: MobileSidebar) => T
): T => {
    const mobileSidebarContext = useContext(MobileSidebarContext);

    if (!mobileSidebarContext) {
        throw new Error(
            `useMobileSidebar must be used within MobileSidebarProvider`
        );
    }

    return useStore(mobileSidebarContext, selector);
};

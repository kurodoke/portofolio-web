import { createPageStore, PageStore } from "@/stores/pageStore";
import { Router } from "next/router";
import React, { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

type PageStoreApi = ReturnType<typeof createPageStore>;

const PageStoreContext = createContext<PageStoreApi | undefined>(undefined);

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
    const storeRef = useRef<PageStoreApi>();
    if (!storeRef.current) {
        storeRef.current = createPageStore();
    }

    return (
        <PageStoreContext.Provider value={storeRef.current}>
            {children}
        </PageStoreContext.Provider>
    );
};

export const usePageStore = (): PageStore => {
    const pageStoreContext = useContext(PageStoreContext);

    if (!pageStoreContext) {
        throw new Error(`usePage must be used within PageProvider`);
    }

    return useStore(pageStoreContext, (state) => state);
};

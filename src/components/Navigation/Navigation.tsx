import React from "react";
import { NavigationProvider } from "@/providers/navigationProvider";
import NavigationMenu from "./Menu/NavigationMenu";
import NavigationToggleButton from "./NavigationToggleButton";

export default function Navigation(): React.ReactElement {
    return (
        <header className="w-[calc(100vw-var(--scrollbar-width))] fixed text-lg z-[9999]">
            <NavigationProvider>
                <NavigationToggleButton />
                <NavigationMenu />
            </NavigationProvider>
        </header>
    );
}

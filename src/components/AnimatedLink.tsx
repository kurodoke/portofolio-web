import { usePageStore } from "@/providers/pageProvider";
import Link, { LinkProps } from "next/link";
import React from "react";

export function AnimatedLink({
    children,
    preventClick = false,
    ...prop
}: { children: React.ReactNode; preventClick?: boolean } & Omit<
    React.HTMLAttributes<HTMLAnchorElement> & LinkProps,
    "onClick"
>) {
    const { setIsChange, setPathPage } = usePageStore();

    const redirectHandler = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (preventClick) return;
        setIsChange(true);
        setPathPage(prop.href.toString());
    };

    return (
        <Link {...prop} onClick={redirectHandler}>
            {children}
        </Link>
    );
}

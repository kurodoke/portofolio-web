import React from "react";

export type SelectedPortofolioState = "fullstack" | "designer";

export default function AnimatedPortofolioButton({
    children,
    onClick,
    className = "",
}: {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
}): React.ReactElement {
    return (
        <button
            className={`block relative text-start flex-grow animated-underline ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

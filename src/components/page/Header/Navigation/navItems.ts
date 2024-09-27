export interface NavigationLinkInterface {
    name: string;
    path: string;
    color: string;
    text: string;
}

export const navItems: Array<NavigationLinkInterface> = [
    {
        name: "about",
        path: "/",
        color: "bg-custom-yellow",
        text: "Explore Arief Satrio's background.",
    },
    {
        name: `fullstack
        developer`,
        path: "/developer",
        color: "bg-custom-purple",
        text: "Arief builds and maintains full web solutions, from front to back end.",
    },
    {
        name: `graphic
        designer`,
        path: "/designer",
        color: "bg-custom-orange",
        text: "Arief creates engaging designs such as Poster, MV, and Motion Graphic.",
    },
];

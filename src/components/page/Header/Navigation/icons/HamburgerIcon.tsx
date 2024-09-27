export default function HamburgerIcon(): React.ReactElement<
    React.SVGProps<SVGSVGElement>
> {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 12"
            fill="none"
            height={".75rem"}
        >
            <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M0 1.25h26M0 6.25h26M0 11.25h26"
            ></path>
        </svg>
    );
}

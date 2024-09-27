import { useNavigationStore } from "@/providers/navigationProvider";
import HamburgerIcon from "./icons/HamburgerIcon";

export default function NavigationToggleButton(): React.ReactElement {
    const { setIsNavOpen } = useNavigationStore();
    return (
        <div className="absolute right-5 top-5 md:right-10 md:top-10">
            <button
                onClick={() => {
                    setIsNavOpen(true);
                }}
            >
                <HamburgerIcon />
            </button>
        </div>
    );
}

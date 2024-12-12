import graph from "../../assets/Graph .svg";
import donations from "../../assets/donations.svg";
import donor from "../../assets/donor.svg";
import collector from "../../assets/collector.svg";
import { Link, useMatch } from "react-router-dom";
import logo_natal from "../../assets/logo_natal.svg";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface PropsTitle {
    setOpenNavSide: React.Dispatch<React.SetStateAction<boolean>>
    setTitle: React.Dispatch<React.SetStateAction<string>>
    openNavSide: boolean
}

export default function NavSide(
    {
        setTitle,
        openNavSide,
        setOpenNavSide
    }: PropsTitle
) {
    const links = [
        {
            path: "/dashboard",
            label: "Dashboard",
            img: graph
        },
        {
            path: "/dashboard/arrecadadores",
            label: "Arrecadadores",
            img: collector
        },
        {
            path: "/dashboard/doadores",
            label: "Doadores",
            img: donor
        },
        {
            path: "/dashboard/doacoes",
            label: "Doações",
            img: donations
        }
    ];

    function isMobileWidth() {
        return window.innerWidth < 640
    }

    function handleNavBar(label:string, close: boolean) {
        setTitle(label);
        if(isMobileWidth()) {
            setOpenNavSide(close);
        }
    }

    return (
        <>
            {
                openNavSide && <nav className="absolute sm:relative p-[40px] bg-blueChristmas-100 max-w-[306px] w-full h-[100dvh] font-poppins font-semibold">
                    <div>
                        <div className="flex items-center text-[26px] mb-[50px]">
                            <XMarkIcon className="w-7 absolute right-1 cursor-pointer sm:hidden" onClick={() => setOpenNavSide(!openNavSide)} />
                            <img src={logo_natal} alt="logo_natal" />
                        </div>
                        <div>
                            <ul>
                                {
                                    links.map((link: any) => {
                                        const match = useMatch(link.path);

                                        return (
                                            <Link
                                                onClick={() => handleNavBar(link.label, !openNavSide)}
                                                to={link.path} key={link.path}
                                                className={`
                                                    flex gap-2 mb-[25px] cursor-pointer px-3 py-3  
                                                    ${match && "bg-whiteChristmas-100 rounded-xl w-full shadow-md"}
                                                `}
                                            >
                                                <img src={link.img} alt="icon" />
                                                {link.label}
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            }
        </>
    );
}

import graph from "../../assets/Graph .svg";
import donations from "../../assets/donations.svg";
import donor from "../../assets/donor.svg";
import collector from "../../assets/collector.svg";
import { Link, useMatch } from "react-router-dom";
import logo_natal from "../../assets/logo_natal.svg";

export default function NavSide() {

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

    return (
        <nav className="p-[40px] bg-blueChristmas-100 max-w-[306px] w-full h-[100dvh] font-poppins font-semibold">
            <div>
                <div className="flex items-center gap-2 text-[26px] mb-[50px]">
                    <img src={logo_natal} alt="logo_natal" />
                </div>
                <div>
                    <ul>
                        {
                            links.map((link: any) => {
                                const match = useMatch(link.path)
                                return (
                                    <Link to={link.path} key={link.path} className={`
                                        flex gap-2 mb-[25px] cursor-pointer px-3 py-3  ${match && "bg-whiteChristmas-100 rounded-xl w-full shadow-md"}
                                    `}>
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
    );
}
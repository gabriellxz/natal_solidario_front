import icon_dashboard from "../../assets/icon_dashboard.svg";
import graph from "../../assets/Graph .svg";
import { Link, useMatch } from "react-router-dom";

export default function NavSide() {
  const links = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/dashboard/arrecadadores", label: "Arrecadadores" },
    { path: "/dashboard/doadores", label: "Doadores" },
    { path: "/dashboard/doacoes", label: "Doações" },
  ];

  return (
    <nav className="p-[40px] bg-blueChristmas-100 max-w-[306px] w-full h-[100dvh] font-poppins font-semibold">
      <div>
        <div className="flex items-center gap-2 text-[26px] mb-[50px]">
          <img src={icon_dashboard} alt="icon_dashboard" />
          <h1>Dashboard</h1>
        </div>
        <div>
          <ul>
            {links.map((link: any) => {
              const match = useMatch(link.path);
              return (
                <Link
                  to={link.path}
                  key={link.path}
                  className={`flex gap-2 mb-[25px] cursor-pointer px-3 py-3  ${match && "bg-whiteChristmas-100 rounded-xl w-full shadow-md"}`}
                >
                  <img src={graph} alt="icon_graph" />
                  {link.label}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

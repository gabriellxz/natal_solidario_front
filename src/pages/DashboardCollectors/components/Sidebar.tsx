import graph from "../../../assets/Graph .svg";
import donations from "../../../assets/donations.svg";
import donor from "../../../assets/donor.svg";
import { Link, useMatch } from "react-router-dom";
import logo_natal from "../../../assets/logo_natal.svg";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface PropsTitle {
  setOpenNavSide: React.Dispatch<React.SetStateAction<boolean>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  openNavSide: boolean;
}

interface PropsLinks {
  path: string;
  label: string;
  img: string;
}
export default function SideBar({
  setTitle,
  openNavSide,
  setOpenNavSide,
}: PropsTitle) {
  const links: PropsLinks[] = [
    {
      path: "/dashboard-collectors",
      label: "Dashboard",
      img: graph,
    },
    {
      path: "/dashboard-collectors/donors",
      label: "Doadores",
      img: donor,
    },
    {
      path: "/dashboard-collectors/donations",
      label: "Doações",
      img: donations,
    },
  ];

  return (
    <>
      <nav
        className={`${
          openNavSide ? "absolute z-50" : "hidden"
        } sm:relative sm:block p-[40px] bg-blueChristmas-100 max-w-[306px] w-full min-h-screen font-poppins font-semibold pb-10`}
      >
        <div>
          <div className="flex items-center text-[26px] mb-[50px]">
            {/* Ícone para fechar no mobile */}
            <XMarkIcon
              className="w-7 absolute right-1 cursor-pointer sm:hidden mx-2"
              onClick={() => setOpenNavSide(false)}
            />
            <img src={logo_natal} alt="logo_natal" />
          </div>
          <div>
            <ul>
              {links.map((link) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const match = useMatch(link.path);

                return (
                  <Link
                    onClick={() => setTitle(link.label)}
                    to={link.path}
                    key={link.path}
                    className={`flex gap-2 mb-[25px] cursor-pointer px-3 py-3 ${
                      match &&
                      "bg-whiteChristmas-100 rounded-xl w-full shadow-md"
                    }`}
                  >
                    <img src={link.img} alt="icon" />
                    {link.label}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

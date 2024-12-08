import { Bars3Icon } from "@heroicons/react/16/solid";
import icon_profile from "../../assets/icon_profile.svg";
import React from "react";

interface PropsTitle {
  title: string
  setOpenNavSide: React.Dispatch<React.SetStateAction<boolean>>
  openNavSide: boolean
}

export default function Header(
  {
    title,
    setOpenNavSide,
    openNavSide
  }: PropsTitle
) {



  return (
    <header className="flex items-center justify-between bg-whiteChristmas-100 w-full font-inter px-[50px] py-[30px]">
      <div className="flex items-center gap-5">
        <Bars3Icon className="w-7 cursor-pointer sm:hidden" onClick={() => setOpenNavSide(!openNavSide)} />
        <h1 className="font-semibold text-[34px]">{title}</h1>
      </div>
      <div className="flex items-center gap-[30px]">
        <div className="sm:flex flex-col hidden">
          <span className="text-[20px] font-bold text-darkChristmas-200">
            Kayo Guilherme
          </span>
          <span className="text-[18px] font-semibold text-darkChristmas-100">
            Administrador
          </span>
        </div>
        <img src={icon_profile} alt="icon_profile" />
      </div>
    </header>
  );
}

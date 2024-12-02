import icon_profile from "../../assets/icon_profile.svg";

export default function Header() {
    return (
        <header className="flex items-center justify-between bg-whiteChristmas-100 w-full font-inter px-[50px] py-[30px]">
            <div>
                <h1 className="font-semibold text-[34px]">Dashboard</h1>
            </div>
            <div className="flex items-center gap-[30px]">
                <div className="flex flex-col">
                    <span className="text-[20px] font-bold text-darkChristmas-200">Kayo Guilherme</span>
                    <span className="text-[18px] font-semibold text-darkChristmas-100">Administrador</span>
                </div>
                <img src={icon_profile} alt="icon_profile" />
            </div>
        </header>
    );
}
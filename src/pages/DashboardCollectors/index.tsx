import { useLocation, Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import { RecentCollectionsTable } from "./components/Dashboard/RecentCollectionsTable";
import { useState } from "react";
import CardCategorys from "./components/Dashboard/CardCategorys";
import { useQuery } from "@tanstack/react-query";
import { getDonations } from "./data/donations";

export function DashboardCollectors() {
  const { data: collections = [], isLoading } = useQuery({
    queryKey: ["collector"],
    queryFn: getDonations,
  });
  const location = useLocation();
  const [title, setTitle] = useState<string>("Dashboard");
  const [openNavSide, setOpenNavSide] = useState<boolean>(true);
  return (
    <main className="flex w-full h-screen">
      <SideBar
        setOpenNavSide={setOpenNavSide}
        setTitle={setTitle}
        openNavSide={openNavSide}
      />
      <div className="flex-1 flex flex-col">
        <Header
          title={title}
          setOpenNavSide={setOpenNavSide}
          openNavSide={openNavSide}
        />
        <div className="flex-1 overflow-y-auto p-6">
          {location.pathname === "/dashboard-collectors" ? (
            <>
              <RecentCollectionsTable collections={collections} isLoading={isLoading}/>
              <CardCategorys />
            </>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </main>
  );
}

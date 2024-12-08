import { useLocation, Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import { RecentCollectionsTable } from "./components/Dashboard/RecentCollectionsTable";
import { CardCategorys } from "./components/Dashboard/CardCategorys";
import { useState } from "react";

const collections = [
  {
    id: "#1001",
    donationType: "Roupas",
    quantity: 5,
    collector: "João",
    donor: "Maria",
    date: "2024-12-01",
    time: "14:30",
  },
  {
    id: "#1002",
    donationType: "Brinquedos",
    quantity: 10,
    collector: "Pedro",
    donor: "Ana",
    date: "2024-12-02",
    time: "15:00",
  },
  {
    id: "#1003",
    donationType: "Alimentos",
    quantity: 20,
    collector: "Lucas",
    donor: "Carlos",
    date: "2024-12-03",
    time: "16:00",
  },
  {
    id: "#1004",
    donationType: "Roupas",
    quantity: 15,
    collector: "Mariana",
    donor: "Fernanda",
    date: "2024-12-04",
    time: "17:00",
  },
  {
    id: "#1005",
    donationType: "Brinquedos",
    quantity: 8,
    collector: "Carlos",
    donor: "Fernanda",
    date: "2024-12-05",
    time: "18:30",
  },
  {
    id: "#1006",
    donationType: "Alimentos",
    quantity: 25,
    collector: "João",
    donor: "Maria",
    date: "2024-12-06",
    time: "19:00",
  },
  {
    id: "#1007",
    donationType: "Roupas",
    quantity: 10,
    collector: "Mariana",
    donor: "Pedro",
    date: "2024-12-07",
    time: "20:15",
  },
  {
    id: "#1008",
    donationType: "Brinquedos",
    quantity: 12,
    collector: "Lucas",
    donor: "Carlos",
    date: "2024-12-08",
    time: "11:45",
  },
  {
    id: "#1009",
    donationType: "Alimentos",
    quantity: 18,
    collector: "Pedro",
    donor: "Ana",
    date: "2024-12-09",
    time: "14:00",
  },
  {
    id: "#1010",
    donationType: "Roupas",
    quantity: 30,
    collector: "Fernanda",
    donor: "Mariana",
    date: "2024-12-10",
    time: "16:20",
  },
  {
    id: "#1011",
    donationType: "Brinquedos",
    quantity: 8,
    collector: "Carlos",
    donor: "Lucas",
    date: "2024-12-11",
    time: "17:30",
  },
  {
    id: "#1012",
    donationType: "Alimentos",
    quantity: 15,
    collector: "Maria",
    donor: "Pedro",
    date: "2024-12-12",
    time: "13:45",
  },
  {
    id: "#1013",
    donationType: "Roupas",
    quantity: 20,
    collector: "Ana",
    donor: "João",
    date: "2024-12-13",
    time: "10:00",
  },
  {
    id: "#1014",
    donationType: "Brinquedos",
    quantity: 5,
    collector: "Carlos",
    donor: "Lucas",
    date: "2024-12-14",
    time: "14:00",
  },
  {
    id: "#1015",
    donationType: "Alimentos",
    quantity: 10,
    collector: "Pedro",
    donor: "Ana",
    date: "2024-12-15",
    time: "15:30",
  },
  {
    id: "#1016",
    donationType: "Roupas",
    quantity: 18,
    collector: "Lucas",
    donor: "Carlos",
    date: "2024-12-16",
    time: "16:50",
  },
  {
    id: "#1017",
    donationType: "Brinquedos",
    quantity: 25,
    collector: "João",
    donor: "Mariana",
    date: "2024-12-17",
    time: "18:15",
  },
  {
    id: "#1018",
    donationType: "Alimentos",
    quantity: 30,
    collector: "Ana",
    donor: "Pedro",
    date: "2024-12-18",
    time: "10:30",
  },
  {
    id: "#1019",
    donationType: "Roupas",
    quantity: 10,
    collector: "Carlos",
    donor: "Fernanda",
    date: "2024-12-19",
    time: "12:00",
  },
  {
    id: "#1020",
    donationType: "Brinquedos",
    quantity: 15,
    collector: "Mariana",
    donor: "João",
    date: "2024-12-20",
    time: "13:00",
  },
];

export function DashboardCollectors() {
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
              <RecentCollectionsTable collections={collections} />
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

import { Outlet } from "react-router-dom";
import Header from "../../components/Dashboard/Header";
import NavSide from "../../components/Dashboard/NavaSide";
import { useState } from "react";

export default function Dashboard() {

  const [title, setTitle] = useState<string>("Dashboard");
  const [openNavSide, setOpenNavSide] = useState<boolean>(true);

  return (
    <main className="flex w-full">
      <NavSide
        setOpenNavSide={setOpenNavSide}
        setTitle={setTitle}
        openNavSide={openNavSide}
      />
      <div className="w-full">
        <Header
          title={title}
          setOpenNavSide={setOpenNavSide}
          openNavSide={openNavSide}
        />
        <Outlet />
      </div>
    </main>
  );
}

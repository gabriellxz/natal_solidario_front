import { Outlet } from "react-router-dom";
import Header from "../../components/Dashboard/Header";
import NavSide from "../../components/Dashboard/NavaSide";
import { useState } from "react";

export default function Dashboard() {

  const [title, setTitle] = useState<string>("Dashboard");

  return (
    <main className="flex w-full">
      <NavSide setTitle={setTitle}/>
      <div className="w-full">
        <Header title={title}/>
        <Outlet />
      </div>
    </main>
  );
}
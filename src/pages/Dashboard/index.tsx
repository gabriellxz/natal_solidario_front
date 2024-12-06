import { Outlet } from "react-router-dom";
import Header from "../../components/Dashboard/Header";
import NavSide from "../../components/Dashboard/NavaSide";
import TableTargets from "../../components/Dashboard/TableTargets";

export default function Dashboard() {
  return (
    <main className="flex w-full">
      <NavSide />
      <div className="w-full">
        <Header />
        <Outlet />
        <TableTargets />
      </div>
    </main>
  );
}

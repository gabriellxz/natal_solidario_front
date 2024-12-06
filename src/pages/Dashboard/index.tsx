import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Dashboard/Header";
import NavSide from "../../components/Dashboard/NavaSide";
import TableTargets from "../../components/Dashboard/TableTargets";
import TableCollectors from "./TableCollectors/TableCollectors";

export default function Dashboard() {
  const location = useLocation();
  return (
    <main className="flex w-full">
      <NavSide />
      <div className="w-full">
        <Header />
        {/* Condicionalmente renderiza algo ou o Outlet */}
        {location.pathname === "/dashboard" ? (
          <div>
            <TableCollectors/>
            <TableTargets/>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </main>
  );
}

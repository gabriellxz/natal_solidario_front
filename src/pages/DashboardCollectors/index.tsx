import { useLocation, Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import { Button } from "@mui/material";

export function DashboardCollectors() {
  const location = useLocation();
  return (
    <main className="flex w-full">
      <SideBar />
      <div className="w-full">
        <Header />
        {/* Condicionalmente renderiza algo ou o Outlet */}
        {location.pathname === "/dashboard-collectors" ? (
          <div>
            <div>
              <div>
                <h1>Arrecadoções Recentes</h1>
                <p>20 arrecadoções feitas</p>
              </div>
              <div>
                <Button variant="contained">Nova Doação</Button>
              </div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </main>
  );
}

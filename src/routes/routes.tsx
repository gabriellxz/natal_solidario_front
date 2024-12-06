import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login/login";
import Collectors from "../pages/Dashboard/Collectors/Collectors";
import { Donors } from "../pages/DashboardCollectors/Donors/Donors";
import { DashboardCollectors } from "../pages/DashboardCollectors";
import { NewDonation } from "../pages/DashboardCollectors/NewDonation/NewDonation";
import { Donations } from "../pages/DashboardCollectors/Donations/Donations";

export default function RoutesMain() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ESTA ROTA ESTÁ SENDO RAIZ TEMPORIAMENTE */}
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index path="arrecadadores" element={<Collectors />} />
        </Route>
        <Route path="/dashboard-collectors" element={<DashboardCollectors />}>
          <Route index path="donors" element={<Donors />} />
          <Route path="donations" element={<Donations />} />
        </Route>
        <Route
          path="/dashboard-collectors/new-donation"
          element={<NewDonation />}
        />
      </Routes>
    </BrowserRouter>
  );
}

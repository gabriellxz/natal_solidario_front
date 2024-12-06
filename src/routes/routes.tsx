import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login/login";
import Collectors from "../pages/Dashboard/Collectors/Collectors";
import TableCollectors from "../pages/Dashboard/TableCollectors/TableCollectors";
import { NewDonation } from "../pages/DashboardCollectors/NewDonation/NewDonation";
import DonationPage from "../pages/DashboardCollectors/NewDonation/DonorForms"

export default function RoutesMain() {
    return (
        <BrowserRouter>
            <Routes>
                {/* ESTA ROTA ESTÁ SENDO RAIZ TEMPORIAMENTE */}
                <Route
                    path="/"
                    element={
                        <Login />
                    }
                />
                <Route
                    path="dashboard"
                    element={<Dashboard />}
                >
                    <Route
                        index
                        element={<TableCollectors />}
                    />
                    <Route
                        path="arrecadadores"
                        element={<Collectors />}
                    />
                </Route>
                
                <Route
                    path="/dashboard-collectors"
                >
                    <Route
                        index
                        path="new-donation" element={<NewDonation />}
                    />
                </Route>

                <Route 
                path="/doacao" element={<DonationPage />} 
                />
            </Routes>
        </BrowserRouter>
    );
}
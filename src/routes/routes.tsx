import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login/login";
import Collectors from "../pages/Dashboard/Collectors/Collectors";
<<<<<<< HEAD
import TableCollectors from "../pages/Dashboard/TableCollectors/TableCollectors";

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
                        element={<TableCollectors/>}
                    />
                    <Route
                        path="arrecadadores"
                        element={<Collectors />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}   
=======
import { NewDonation } from "../pages/DashboardCollectors/NewDonation/NewDonation";

export default function RoutesMain() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ESTA ROTA ESTÁ SENDO RAIZ TEMPORIAMENTE */}
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index path="arrecadadores" element={<Collectors />} />
        </Route>
        <Route path="/dashboard-collectors">
            <Route index path="new-donation" element={<NewDonation/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
>>>>>>> d063d34df622575d791d73f063871d600b8bc089

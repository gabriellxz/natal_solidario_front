import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login/login";
import Collectors from "../pages/Dashboard/Collectors/Collectors";

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
                    element={<Dashboard/>}
                >
                    <Route
                        index
                        path="arrecadadores"
                        element={<Collectors/>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}   
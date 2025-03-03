import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import Pedidos from "../pages/Pedidos";
import Mesas from "../pages/Mesas";
import Cardapio from "../pages/Cardapio";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProtectedRoute />}>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/pedidos" element={<Pedidos />} />
                    <Route path="/mesas" element={<Mesas />} />
                    <Route path="/cardapio" element={<Cardapio />} />
                </Route>
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;

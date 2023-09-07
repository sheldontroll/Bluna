import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

import Login from "./modules/auth/pages/login/Login"
import Register from "./modules/auth/pages/register/Register"
import Home from "./modules/dashboard/pages/home/Home"
import Inventory from "./modules/dashboard/pages/inventory/Inventory"
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/dashboard" element={<Outlet />}>
                        <Route index element={<Home />} />
                        <Route path="inventory" element={< Inventory />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

import Login from "./modules/auth/pages/login/Login"
import Register from "./modules/auth/pages/register/Register"
import Home from "./modules/dashboard/pages/home/Home"
import Inventory from "./modules/dashboard/pages/inventory/Inventory"
import Layout from "./components/Layout/Layout";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes"
import Existencias from "./modules/dashboard/pages/Existencias/Existencias"
import EstablecerRoles from "./modules/dashboard/pages/EstablecerRoles/EstablecerRoles"


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route element={<PrivateRoutes redirectTo={'/login'} />}>
                        <Route path="/dashboard" element={<Outlet />}>
                            <Route path="roles" element={<EstablecerRoles/>}/>
                            <Route index element={<Home />} />
                            <Route path="inventory" element={< Outlet />}>
                                <Route index element={<Inventory />}></Route>
                                <Route path="existencias" element={<Existencias />}></Route>
                            </Route>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

    const [auth, setAuth] = useState(null)


    const handleAuthenticate = (user) => {
        setAuth(user);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        location.reload()
    }


    return (
        <AuthContext.Provider value={{ auth, handleAuthenticate, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
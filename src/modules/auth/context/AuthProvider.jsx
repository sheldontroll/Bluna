import { createContext, useState } from "react";


export const AuthContext = createContext()


export default function AuthProvider({ children }) {

    const [auth, setAuth] = useState(null)


    const handleAuthenticate = (user) => {
        setAuth(user);
    }

    return (
        <AuthContext.Provider value={{ auth, handleAuthenticate }}>
            {children}
        </AuthContext.Provider>
    )
}
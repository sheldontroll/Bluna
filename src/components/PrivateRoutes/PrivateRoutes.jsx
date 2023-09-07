import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../modules/auth/hooks/useAuth'

function PrivateRoutes({ children, redirectTo }) {
    const { auth } = useAuth()

    if (!!auth === false) {
        return <Navigate to={redirectTo} />
    }

    return (
        children ??
        <Outlet />
    )
}

export default PrivateRoutes
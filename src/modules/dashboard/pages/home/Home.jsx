import { Outlet } from 'react-router-dom'

import React from 'react'

function Home() {
    return (
        <div>Home
            <Outlet></Outlet>
        </div>
    )
}

export default Home
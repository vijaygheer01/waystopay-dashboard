import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavigationManu from '@/components/shared/navigationMenu/NavigationMenu'
import Header from '@/components/shared/header/Header'
import useBootstrapUtils from '@/hooks/useBootstrapUtils'
import SupportDetails from '@/components/supportDetails'
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RootLayout = () => {

    const pathName = useLocation().pathname
    useBootstrapUtils(pathName)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if(!isAuthenticated){
        return <Navigate to="/login" />;
    }



    return (
        <>
            <Header />
            <NavigationManu />
            <main className="nxl-container">
                <div className="nxl-content">
                    <Outlet />
                </div>
            </main>
            <SupportDetails />
        </>
    )
}

export default RootLayout
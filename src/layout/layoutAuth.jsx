import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const LayoutAuth = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if(isAuthenticated){
        return <Navigate to="/dashboard" />;
    }
    
    return (<><Outlet /></>)
}

export default LayoutAuth
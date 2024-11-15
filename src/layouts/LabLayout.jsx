// eslint-disable-next-line no-unused-vars
import React from 'react';
import BackNav from "../components/BackNav/BackNav.jsx";
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const LabLayout = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    if(!isLoggedIn) {
        return <Navigate to='/login'/>
    }
    const labLayoutStyle = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    };

    const labContentStyle = {
        flex: 1,
        paddingTop: '3rem', // Space for the fixed navbar
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <>
            <div style={labLayoutStyle}>
                <BackNav/>
                <main className={labContentStyle}>
                    <Outlet/>
                </main>
            </div>
        </>

    );
};


export default LabLayout;
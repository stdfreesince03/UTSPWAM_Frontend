// eslint-disable-next-line no-unused-vars
import React, {useRef, useState} from 'react';
import BackNav from "../components/BackNav/BackNav.jsx";
import {Navigate, Outlet, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import api from "../services/axios.js";

const LabLayout = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const gameData = useRef({});
    const userID = useSelector((state) => state.auth.userID);
    const role = useSelector((state) => state.auth.role);

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

    function handleGameData(data){
        console.log('handleGameData:LabLayout exec : ',data);
        gameData.current = data;
    }

    async function dataStoreBackNav() {
        console.log('dataStoreBackNav');
        console.log('gamedata.current' , gameData.current)
        if(userID !== null && role!==null){
            try{
                await api.post('/progress',{
                        ...gameData.current,
                    },{
                    headers: {
                            'Content-Type': 'application/json'
                        },
                    withCredentials:true
                }
                ).then(response=>{
                    console.log(response);
                }).catch(err=>{
                    console.log(err);
                });
            }catch(error){
                console.log(error);
            }
        }


    }

    return (
        <>
            <div style={labLayoutStyle}>
                <BackNav onReturn={dataStoreBackNav}/>
                <main className={labContentStyle}>
                    <Outlet context={{handleGameData}}/>
                </main>
            </div>
        </>

    );
};


export default LabLayout;
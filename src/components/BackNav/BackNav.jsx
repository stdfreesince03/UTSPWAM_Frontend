// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './BackNav.css';
import {useNavigate} from "react-router-dom";

const BackNav = ({onReturn}) => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const handleMouseMove = (event) => {
        if (event.clientY <= 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleBackClick = () => {
        console.log('handleBackClick');
        if (onReturn) {
            onReturn(); // Call onReturn function if it exists
        }
        navigate(-1); // Navigate back
    };


    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={`back-nav ${isVisible ? 'visible' : ''}`}>
            <button className="back-arrow" onClick={
                ()=>handleBackClick()
            }>←</button>
        </div>
    );
};

export default BackNav;
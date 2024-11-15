import './NavBar.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import api from '../../services/axios.js'
import Logout from "../LogOutButton/Logout.jsx";

export default function NavBar() {
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


    function toggleSideBar(boolValue) {
        setSideBarOpen(boolValue);
    }

    return (
        <div className="navbar">
            <a href="" className="announcement-link">
                <div className="announcement-bar">
                    Free Courses ✨ Sale Ends Soon, Get It Now ➔
                </div>
            </a>
            <div className="header">
                <div className="header-container">
                    <nav>
                        <ul className="nav-list">
                            <div className="logo">
                                <img src="../../../public/logos/logo_main.png" alt="Logo" />
                            </div>
                            <div className="nav-list nav-links">
                                <li><Link to="/home" className="nav-link">Home</Link></li>
                                <li><Link to="/courses" className="nav-link">Courses</Link></li>
                                <li><Link to="/about" className="nav-link">About</Link></li>
                                <li><Link to="/pricing" className="nav-link">Pricing</Link></li>
                                <li><Link to="/contact" className="nav-link">Contact</Link></li>
                                <li><Link to="/labs" className="nav-link">Labs</Link></li>
                            </div>
                        </ul>
                    </nav>
                    <div className="mobile-right-header">
                        <div className="auth-buttons">
                            {isLoggedIn ? (
                                <Logout className="btn primary">Logout</Logout> // Handle logout here if needed
                            ) : (
                                <>
                                    <Link to="/signup" className="btn secondary">Sign Up</Link>
                                    <Link to="/login" className="btn primary">Login</Link>
                                </>
                            )}
                        </div>
                        <a onClick={() => toggleSideBar(true)} id="hamburger-dropdown">
                            <img src="../../../public/logos/hamburger.svg" alt="SidebarDropdown" />
                        </a>
                    </div>
                </div>
            </div>
            {isSideBarOpen && (
                <div className="sidebar-container">
                    <ul className="sidebar">
                        <li><a id="sidebar-close" onClick={() => toggleSideBar(false)}>
                            <img src="../../../public/logos/sidebarX.svg" alt="SideBarClose" />
                        </a></li>
                        <li><Link to="/home" className="nav-link">Home</Link></li>
                        <li><Link to="/courses" className="nav-link">Courses</Link></li>
                        <li><Link to="/about" className="nav-link">About</Link></li>
                        <li><Link to="/pricing" className="nav-link">Pricing</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact</Link></li>
                        <li><Link to="/labs" className="nav-link">Labs</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}
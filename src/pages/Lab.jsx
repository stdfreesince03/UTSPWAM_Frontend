import React, { useState } from 'react';
import '../styles/Lab.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import BlockingModal from "../components/BlockingModal/BlockingModal.jsx";


export default function LabPage() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [modalOpen, setModalOpen] = useState(false);

    const handleLabClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault();
            setModalOpen(true);
        }
    };

    const closeModal = () => setModalOpen(false);

    return (
        <div className="lab-page">
            <header className="lab-header">
                <h1>Explore Virtual Labs</h1>
                <p>Hands-on virtual labs designed to help you learn and practice new skills in a simulated environment.</p>
            </header>

            <div className="lab-grid">
                <div className="lab-card">
                    <img src="/images/lab1.png" alt="Lab 1" className="lab-image" />
                    <div className="lab-info">
                        <h2>Car Jump</h2>
                        <p>Jump!!!</p>
                        <Link to="/labs/1" className="btn visit-lab" onClick={handleLabClick}>
                            Start Lab
                        </Link>
                    </div>
                </div>
            </div>

            <BlockingModal isOpen={modalOpen} onClose={closeModal} />
        </div>
    );
}
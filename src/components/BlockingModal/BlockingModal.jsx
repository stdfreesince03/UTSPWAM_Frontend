// BlockingModal.jsx
import React from 'react';
import './BlockingModal.css';
import {Link} from "react-router-dom";

export default function BlockingModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>
                    X
                </button>
                <h2>Please Log In</h2>
                <p>You need to log in to access this lab.</p>
                <Link className="modal-login-button" to="/login">
                    Log In
                </Link>
            </div>
        </div>
    );
}
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <b>PrimeBazaar</b>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addproduct">Create Your Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup"><b>Sign Up</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"><b>Log In</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout"><b>Log Out</b></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

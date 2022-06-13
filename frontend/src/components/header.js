import React from 'react';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="bg-primary border-bottom navbar navbar-dark navbar-expand-lg py-lg-1">
                <div className="container"><a className="fw-bold navbar-brand text-uppercase" href=".">ChatX</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown-4" aria-controls="navbarNavDropdown-4"
                            aria-expanded="false" aria-label="Toggle navigation"><span
                        className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown-4">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link px-lg-3 py-lg-4 text-white">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/rooms" className="nav-link px-lg-3 py-lg-4 text-white">Rooms</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/users" className="nav-link px-lg-3 py-lg-4 text-white">Users</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link px-lg-3 py-lg-4 text-white">About</NavLink>
                            </li>
                        </ul>

                        <NavLink to="/login" className="btn btn-light ms-lg-auto ps-4 pe-4 rounded-pill">Login</NavLink>
                        <NavLink to="/signup"
                                 className="btn btn-outline-light ms-2 pe-4 ps-4 rounded-pill">Signup</NavLink>

                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;

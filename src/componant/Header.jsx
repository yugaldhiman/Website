
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Rajan & co.</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About-Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/accounting/${service.id}">Accounting</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/auditing/${service.id}">Auditing</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/incometex/${service.id}">Income-Tex</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/corporatematters/${service.id}">Corporate Matters</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/financingservices/${service.id}">Financing Services</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/indirecttex/${service.id}">Indirect-Tex</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/startup/${service.id}">StartUp</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/registrationreturnservices/${service.id}">Registration Return Services</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/businessconsultancyservices/${service.id}">Business Consultancy Services</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/ngosocietytrust/${service.id}">NGO Society Trust</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header



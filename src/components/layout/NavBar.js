import React from 'react';
import {
    Link
} from 'react-router-dom';

import logo from '../../images/logo-ma.svg'

export const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className="mx-2" src={logo} alt="Mundo Animal" width="35px" />
                    <span>mundo animal</span>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto bd-highlight">
                        <li className="nav-item">
                            <Link className="nav-link mx-3" to="/adopciones">Adopción</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-3" to="/busquedas">Buscados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-3 disabled" to="/#">Contacto</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto bd-highlight">
                        <li className="nav-item">
                            <Link className="nav-link" to="/auth/login">Iniciar Sesión</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/auth/registro">Registrarse</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

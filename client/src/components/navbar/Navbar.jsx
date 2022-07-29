import React from 'react';
import {Link} from "react-router-dom";
import "../navbar/navbar.css";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand text" to="/">Imcrypt</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text" to="/encode">Encode</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text" to="/decode">Decode</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
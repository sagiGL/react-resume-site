import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Jumbotron from "./Jumbotron";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar sticky-top navbar-expand-sm bg-dark navbar-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">PumpkinWork</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarText" aria-controls="navbar-options" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-options">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">about</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Jumbotron title="About" subtitle="About subtitle is here"/>
            </div>

        );
    }
}

export default Navbar;
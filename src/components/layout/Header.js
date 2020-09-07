import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        if (this.props.location.pathname === '/myprojecthome') {
            return null
        }
        return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            <div className="container">
            <Link className="navbar-brand" to="/">
                My Project
          </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                            Dashboard
                        </a>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/register">
                        Sign Up
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        )
    }
}

//export default Header;
export default withRouter(Header);

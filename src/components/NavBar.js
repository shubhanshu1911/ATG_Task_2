import React, { Component } from 'react'
import wholePng from './images/whole.png';
import vector from './images/Vector.png'


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary nav">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="/">
                            <img src={wholePng} alt="nav-logo" width="162.57px" height="24" />
                        </a>

                        <div className=" search-bar" role="search">
                            <img src={vector} alt="icon" style={{ width: '16.03px', height: '16.03px', top: '2.75px', left: '2.75px;' }}></img>
                            <input type="text" class="border-0 shadow-none bg-transparent fx-14 fw-500 black-5C5" placeholder="Search for your favorite groups in ATG" />
                        </div>

                        <div className="collapse navbar-collapse account" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-8">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="/"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Create account. <span style={{ color: 'blue' }}>It's free!</span>

                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Account
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/SignUp">
                                                Login
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                Sign In
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

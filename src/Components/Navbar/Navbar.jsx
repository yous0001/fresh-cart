import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/freshcart-logo.svg"

export default function Navbar() {
  return (
    <>
        <nav
            className="navbar navbar-expand-sm navbar-light bg-light"
        >
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">
                    <img src={logo} alt="logo" width="120"/>
                </Link>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex align-items-center">
                        <li className="nav-item">
                            <i className='fa-brands mx-2 fa-facebook'></i>
                            <i className='fa-brands mx-2 fa-twitter'></i>
                            <i className='fa-brands mx-2 fa-instagram'></i>
                            <i className='fa-brands mx-2 fa-linkedin'></i>
                            <i className='fa-brands mx-2 fa-youtube'></i>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    </>
  )
}

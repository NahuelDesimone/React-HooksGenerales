import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='./' className="nav-link active" aria-current="page">Home</Link>
                        <Link to='/about' className="nav-link">About</Link>
                        <Link to='/login' className="nav-link">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

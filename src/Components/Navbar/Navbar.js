import React from 'react'
import Logo from './Logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar(props) {
    return (
        <header className="navbar">
                <Link to="/"><img className="navbar__logo" src={Logo}/></Link>
        </header>
    )
}

export default Navbar
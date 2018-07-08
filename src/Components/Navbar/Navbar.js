import React from 'react'
import Logo from './Logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar(props) {
    return (
        <header className="navbar">
                <Link to="/"><img className="navbar__logo" alt="Logo do Github segurando um diamante" src={Logo}/></Link>
        </header>
    )
}

export default Navbar
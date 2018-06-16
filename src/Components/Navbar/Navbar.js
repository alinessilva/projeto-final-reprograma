import React from 'react'
import Logo from './Logo.png'
// import Menu from './Menu/Menu'
// import { Link } from '../../rotas/Rotas'
import './Navbar.css'


function Navbar(props) {
    return (
        <header className="navbar">
                <img className="navbar__logo" src={Logo}/>
        </header>
    )
}

export default Navbar
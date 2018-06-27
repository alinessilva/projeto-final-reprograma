import React from "react";
import { Navbar, NavItem } from 'react-materialize';
import Logo from './Logo50x50.png'

const Img = <img src={Logo} alt={"YourBrand"}/>;
// const brandColor = <span style={{color: "#9F9F9F"}}>Your Brand</span>;

const Header = () => (
      <Navbar className="#b39ddb deep-purple lighten-3" brand={Img} right>
        <NavItem href='/'>Pagina Inicial</NavItem>
        <NavItem href='/contact'>Contato</NavItem>
      </Navbar>
);

export default Header;

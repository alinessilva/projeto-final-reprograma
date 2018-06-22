import React from "react";
import { Navbar, NavItem, Row} from 'react-materialize';
import Logo from './Logo50x50.png'

const Img = <img src={Logo} alt={"YourBrand"}/>;
// const brandColor = <span style={{color: "#9F9F9F"}}>Your Brand</span>;

const Header = () => (

    <Navbar className="#b39ddb deep-purple lighten-3" brand={Img} right>
      <NavItem href='/'>Home</NavItem>
      <NavItem href='/contact'>Contact</NavItem>
    </Navbar>
    

);

export default Header;

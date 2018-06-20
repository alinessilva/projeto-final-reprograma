import React from 'react'
import './Header.css'


function Header(props) {
    return (
      <div className="header">
        {props.children}
      </div>
    );
  }

export default Header
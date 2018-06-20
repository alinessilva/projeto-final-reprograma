import React from 'react'
import './Header.css'
import Search from '../Search/Search';


function Header(props) {
    return (
      <div className="header">
        {props.children}
      </div>
    );
  }

  function About() {
    return (
      <Header>
        <h1 className="title">
          Aqui você encontra projetos de mulheres inspiradoras do mundo todo!
        </h1>
        <p className="message">
          Você tem uma idéia e não sabe por onde começar?
        </p>
        <Search />
      </Header>
    );
  }

export default About
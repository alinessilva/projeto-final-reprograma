import React from 'react'
import './Button.css'


function Button(props) {
    return (
        <button className="button" type="submit" onClick={props.onClick}>
        Pesquisar...
        {props.children}
        </button>
    );
}

export default Button
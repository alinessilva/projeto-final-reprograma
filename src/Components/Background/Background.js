import React, { Component } from 'react'
import background from './background_woman.jpg'
import Search from '../Search/Search' 
import './Background.css'


class Background extends Component {
    render() {
        return (
            <div>
                <img className="background" src={background}/>
                <Search />
            </div>
        );
    }
}

export default Background;
import React, { Component } from 'react'
import background from './background_woman.jpg'
import Search from '../Search/Search' 
import ReposContainer from '../Repositorio/ReposContainer'
import './Background.css'


class Background extends Component {
    render() {
        return (
            <div>
                <img className="background" src={background}/>
                <Search />
                <ReposContainer />
            </div>
        );
    }
}

export default Background;
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/Header/Header'
import ReposContainer from './Components/Repositorio/ReposContainer'
import Section from './Components/Section/Section'
import Result from './Components/Result/Result'
import './App.css'


class App extends Component {
  render() {
    return (
     <div>
       <Navbar />
       <About />
       <ReposContainer />
       <Section />
    </div>
    );
  }
}

export default App;

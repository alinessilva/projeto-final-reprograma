import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Background from './Components/Background/Background'
import ReposContainer from './Components/Repositorio/ReposContainer'
import Section from './Components/Section/Section'
import Search from './Components/Search/Search'
import Result from './Components/Result/Result'
import './App.css'


class App extends Component {
  render() {
    return (
     <div>
       <Navbar />
       <Background />
       <ReposContainer />
       <Section />
    </div>
    );
  }
}

export default App;

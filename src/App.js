import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Section from './Components/Section/Section'
import SectionTips from './Components/SectionTips/SectionTips'
import './App.css'


class App extends Component {

  render() {
    return (
     <div>
       <Navbar />
       <Banner />
       <Section />
       <SectionTips />
       <Navbar />
    </div>
    );
  }
}

export default App;

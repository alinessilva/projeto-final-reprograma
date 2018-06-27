import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
// import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Section from './Components/Section/Section'
import CardGit from './Components/CardGit/CardGit'
import Footer from './Components/Footer/Footer';
import './App.css'

class App extends Component {
  render() {
    return (
     <div>
       <Header />
       {/* <Navbar /> */}
       <Banner />
       <Section />
       <CardGit />
       <Footer />
    </div>
    );
  }
}

export default App;

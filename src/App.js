import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Section from './Components/Section/Section'
import ReposContainer from './Components/Repositorio/ReposContainer'
import Result from './Components/Result/Result'
import './App.css'


class App extends Component {
  state = {
    filter: ''
  }

  handleFilterChange = (filter) => {
    this.setState({filter: filter})
  }

  render() {
    return (
     <div>
       <Navbar />
       <Banner onFilterChange={this.handleFilterChange} />
       <Section filter={this.state.filter}/>
       <ReposContainer />
    </div>
    );
  }
}

export default App;

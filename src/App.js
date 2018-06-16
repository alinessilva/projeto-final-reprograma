import React, { Component } from 'react';
import Search from './Components/Search/Search';
import Result from './Components/Result/Result';
import Repos from './Components/GitHub/ReposContainer';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
       <Search />
       <Repos />
    </div>
    );
  }
}

export default App;

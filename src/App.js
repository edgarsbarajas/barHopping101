import React, { Component } from 'react';
import Header from './components/header'
import Home from './components/home'

import './styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;

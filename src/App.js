import React, { Component } from 'react';
import './App.css';
import Carousel from './components/carousel/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
              <Carousel slideWidth="640" autoPlay/>
          </div>
      </div>
    );
  }
}

export default App;

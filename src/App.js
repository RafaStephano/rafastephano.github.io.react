import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="pure-u-1">
        <header className="pure-u-1 pure-u-sm-2-3">
          <div className="l-box">
            <h1>Rafael de Oliveira Stephano</h1>
            <p>Analista Programador Java</p>
          </div>
        </header>
        <div className="pure-u-1  pure-u-sm-1-3 box">
          <div className="l-box">
            <i className="fas fa-home fa-2x box-icon"></i>
            <p>Barueri - SP</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

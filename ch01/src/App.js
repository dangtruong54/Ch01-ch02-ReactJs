import React, { Component } from 'react';
import Course from '../src/components/Course'
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <Course />     
          <Course /> 
          <Course /> 
          <Course />                    
        </div>
      </div>
    );
  }
}

export default App;

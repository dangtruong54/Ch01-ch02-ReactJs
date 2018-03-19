import React, { Component } from 'react';
import Course from '../src/components/Course'
//import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const items = [
      {
        name : 'ReactJs',
        time : '30h',
        free : false,
        description: 'This is course ReactJs'
      },
      {
        name : 'Angular',
        time : '55h',
        free : true
      },
      {
        name : 'NodeJS',
        time : '35h',
        free : true
      }
    ];

    const elmCourses = items.map((item, index) =>
    <Course key={index} name={item.name} time={item.time} free={item.free}> {item.description} </Course>
    );

    return (
      <div className="App">
        <div className="row">
          {elmCourses}             
        </div>
      </div>
    );
  }
}

export default App;

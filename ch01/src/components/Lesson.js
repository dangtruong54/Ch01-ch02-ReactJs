import React, { Component } from 'react';

class Lesson extends Component {
  render() {
    // return (     
    //       <li className="list-group-item">Item 1</li>
    // );
    return React.createElement('li', { classNaeme: 'list-group-item'}, 'Iteam 2');
  }
}

export default Lesson;

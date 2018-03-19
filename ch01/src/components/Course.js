import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">              
        <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">React Js</h3>
            </div>
            <div className="panel-body">
              
              <ul className="list-group">
                <Lesson />
                <Lesson />
                <Lesson />
              </ul>
              
            </div>
        </div>              
      </div>
      
      <button type="button" className="btn btn-primary">Register</button>
      </div>
      
    );
  }
}

export default Course;

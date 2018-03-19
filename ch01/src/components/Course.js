import React, { Component } from 'react';

class Course extends Component {
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">              
        <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">React Js</h3>
            </div>
            <div className="panel-body">
              
              <ul className="list-group">
                <li className="list-group-item">Item 1</li>
                <li className="list-group-item">Item 2</li>
                <li className="list-group-item">Item 3</li>
              </ul>
              
            </div>
        </div>              
      </div>
    );
  }
}

export default Course;

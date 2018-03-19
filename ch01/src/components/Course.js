import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component {

  constructor(props) {
    super(props);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    alert("View 1");
  }

  handleClick2(content) {
    alert(content);
  }

  handleClick3() {
    alert(this.props.name);
  }

  showButtonFree(){
    const isFree = this.props.free;
    if(isFree === true) {
      return <div className="panel-footer">
                <div className="btn-group">
                  <button onClick={this.handleClick1} type="button" className="btn btn-warning">View 1</button>
                  <button onClick={() => this.handleClick2("View 2")} type="button" className="btn btn-danger">View 2</button>
                  <button onClick={this.handleClick3} type="button" className="btn btn-success">View 3</button>
                </div>
             </div>
    }
  }

  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">              
        <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.name}</h3>
            </div>
            <div className="panel-body">
              <p>{this.props.time}</p>
              <p>{this.props.children }</p>
              <ul className="list-group">
                <Lesson />
                <Lesson />
                <Lesson />
              </ul>              
            </div>
            {this.showButtonFree()}            
        </div>                     
      </div>
      </div>     
      
      
    );
  }
}

export default Course;

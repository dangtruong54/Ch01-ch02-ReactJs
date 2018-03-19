import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowOutline : false,
      totalStudent : 69
    };
    this.handleClick3 = this.handleClick3.bind(this);
    this.registerCourse = this.registerCourse.bind(this);
    this.handleToggleOutline = this.handleToggleOutline.bind(this);
  }

  handleToggleOutline() {
    this.setState({
      isShowOutline : !this.state.isShowOutline
    }) 
  }

  registerCourse() {
    console.log( this.refs.username.value );
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
      return (
            <div className="btn-group">
              <button onClick={this.handleClick1} type="button" className="btn btn-warning">View 1</button>
              <button onClick={() => this.handleClick2("View 2")} type="button" className="btn btn-danger">View 2</button>
              <button onClick={this.handleClick3} type="button" className="btn btn-success">View 3</button>
            </div>
         )    
    } else {
      return (
        
          <div className="input-group">
            <span className="input-group-btn">
              <button onClick={this.registerCourse} className="btn btn-info" type="button">Register!</button>
            </span>
            <input type="text" className="form-control" placeholder="User Name..." ref="username" />
          </div>
        
      );
    }
  }

  render() {
    let elementOutline = null;
    console.log(this.state.isShowOutline);
    if(this.state.isShowOutline) {
      elementOutline = <ul className="list-group">
                        <Lesson />
                        <Lesson />
                        <Lesson />
                      </ul>;
    }
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
              <p><button onClick={this.handleToggleOutline} type="button" className="btn btn-success">Toggle Outline</button></p>
              {elementOutline}              
            </div>
            <div className="panel-footer">
              {this.showButtonFree()}      
            </div>      
        </div>                     
      </div>
      </div>     
      
      
    );
  }
}

export default Course;

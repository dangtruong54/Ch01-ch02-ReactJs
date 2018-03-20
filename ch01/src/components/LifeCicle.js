import React, { Component } from 'react';
import $ from 'jquery'; 
class LifeCicle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title : "LifeCicle"
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    console.log("constructor")
  }

  handleChangeTitle() {
    this.setState({
      title : "Changed Title when using LifeCicle"
    }) 
  }

  componentWillMount(){
    console.log("componentWillMount");
    this.setState({
      title : "Changed Title WillMount when using LifeCicle"
    }) 
  }

  componentDidMount(){
    console.log("componentDidMount");
    $("h3.panel-title").css('color', 'white');
    this.setState({
      title : "Changed Title component DidMount when using LifeCicle"
    }) 
  }

  componentWillReceiveProps(){
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate");
    console.log(nextState);
    return false;
  }
  componentWillUpdate(){
    console.log("componentWillUpdate");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">              
          <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">{this.state.title}</h3>
              </div>
              <div className="panel-body">
                <p><button onClick={this.handleChangeTitle} type="button" className="btn btn-success">Toggle Outline</button></p>           
              </div>     
          </div>                     
        </div>
      </div>           
     
    );
  }
}

export default LifeCicle;

import React, { Component } from 'react';
import Search from './Search'
import Sort from './Sort'

class Control extends Component {

    constructor(props) {
        super(props);       
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask() {
        this.props.onClickAdd();        
    }

    render() {       
        let showButton = this.props.isShowForm;
        let button = <button type="button" onClick={this.handleAddTask} className="btn btn-success btn-block">Close Form</button>;;
        if(showButton) {
            button = <button type="button" onClick={this.handleAddTask} className="btn btn-success btn-block">Close Form</button>;
        }else {
            button = <button type="button" onClick={this.handleAddTask} className="btn btn-info btn-block ">Add Task</button>;
        }
        return (            
            <div className="row">
                {/* SEARCH : START */}
                <Search onClickGo={this.props.onClickSearchGo}/>
                {/* SEARCH : END */}

                {/* SORT : START */}
                <Sort />
                {/* SORT : END */}

                {/* ADD : START */}
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">                    
                    {button}
                </div>
                {/* ADD : END */}

            </div>
        );
    }
}

export default Control;

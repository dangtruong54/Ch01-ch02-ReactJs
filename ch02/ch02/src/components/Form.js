import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hiddenForm : true,
            nameTask       : "",
            selectLevel      : "1"
        }
        this.clearForm = this.clearForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);      
    }

    clearForm() {
        // Cach 1: clear dữ liệu - khong nen dung vi tu v16 tro di se bo su dung ref
        // this.refs.task_name.value = '';
        // this.refs.task_level.value = 1;
        // Cach 2: của anh Lân là đóng form add task lại
        this.props.onclickCancel();
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({            
            [name]: value
        });
    }

    handleSubmit(event){
        let item = {
            name : this.state.nameTask,
            level : this.state.selectLevel
        }
        this.props.onClickSubmit(item);  
    }

    render() {

        return (            
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form action="#" method="POST" className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="true">label</label>
                            <input type="text" name="nameTask" onChange={this.handleChange} className="form-control" placeholder="Task Name" />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="true">label</label>
                            <select name="selectLevel" id="inputDs" className="form-control" required="required" onChange={this.handleChange}>                                
                                <option value={0}>Small</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                        <button onClick={this.clearForm} type="button" className="btn btn-default">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;

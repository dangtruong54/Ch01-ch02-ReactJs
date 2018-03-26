import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hiddenForm : true,
            id          : "",
            nameTask: '',
            levelTask: ''
        }
        this.clearForm = this.clearForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);               
    }

    clearForm() {
        // Cach 1: clear dữ liệu
        // this.refs.task_name.value = '';
        // this.refs.task_level.value = 1;
        // Cach 2: của anh Lân là đóng form add task lại
        this.props.onclickCancel();
    }

    componentWillMount() {
        let itemEdit = this.props.onClickEdit;

        if(itemEdit.id !== null) {
            this.setState({
                id      :itemEdit.id,
                nameTask : itemEdit.name,
                levelTask : itemEdit.level
            })
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        let item = {
            id   : this.state.id,
            name : this.state.nameTask,
            level: this.state.levelTask
        };
        this.props.onClickAddTask(item);
    }

    render() {        
     
        return (            
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form action="#" method="POST" className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="true">label</label>
                            
                            <input type="text" name="nameTask" value={this.state.nameTask} className="form-control" placeholder="Task Name" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="true">label</label>
                            <select name="levelTask" value={this.state.levelTask} id="inputDs" className="form-control" required="required"  onChange={this.handleChange}>
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

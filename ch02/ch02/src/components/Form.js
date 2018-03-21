import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hiddenForm : true
        }
        this.clearForm = this.clearForm.bind(this);
    }

    clearForm() {
        // Cach 1: clear dữ liệu
        // this.refs.task_name.value = '';
        // this.refs.task_level.value = 1;
        // Cach 2: của anh Lân là đóng form add task lại
        this.props.onclickCancel();
    }

    render() {
        return (            
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form action="#" method="POST" className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="true">label</label>
                            <input type="text" className="form-control" placeholder="Task Name" ref="task_name" />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="true">label</label>
                            <select name="ds" id="inputDs" className="form-control" required="required" ref="task_level">
                                Small
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary">Submit</button>
                        <button onClick={this.clearForm} type="button" className="btn btn-default">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;

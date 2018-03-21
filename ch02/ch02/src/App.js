import React, { Component } from 'react';
import Title from './components/Title'
import Control from './components/Control'
import Form from './components/Form'
import List from './components/List'
import items from './mocks/tasks'

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items : items,
            isShowForm : false
        }

        this.handleToggleForm = this.handleToggleForm.bind(this);
    }

    handleToggleForm() {
        this.setState({
            isShowForm : !this.state.isShowForm
        })
    }


    render() {   
           
        let items = this.state.items;

        let elemForm = this.state.isShowForm;
        let showForm = null;
        if(elemForm) {
            showForm = <Form />;
        }

        return (
            <div>
                {/* TITLE : START */}   
                <Title />
                {/* TITLE : END */}

                {/* CONTROL (SEARCH + SORT + ADD) : START */}
                <Control onClickAdd={this.handleToggleForm}/>
                {/* CONTROL (SEARCH + SORT + ADD) : END */}

                {/* FORM : START */}
                {showForm}
                {/* FORM : END */}

                {/* LIST : START */}
                <List items={items}/>
                {/* LIST : END */}
            </div>
        );
  }
}

export default App;

import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
//import _ from 'lodash';
import {filter, includes} from 'lodash'
import items from './mocks/tasks';

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items : items,
            isShowForm : false,
            strSearch : ''
        }

        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.hiddenFormCancel = this.hiddenFormCancel.bind(this);
        this.handleSearch     = this.handleSearch.bind(this);  
    }

    handleSearch(value){
        this.setState({
            strSearch : value
        })
    }

    handleToggleForm() {
        this.setState({
            isShowForm : !this.state.isShowForm
        })
    }

    hiddenFormCancel() {
        this.setState({
            isShowForm : false
        })
    }

    render() {   

        let itemsOrigin = [...this.state.items];
        let items       = [];
        let elemForm    = this.state.isShowForm; 
        let showForm    = null;
        const search    = this.state.strSearch;

        items = filter(itemsOrigin, (item)=>{
            return includes(item.name, search);
        });

        if(elemForm) {
            showForm = <Form onclickCancel={this.hiddenFormCancel}/>;
        }

        return (
            <div>
                {/* TITLE : START */}   
                <Title />
                {/* TITLE : END */}

                {/* CONTROL (SEARCH + SORT + ADD) : START */}
                <Control 
                    onClickSearchGo={this.handleSearch}
                    onClickAdd={this.handleToggleForm} 
                    isShowForm={this.state.isShowForm}
                />
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

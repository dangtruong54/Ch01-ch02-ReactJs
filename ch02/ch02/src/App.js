import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
//import _ from 'lodash';
import {filter, includes} from 'lodash';


import items from './mocks/tasks';

import './App.css';
const uuidv4 = require('uuid/v4');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items           : items,
            
            isShowForm      : false,
            strSearch       : '',
            orderBy         : 'NAME',
            orderDir        : 'ASC',
            itemAddName     : '',
            itemAddLevel    : ''
        }

        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.hiddenFormCancel = this.hiddenFormCancel.bind(this);
        this.handleSearch     = this.handleSearch.bind(this);  
        this.handleAddTask      = this.handleAddTask.bind(this);
    }

    handleSearch(value){
        this.setState({
            strSearch : value
        })
    }

    handleAddTask(item){

        let {items} = this.state;
        items.push({
            id      : uuidv4(),
            name    : item.name,
            level   : +item.level // 0 Small - 1 Medium - 2 - High
        });
        this.setState({
            items : items
        })
        this.state.isShowForm = false;
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
        let showForm    = null;
        let {orderBy, orderDir}   = this.state;
    
        const search    = this.state.strSearch;

        items = filter(itemsOrigin, (item)=>{
            return includes(item.name.toLowerCase(), search.toLowerCase());
        });

        if(this.state.isShowForm) {
            showForm = <Form onclickCancel={this.hiddenFormCancel} onClickSubmit={this.handleAddTask}/>;
        }
   
        return (
            <div>
                {/* TITLE : START */}   
                <Title />
                {/* TITLE : END */}

                {/* CONTROL (SEARCH + SORT + ADD) : START */}
                <Control 
                    orderBy={orderBy}
                    orderDir={orderDir}
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

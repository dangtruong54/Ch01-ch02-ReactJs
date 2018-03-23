import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
//import _ from 'lodash';
import {filter, includes, orderBy as orderByFunction, remove} from 'lodash'
import items from './mocks/tasks';

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items           : items,
            itemID          : '',
            isShowForm      : false,
            strSearch       : '',
            orderBy         : 'name',
            orderDir        : 'desc' 
        }

        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.hiddenFormCancel = this.hiddenFormCancel.bind(this);
        this.handleSearch     = this.handleSearch.bind(this);  
        this.handleSort       = this.handleSort.bind(this);  
        this.handleDelete     = this.handleDelete.bind(this);
    }

    handleDelete(id){
       let items = this.state.items;
       remove(items, (item) => {
            return   item.id === id;
       })
       this.setState({
           items : items
       })
    }

    handleSort(orderBy, orderDir){
        this.setState({
            orderBy : orderBy,
            orderDir : orderDir
        });        
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

        let showForm    = null;
        let {orderBy, orderDir}   = this.state;

        const search    = this.state.strSearch;

        items = filter(itemsOrigin, (item)=>{
            return includes(item.name.toLowerCase(), search.toLowerCase());
        });

        items = orderByFunction(items, [orderBy], [orderDir]);

        if(this.state.isShowForm) {
            showForm = <Form onclickCancel={this.hiddenFormCancel}/>;
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
                    onclickSort={this.handleSort}
                    onClickSearchGo={this.handleSearch}
                    onClickAdd={this.handleToggleForm} 
                    isShowForm={this.state.isShowForm}
                />
                {/* CONTROL (SEARCH + SORT + ADD) : END */}

                {/* FORM : START */}
                {showForm}
                {/* FORM : END */}

                {/* LIST : START */}
                <List 
                    items={items}
                    onclickDelete={this.handleDelete}
                />
                {/* LIST : END */}
            </div>
        );
  }
}

export default App;

import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
//import _ from 'lodash';
import {filter, includes, orderBy as orderByFunction, remove, reject} from 'lodash'
import items from './mocks/tasks';

import './App.css';
const uuidv4 = require('uuid/v4');


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items           : [],
            itemID          : '',
            isShowForm      : false,
            strSearch       : '',
            orderBy         : 'name',
            orderDir        : 'desc',
            item            : null 
        }     

        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.hiddenFormCancel = this.hiddenFormCancel.bind(this);
        this.handleSearch     = this.handleSearch.bind(this);  
        this.handleSort       = this.handleSort.bind(this);  
        this.handleDelete     = this.handleDelete.bind(this);
        this.onClickAddTask   = this.onClickAddTask.bind(this);
        this.handleEdit       = this.handleEdit.bind(this);
    }

    
    componentWillMount(){
        let itemsLocalStorage = JSON.parse(localStorage.getItem("items"));
        let itemsDefault = (itemsLocalStorage !== null) ? itemsLocalStorage : items;
        this.setState({
            items : itemsDefault
        })
        localStorage.setItem("items", JSON.stringify(items));
    }

    onClickAddTask(item) {

        let {items} = this.state;
        let id = null;
        if(item.id !== "") {
            items = reject(items, {id : item.id})
        }else {
            id = uuidv4();
        }        
        items.push({
            id      : id,
            name    : item.name,
            level   : +item.level // 0 Small - 1 Medium - 2 - High
        })
        this.setState({
            items : items,
            isShowForm : false
        });
        localStorage.setItem("items", JSON.stringify(items));
    }


    handleEdit(item) {
        this.setState({
            isShowForm : true,
            item       : item
        })
        localStorage.setItem("items", JSON.stringify(items));        
    }

    handleDelete(id){
       let items = this.state.items;
       remove(items, (item) => {
            return   item.id === id;
       })
       this.setState({
           items : items
       })
       localStorage.setItem("items", JSON.stringify(items));
    }

    handleSort(orderBy, orderDir){
        this.setState({
            orderBy : orderBy,
            orderDir : orderDir
        });        
        localStorage.setItem("items", JSON.stringify(items));
    }

    handleSearch(value){
        this.setState({
            strSearch : value
        })
        localStorage.setItem("items", JSON.stringify(items));
    }

    handleToggleForm() {
        this.setState({
            isShowForm : !this.state.isShowForm,
            item            : null
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
            showForm = <Form onclickCancel={this.hiddenFormCancel} onClickEdit={this.state.item} onClickAddTask={this.onClickAddTask}/>;
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
                    onClickEdit={this.handleEdit}              
                />
                {/* LIST : END */}
            </div>
        );
  }
}

export default App;

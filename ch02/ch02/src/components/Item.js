import React, { Component } from 'react';

class Item extends Component {
    
    showLevel(level) {
        let elemLevel = null;
        if(level === 0){
            elemLevel = <span className="label label-default">Small</span>;
        }else if(level === 1){
            elemLevel = <span className="label label-info">Nomal</span>;
        }else if(level === 2){
            elemLevel = <span className="label label-danger">High</span>;
        }
        return elemLevel;
    }

    render() {
        const {item} = this.props;
        const {index} = this.props;
       
        return (  
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{item.name}</td>
                <td className="text-center">{this.showLevel(item.level)}</td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default Item;

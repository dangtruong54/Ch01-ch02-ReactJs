import React, { Component } from 'react';

class Item extends Component {
  render() {

    return (  
        <tr>
            <td className="text-center">{this.props.index + 1}</td>
            <td>{this.props.item.name}</td>
            <td className="text-center"><span className="label label-danger">{this.props.item.level}</span></td>
            <td>
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
  }
}

export default Item;

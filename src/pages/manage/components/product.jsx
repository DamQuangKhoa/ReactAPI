import React, { Component } from 'react';

class Products extends Component {
  render() {
    const {product,index} = this.props
    const statusClass = product.status?'label label-success': 'label label-danger'
    return (
      <tr>
        <td>{index +1}</td>
        <td>{product.id}</td>
        <td>{product.name} </td>
        <td>{product.price}</td>
        <td>
          
          
        <span className={statusClass}>{product.status?'Con Hang': 'Het Hang'}</span>
        </td>
        <td>
          
          <button type="button" className="btn btn-success">Edit</button>
          
          <button type="button" className="btn btn-danger">Delete</button>
          

        </td>
      </tr>
    );
  }
}

export default Products;

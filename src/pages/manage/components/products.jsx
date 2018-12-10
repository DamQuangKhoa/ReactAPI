import React, { Component } from 'react';
import Product from './product';
import {connect} from 'react-redux'

class Products extends Component {
  
  showProduct =(products) => {
    return products.map( (p, i) => {
      return <Product key={i} index={i} product={p}  />
    })
  }
  render() {

    return (
      
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      
      <button type="button" className="btn btn-primary mb-10">Add San Pham</button>
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Danh Sach San Pham</h3>
        </div>
        <div className="panel-body">

          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Ma SP</th>
                <th>Ten SP</th>
                <th>Gia</th>
                <th>Trang Thai</th>
                <th>Hanh Dong</th>
              </tr>
            </thead>
            <tbody>
              {this.showProduct(this.props.products)}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
return {
  products: state.products
}
}


export default connect(mapStateToProps,null) (Products);

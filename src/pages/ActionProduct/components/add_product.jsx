import React, { Component } from 'react';

class AddProduct extends Component {
  render() {
    return (
      
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        
        <form >
          <legend>Add Product</legend>
        
          <div className="form-group">
            <label >Ten San Pham</label>
            <input type="text" className="form-control" id="" placeholder="Input field"/>
          </div>
        <div className="form-group">
            <label >Gia San Pham</label>
            <input type="text" className="form-control" id="" placeholder="Input field"/>
          </div>
         <div className="form-group">
            <label >Status</label>
          </div> 
          
          <div className="checkbox">
            <label>
              <input type="checkbox" value=""/>
              Con Hang
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Luu Lai</button>
        </form>
        
      </div>
      
    )
  }
}

export default AddProduct;

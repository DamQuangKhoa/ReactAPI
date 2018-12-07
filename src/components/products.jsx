import React, { Component } from 'react';

class Products extends Component {
  render() {
    return (
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
              <tr>
                <td>1</td>
                <td>1</td>
                <td>Iphone 6 plus</td>
                <td>5000</td>
                <td>
                  <span className="label label-warning">Con Hang</span>
                </td>
                <td>
                  <button type="button" className="btn btn-success">Sua</button>
                  <button type="button" className="btn btn-danger ml-10">Xoa</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Products;

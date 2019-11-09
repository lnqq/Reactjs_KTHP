import React, { Component } from 'react';

class ProductList2 extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    {/* <h3 className="panel-title">Danh Sách Sản Phẩm</h3> */}
                </div>
                <br/>
                <div className="panel-body">
                    <table className="table table-bordered table-hover ">
                        <thead  >
                            <th className="mtp-3">STT</th>
                            <th className="mtp-3">Tên</th>
                            <th className="mtp-3">Ảnh</th>
                            <th className="mtp-3">Giá</th>
                            <th className="mtp-3">Giá Khuyến Mãi</th>
                            <th className="mtp-3">Trạng Thái</th>
                            <th className="mtp-3">Hành Động</th>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
                <div className="mtp-14">
                  </div> 
            </div>
            
        );
    }
}

export default ProductList2;

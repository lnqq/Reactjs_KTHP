import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="col-md-12">
                 {this.props.children}
            </div>
          
        );
    }
}

export default ProductList;

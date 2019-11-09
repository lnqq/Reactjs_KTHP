import React, { Component } from 'react';
import ProductList2 from './../../component/ProductList/ProductList2';
import ProductItem2 from './../../component/ProductItem/ProductItem2';
import {connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import Search from '../../component/search';
import CartList from '../../component/ProductList/CartList';


class ProductListPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            products : []
        };
    }

    componentDidMount(){
        callApi('products', 'GET', null).then(res => {
            this.setState({
                products: res.data
            });
        });
    }

    onDelete = (id) => {
        var {products} = this.state;
        callApi(`products/${id}`, 'DELETE', null).then(res => {
            if(res.status === 200 ){ //ok
                var index = this.findIndex(products, id);
                if (index !== -1){
                    products.splice(index, 1);
                    this.setState({
                        products : products
                    });
                }
            }
        });
    }

    findIndex = (products, id) => {
        var result = -1;
        products.forEach((product, index) => {
            if(product.id === id){
                result = index;
            }
        });
        return result;
    }

    render() {
        // console.log('render')
        // var products = [];
        // var { products } = this.props;
        var { products } = this.state;
        
        return(
            <div className="container">
                <br/>
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link 
                        to="/product/add" 
                        className="btn btn-info">
                        Thêm Sản Phẩm
                    </Link>
                    <Link to="/logout">
                        <button class="btn purple-gradient">THOÁT</button>
                    </Link>
                    <hr/>
                    <ProductList2>
                        { this.showProducts(products)}
                    </ProductList2>
                    
                    
               </div>
            </div>
        );
    }

    showProducts(products){
        var result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return(
                    <ProductItem2 
                        key={index}
                        product={product}
                        index={index}
                        onDelete = {this.onDelete}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return{
        products : state.products
    }
}


export default connect(mapStateToProps, null)(ProductListPage);
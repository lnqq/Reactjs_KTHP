import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ProductList from './../component/ProductList/ProductList';
import ProductItem from './../component/ProductItem/ProductItem';
import {connect } from 'react-redux';
import callApi from './../utils/apiCaller';
import { BrowserRouter as Router,  NavLink } from 'react-router-dom';
import axios from 'axios';

const spnu = [
  {
      name: 'XEM CHI TIẾT',
      to: '/sp-chitiet',
      exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
      <Route
          path={to}
          exact={activeOnlyWhenExact}
          children={({ match }) => {
              var active = match ? 'active' : '';
              return (
                  <li className={active}> &nbsp; &nbsp;
                      <Link to={to}>
                          {label}
                      </Link>
                  </li>
              );
          }}
      />
  );
};

class SpNu extends Component {


    constructor(props){
        super(props)
        this.state = {
           products : [],
           keyword : '',
        }
    }  
     onChange = (event) =>{
          var target = event.target;
          var name = target.name;
          var value = target.value;
          this.setState({
            [name] : value
          });
        }

    componentDidMount(){
        callApi('products', 'GET', null).then(res => {
            this.setState({
                products: res.data
            });
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
      var { products,keyword } = this.state;
    let search = this.state.products.filter(
      (product) =>{
        return product.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
      }
    );
        
      return (
        <div className="container mtp-7">

           <input 
                className="form-control mr-sm-2 search" 
                name="keyword" 
                value={keyword} 
                onChange ={ this.onChange} 
                type="search" 
                placeholder="Search" 
                aria-label="Search" />

             

        <div className="row ">
          
                   <ProductList>
                       {search.map((product,index) => {
                                    if( product.loaiquanao === 'Thời trang nữ' ){
                                        return(
                                            <ProductItem 
                                                key={index}
                                                product={product}
                                                index={index}
                                                onDelete = {this.onDelete}
                                            />
                                        );  
                                                      
                                                  
                                    }
                         })}
                    </ProductList>

                  </div>
                  <div className="mtp-14">
                    </div> 
                    <br/>
            </div>
                  
      );
    }
    showMenus = (spnews) => {
      var result = null;
      if(spnews.length > 0){
          result = spnews.map((menu, index) => {
              return (
                  <MenuLink 
                      key={index}
                      label={menu.name}
                      to={menu.to}
                      activeOnlyWhenExact={menu.exact}
                  />
              );
          });
      }
      return result;
  }
  showProducts(products){
        var result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
              if (product.trangthai ==='Mới') {
                return(
                    <ProductItem 
                        key={index}
                        product={product}
                        index={index}
                        onDelete = {this.onDelete}
                    />
                );
              }
                
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


export default  connect(mapStateToProps, null)(SpNu);
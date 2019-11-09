import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import xemchitiet from './../xemchitiet';
const spnews = [
    {
        name: '',
        to: '/product/:id/sp-chitiet',
        exact: false
    }
  ];
  
class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { product} = this.props;
        var khuyenmai = product.price - product.price / product.GiaKM;
        var km =  product.GiaKM  / product.price *100;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'secondary btn-rounded waves-effect' : 'default btn-rounded waves-effect';
        return (
            
            <div className="col-md-4 mp-40">
                <div className="card">
                    <div className="sale-flash ">
                        <img className="sale mtp-22" src="sale.png"/>
                        <b> {km}% </b>                           
                    </div>
                    
                    <div  className="abc"><p>{product.trangthai}</p> </div>
                    
                    
                    <img className="card-img-top mtp-21 " src={product.Image} alt-text="Card image cap"/>

                    <div className="card-body">
                        <div className="text-center mp-38">
                            <Link to={`/product/${product.id}/Cart`}>
                                <div>
                                    <a  className="btn btn-primary"> Đặt mua </a> 
                                </div>
                            </Link>
                            
                         <Link
                            to={`/product/${product.id}/sp-chitiet`}
                            className="btn peach-gradient mr-10"
                        >
                           Xem chi tiết
                        </Link>
                      

                           {/* <div className="mp-38">
                                <a className="btn btn-danger">{this.showMenus(spnews)}</a>
                            </div>*/}
                            <hr/>
                        </div>
                        <h6 className="card-text">{product.name} </h6>
                        <div className="">
                                <a  className="text-danger">{product.price}  đ</a> &nbsp; 
                                <br/>
                                <a   className="text-muted"><del>{khuyenmai} đ</del></a>
                                <br/>
                                
                            </div>
                        </div>
                </div>
            </div>
            


        );
    }
    showMenus = (spnews) => {
        var result = null;
        if(spnews.length > 0){
            result = spnews.map((menu, index) => {
                return (
                    <xemchitiet 
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
}

export default ProductItem;

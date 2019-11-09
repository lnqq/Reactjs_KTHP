import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callApi from '../../utils/apiCaller';

class CartList extends Component {
    constructor(props){
        super(props);
        this.state = {
          id : '',
          txtname : '',
          txtprice : '',
          txtKM :'',
          txtmota:'',
          txttrangthai:'',
          txthinh:'',
          txtloaiquanao:'',
          txtquantity: ''
          
        };
      }  
    componentDidMount(){
        var { match } = this.props;
        if(match){
          var id = match.params.id;
          callApi(`products/${id}`, 'GET', null).then(res => {
            var data = res.data;
            this.setState({
              id : data.id,
              txtname : data.name,
              txtprice  : data.price,
              txtKM : data.GiaKM,
              txttrangthai:data.trangthai,
              txtmota:data.mota,
              txthinh: data.Image,
              txtloaiquanao:data.loaiquanao,
              txtquantity: data.quantity
    
            });
          });
        }
      }
      onCart = (id) => {
        if (confirm('Thanh Toán Thành Công !!!')) { //eslint-disable-line

        }
    }
    render() {
        
        var { product} = this.props;
        var { txtquantity } = txtquantity > 0 ? txtquantity : this.state; 
        var {id,txtname, txtprice, txttrangthai,txthinh,txtKM,txtloaiquanao,txtmota, txtquantity} = this.state; 
        return (
            
            <div className="container mxp-1">
                <br/>
                <div className="container">
                    <section className="section">
                        <div className="table-responsive">
                            <table className="table product-table">
                                <thead>
                                    <tr>
                                        <th className="mpt-1">STT</th>
                                        <th className="mpt-1">Sản Phẩm</th>
                                        <th className="mpt-1">Giá</th>
                                        <th className="mpt-1">Số Lượng</th>
                                        <th className="mpt-1">Tổng Cộng</th>
                                        <th className="mpt-1"></th>
                                    </tr>
                                </thead>
                                <tbody>   
                                    <tr>
                                        <td className="mpt-1">{id}</td>
                                        <td className="mpt-1">{txtname}</td>
                                        <td className="mpt-1">{txtprice} d</td>
                                        <td className="center-on-small-only" className="mpt-1">
                                            <span className="qty">{txtquantity}</span> &nbsp;
                                            <div className="btn-group radio-group" data-toggle="buttons">
                                                <label
                                                    onClick={ () => this.onUpdateQuantity(product , txtquantity -1)}
                                                    className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                                                >
                                                    <a>—</a>
                                                </label>
                                                <label
                                                    onClick={ () => this.onUpdateQuantity(product , txtquantity +1)}
                                                    className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                                                >
                                                    <a>+</a>
                                                </label>
                                            </div>
                                        </td>
                                        <td className="mpt-1">{this.showSubTotal(txtprice , txtquantity)} d</td>
                                        {/* <td>{this.showTotalAmount(cart)} d</td> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                   
                </div>
                <div className="form-group mp-21 ">
                    <button
                        type="button"
                        className="btn purple-gradient"
                        onClick={() => this.onCart(id)}
                    >
                        Xác Nhận Thanh Toán
                    </button>
                    <Link to="/" className="btn aqua-gradient mr-10 ">
                        Trở Lại
                    </Link>
                </div>
                <br/>
                <br/>
                
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

    showSubTotal = (txtprice, txtquantity) => {
        return txtprice * txtquantity;
    }

    onUpdateQuantity = (product, txtquantity) => {
        if(txtquantity > 0){
            this.setState({
                txtquantity : txtquantity
            });
        }
    }

    // onUpdateQuantity = (product, quantity) => {
    //     if (quantity > 0) {
    //         var { onUpdateProductInCart } = this.props;
    //         onUpdateProductInCart(product, quantity);
            
    //     }
    // }

    // showTotalAmount = (cart) => {
    //     var total = 0;
    //     if (cart.length > 0){
    //         for(var i = 0; i < cart.length; i++){
    //             total += cart[i].product.price * cart[i].quantity;
    //         }
    //     }
    //     return total;
    // }
}

export default CartList;

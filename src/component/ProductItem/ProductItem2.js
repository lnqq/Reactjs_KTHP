import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const spnews = [
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



class ProductItem2 extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { product} = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'secondary btn-rounded waves-effect' : 'default btn-rounded waves-effect';
        return (

            // <div className="col-md-4 mp-40">
            //     <div className="card">
            //         <div className="sale-flash ">
            //             <img className="sale" src="sale.png"/>
            //             <b> - 4 % </b>                           
            //         </div>
            //       <div  className="abc"><p>{product.trangthai}</p> </div>
                    
            //         <img className="card-img-top" src={product.Image} alt-text="Card image cap"/>
            //         <div className="card-body">
            //             <div className="text-center mp-38">
                            
                          
            //                 <hr/>
            //             </div>
            //             <h6 className="card-text">{product.name} </h6>
            //             <div className="">
            //                     <a  className="text-danger">{product.price}  đ</a> &nbsp; 
            //                     <br/>
            //                     <a   className="text-muted"><del>{product.price} đ</del></a>
            //                     <br/>
            //                     <a  className="form-group mp-36 ">
            //                         <span className={`btn btn-outline-${statusClass}`}>
            //                             {statusName}
            //                         </span>
            //                     </a>
            //                 </div>
            //             </div>
            //         <hr/>
            //         <div className="form-group mp-21">
            //             <Link
            //                 to={`/product/${product.id}/edit`}
            //                 className="btn peach-gradient mr-10"
            //             >
            //                 Sửa
            //             </Link>
            //             <button
            //                 type="button"
            //                 className="btn purple-gradient"
            //                 onClick={() => this.onDelete(product.id)}
            //             >
            //                 Xóa
            //             </button>
            //         </div>
            //     </div>
            // </div>
            

            
            <tr className="mp-23 mtp-3">
                {/* <td>{index + 1}</td> */}
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><img className="card-img-top mpt-2" src={product.Image} alt-text="Card image cap"/></td>
                <td>{product.price} đ</td>
                <td>{product.price} đ</td>
                <td>
                    <span className={`btn btn-outline-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn peach-gradient mr-10"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn purple-gradient"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>

            </tr>
            
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
}

export default ProductItem2;

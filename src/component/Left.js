import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Sảm phẩm Hot',
        to: '/sp-hot',
        exact: false
    },
    {
        name: 'Sản Phẩm Mới',
        to: '/sp-new',
        exact: false
    },
    {
        name: 'Sản Phẩm khuyến mãi',
        to: '/sp-promotion',
        exact: false
    },
    {
        name: 'Thời Trang Nam',
        to: '/product-nam',
        exact: false
    },
    
    {
        name: 'Thời Trang Nữ',
        to: '/product-nu',
        exact: false
    },
    {
        name: 'Quản Lý Sản Phẩm',
        to: '/product-list',
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
                    <li className="{active} nav-link mp-8"> 
                        <Link to={to} className="a">
                            {label }
                        </Link>
                    </li>
                );
            }}
        />
    );
};
class Left extends Component {
  

    render() {
        return (
            <div className="col-md-3 danhmuc">
            	 {this.showMenus(menus)}
            </div>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
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
export default Left;

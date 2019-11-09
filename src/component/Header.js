import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
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

class Menu extends Component {
    render() {
        return (
            // <div className="navbar navbar-expand-lg navbar-light md-tabs mp-12">
            //     <a className="navbar-brand mp-14 mp-18"> API JS </a>
            //     <div className="collapse navbar-collapse">
            //         <ul className="navbar-nav mp-14"> 
            //             {this.showMenus(menus)}
            //         </ul>
            //     </div>
            //     <form className="form-inline">
            //         <div className="md-form my-0">
            //             <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            //         </div>
            //     </form>
            // </div>
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light justify-content-between header navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
                    <Link to="/">
                        <a className="navbar-brand mp-1 text-white" href=""><h3>SHOP SHIN</h3></a> 
                    </Link>
                                   
                        
                    <ul className="nav justify-content-end">
                        <Link to="/Login">
                            <li className="nav-item">
                                <a className="navbar-brand text-white" href=""><i className="fa fa-user"> Đăng nhập</i></a>
                            </li>
                        </Link>
                        
                        
                            <li className="nav-item">
                                <a className="navbar-brand  text-white" href=""><i className="fa fa-shopping-cart"> Giỏ hàng</i></a>
                            </li>
                       
                        
                        
                        </ul>
                </nav>
            
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

export default Menu;

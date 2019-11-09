import React, { Component } from 'react';

import Home from './../../component/home';

import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'SẢN PHẨM MỚI',
    to : '/sp-new',
    exact : false
  },
  {
    name : 'SẢN PHẨM HOT',
    to : '/sp-hot',
    exact : false
  },
  {
    name : 'SẢN PHẨM KHUYẾN MÃI',
    to : '/sp-promotion',
    exact : false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact}) => {
  return (
    <Route 
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? 'active' : '';
        return(
          <div className="col-3 danhmuc {active}">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
           <a className="nav-link"  data-toggle="pill" href="" role="tab" aria-controls="v-pills-messages" aria-selected="false"> {label}</a>
        </div>        
            </div>
          
        );
      }}
    />
  );
};

class HomePage extends Component {
    render(){
        return(
            <div className="">
               
                <div className="tab-content mp-17" id="pills-tabContent">
               
                  <div className="tab-pane fade show active md-tabs" id="pills-home" role="tabpanel" aria-labelledby="pills-NEW-tab">
                           <Home />           
                  </div>
                  
                  
            </div> 
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

export default HomePage;
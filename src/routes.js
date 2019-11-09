import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import Sphot from './component/sphot';
import Spnew from './component/spnew';
import SpNu from './component/spnu';
import SpNam from './component/spnam';
import Sppromotion from './component/sppromotion';
import Xemchitiet from './component/xemchitiet';
import Login from './component/Login/Login';
import Logout from './component/Login/Logout';
import Admin from './component/Login/Admin';

import CartList from './component/ProductList/CartList';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <HomePage />
    },
    {
        path: '/Login',
        exact : false,
        main : () => <Login />
    },
    {
        path : '/Logout',
        exact : false,
        main : () => <Logout />
    },
    {
        path : '/Admin',
        exact : false,
        main : () => <Admin/>
    },
    {
        path : '/product-list',
        exact : false,
        main : () => < Login />
    },
    {
        path : '/product/:id/Cart',
        exact : false,
        main : ({match}) => < CartList  match={match}/>
    },
 
    {
        path : '/product-nam',
        exact : false,
        main : () => < SpNam/>
    },
    {
        path : '/product-nu',
        exact : false,
        main : () => < SpNu/>
    },
    {   
        path : '/homepage',
        exact : false,
        main : () => < HomePage/>
    },
    {   
        path : '/sp-hot',
        exact : false,
        main : () => < Sphot/> 
    },
    {   
        path : '/sp-new',
        exact : false,
        main : () => < Spnew/> 
    },
    {   
        path : '/sp-promotion',
        exact : false,
        main : () => < Sppromotion/>
    },
    {
        path : '/product/:id/sp-chitiet',
        exact : false,
        main : ({match}) => < Xemchitiet  match={match}/>
    },
    {
        path : '/product/add',
        exact : false,
        main : ({history}) => < ProductActionPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact : false,
        main : ({match, history}) => < ProductActionPage match={match} history={history} />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFoundPage />
    }
];

export default routes;
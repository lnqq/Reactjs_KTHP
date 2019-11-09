import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ProductListPage from '../../pages/ProductListPage/ProductListPage';


class Admin extends Component {
    constructor(props){
        super(props)
            const token = localStorage.getItem("token")

            let loggedIn = true
            if(token == null){
                loggedIn = false
            }
            this.state = {
                loggedIn
            }
        
    }
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/Logout" />
        }
        return(
            <div className="container">

                <ProductListPage />
                
            </div>
        );
    }

}
export default Admin;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return(
            <div className="container ">
                <br/>
                <div className="alert alert-warning mxp-1" role="alert">
                     <h1>Bạn đã được đăng xuất !!!</h1>
                </div>
                
                <Link to="/Login">
                    <button className="btn peach-gradient mxp-1">Đăng Nhập</button>
                </Link>
                <div className="mtp-14">
                 </div>  
            </div>
        );
    }

}
export default Logout;
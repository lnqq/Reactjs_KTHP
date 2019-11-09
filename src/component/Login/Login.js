import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props){
        super(props);
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm(e){
        e.preventDefault()
        const { username, password} = this.state
        //login magic
        if (username === "Admin" && password === "123"){
            localStorage.setItem("token","sdasfsfsasaf")
            this.setState({
                loggedIn : true
            })
        }
    }

    render(){
        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }
        return(
            <div className="container mxp-1">
                <br/>
                
                <div className="card-header">
                    <div className="card-body">
                <h1 className="mpt-1">ĐĂNG NHẬP</h1>
                    <hr/>
                    <form onSubmit={this.submitForm}>

                        <div className="form-group">
                            <label className="font-weight-bold">Tên Đăng Nhập : </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="username"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label className="font-weight-bold">Mật Khẩu : </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        </div>
                        <br/>
                        <button type="submit" className="btn blue-gradient">Lưu Lại</button>
                        <br/>
                    </form>
                </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default Login;
import React, { Component } from 'react';
import Search from './search';
import { Link } from 'react-router-dom';
import callApi from './../utils/apiCaller';

class xemchitiet extends Component {
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
      txtloaiquanao:''
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
          txtloaiquanao:data.loaiquanao


        });
      });
    }
  }
    render() {
        var {id,txtname, txtprice, txttrangthai,txthinh,txtKM,txtloaiquanao,txtmota} = this.state;      
      return (
        <div className="container">
           
            <div className="card-deck mp-30">
                <div className="card col-md-6 mt-5">
                    <div className="card-body">
                         <img src={txthinh} alt-text="Italian Trulli" className="mp-31"/>
                    </div>
                </div>
                <div className="card-deck mxp-2 col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h3 className="text-center">
                                <b>{txtname}</b>
                            </h3><hr/><br/>                  
                        
                            <div className="mp-37">
                              <b>Giá bán: {txtprice} vnđ. </b>
                              <br/>
                              <b className="mp-35">Giá khuyến mãi: {txtKM} vnđ. </b>
                            </div><br/>                            
                            <ul >  
                              <b>Size: S, M, L</b><br/>  
                             
                              <b>Sản phẩm: { txttrangthai}. </b><br/>
                              <b>{ txtloaiquanao}. </b><br/>
                              <b>Mô tả: { txtmota}. </b>                           
                            </ul>	
                        </div>
                        <Link to={`/product/${id}/Cart`} className="btn blue-gradient mr-10">
                            Mua Hàng
                        </Link>                
                        <Link to="/" className="btn aqua-gradient mr-10">
                            Trở Lại
                        </Link>
                    </div>
                </div>
            </div>  <br/>  <br/>
        </div>
      );
    }
}

export default xemchitiet;

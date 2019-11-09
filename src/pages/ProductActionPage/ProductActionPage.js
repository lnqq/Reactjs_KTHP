import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';


class ProductActionPage extends Component {
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
      chkbstatus : '',
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
          chkbstatus : data.status,
          txtquantity : data.quantity
        });
      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var type =target.type;
    var value1 =target.value;
    var value =  target.type === 'checkbox' ? target.checked : target.value;
    if (type === 'file') {
        value = this.txthinh.value.replace( /C:\\fakepath\\/i, "/images/" );
      }
    this.setState({
      [name] : value
    });
  }

  onSave = (e) => {
    e.preventDefault();
    var {id, txtname, chkbstatus ,txtprice, txttrangthai,txthinh,txtKM,txtloaiquanao,txtmota, txtquantity} = this.state;
    var {history} = this.props;
    if(id){ 
      // http://localhost:3000/products/:id => HTTP Method : PUT
      callApi(`products/${id}`, 'PUT', {
         name : txtname,
         price : txtprice,
         trangthai: txttrangthai,
         GiaKM:txtKM,        
         Image:txthinh,
         mota:txtmota,
         loaiquanao:txtloaiquanao,
         status : chkbstatus,
         quantity : txtquantity
      
      }).then(res => {
        history.goBack();
      });
    }else{
      callApi('products', 'POST', {
         name : txtname,
         price : txtprice,
         trangthai: txttrangthai,
         GiaKM:txtKM,        
         Image:txthinh,
         mota:txtmota,
         loaiquanao:txtloaiquanao,
         status : chkbstatus,
         quantity : txtquantity
      }).then(res => {
        history.goBack();
      });
    }
  }

  render() {
    var { txtname,chkbstatus, txtprice, txttrangthai,txthinh,txtKM,txtloaiquanao,txtmota, txtquantity} = this.state;
    return (
      <div className="">  
      <br/>
         <div className="card-deck">
            <div className="card col-md-12">
          <br/>
          <div class="alert alert-danger mp-16 mp-23" role="alert">Tạo Sản Phẩm Mới</div>
            <div className="col-md-12">
              <form onSubmit={this.onSave}>

                <div className="col-md-6 mp-26">
                  <div className="form-group">
                      <label className="font-weight-bold" >Tên Sản Phẩm: </label>
                      <input
                          type="text"
                          className="form-control"
                          name="txtname"
                          value={txtname}
                          onChange={this.onChange}
                      />
                  </div>

                  
                  <div className="form-group">
                      <label className="font-weight-bold">Giá: </label>
                      <input
                          type="number"
                          className="form-control"
                          name="txtprice"
                          value={txtprice}
                          onChange={this.onChange}
                      />
                  </div>

                  <div className="form-group">
                      <label className="font-weight-bold">Giá khuyến mãi: </label>
                      <input
                          type="number"
                          className="form-control"
                          name="txtKM"
                          value={txtKM}
                          onChange={this.onChange}
                      />
                  </div>
                  <div className="form-group ">
                      <label className="font-weight-bold">Chọn Ảnh :</label>
                      <input 
                          type="file" 
                          name="txthinh"  
                          ref ={ (input) => { this.txthinh = input} } 
                          onChange ={this.onChange} 
                          className="form-control" 
                      />
                    </div>
                  
                  <br/>
                </div>
                
                <div className="col-md-6 mp-26 ">
                <div className="form-group">
                      <label className="font-weight-bold">Loại quần áo(Thời trang nam/nữ): </label>
                      <input
                          type="text"
                          className="form-control"
                          name="txtloaiquanao"
                          value={txtloaiquanao}
                          onChange={this.onChange}
                      />
                    </div>
                    
               
                    <div className="form-group">
                      <label className="font-weight-bold">Danh Mục(Hot/Mới/Khuyến mãi): </label>
                      <input
                          type="text"
                          className="form-control"
                          name="txttrangthai"
                          value={txttrangthai}
                          onChange={this.onChange}
                      />
                  </div>
                    

                  <div className="form-group">
                      <label className="font-weight-bold">Mô tả: </label>
                      <input
                          type="text"
                          className="form-control"
                          name="txtmota"
                          value={txtmota}
                          onChange={this.onChange}
                      />
                  </div>

                  <div className="form-group">
                      <label className="font-weight-bold">Số Lượng: </label>
                      <input
                          type="text"
                          className="form-control"
                          name="txtquantity"
                          value={txtquantity}
                          onChange={this.onChange}
                      />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold">Trạng Thái: </label>
                      </div>
                        <div className="custom-control custom-checkbox">
                          <input 
                            type="checkbox" 
                            className="custom-control-input" 
                            id="defaultUncheckedDisabled2"
                            name="chkbstatus"
                            value={chkbstatus}
                            onChange={this.onChange}
                            checked={chkbstatus}  
                          />
                          <label className="custom-control-label" htmlFor="defaultUncheckedDisabled2">Còn Hàng</label>
                      </div>
                  <br/>
                  <br/>
                  
                </div>
                
                <div className="form-group mp-21 ">
                  <button type="submit" className="btn blue-gradient mtp-4">Lưu Lại</button>
                  <Link to="/product-list" className="btn aqua-gradient mr-10 ">
                      Trở Lại
                  </Link>
                </div>
              <br/> 
              </form>
            </div>
            </div>
          </div>
          <br/>
        </div>
        
    );
}

}

export default ProductActionPage;